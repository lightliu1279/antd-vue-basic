<template>
  <a-layout id="screen">
    <Sider
      :collapsed="collapsed"
      :on-collapse="handleMenuCollapse"
      :menu="menu"
      :current-keys="[highLightItem]"
    />

    <a-layout>
      <Header :collapsed="collapsed" :on-collapse="handleMenuCollapse" />

      <a-breadcrumb>
        <a-breadcrumb-item v-for="(item, index) in breadList" :key="index">
          <router-link
            v-if="item.route"
            :to="item.route"
          >
            {{ breadCrumbDisplay(item.label) }}
          </router-link>
          <span v-else>{{ breadCrumbDisplay(item.label) }}</span>
        </a-breadcrumb-item>
      </a-breadcrumb>

      <a-layout-content id="content">
        <router-view />
      </a-layout-content>

      <Footer />
    </a-layout>
  </a-layout>
</template>
<script>
import Sider from './Sider';
import Header from './Header';
import Footer from './Footer';
import { mapGetters } from 'vuex';

export default {
  name: 'Layout',
  components: {
    Sider,
    Header,
    Footer
  },
  computed: {
    ...mapGetters([
      'menu',
      'collapsed'
    ]),
    highLightItem() {
      const currentRoute = this.$route.name;
      if (this.breadList.length > 2) {
        const { route = null } = this.breadList[1];
        return route && route.name || currentRoute;
      }
      return currentRoute;
    },
    breadList() {
      return this.$route.meta && this.$route.meta.breadcrumb || [];
    }
  },
  methods: {
    handleMenuCollapse(collapsed) {
      this.$store.dispatch('handleCollapsed', !this.collapsed);
    },
    breadCrumbDisplay(source) {
      if (typeof source === 'function') {
        return source(this.$route.params);
      }
      return source;
    }
  }
};
</script>
<style lang="scss" src="./style/index.scss"></style>

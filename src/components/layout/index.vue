<template>
  <a-layout id="screen">
    <Sider
      :collapsed="collapsed"
      :on-collapse="handleMenuCollapse"
      :menu="menu"
      :current-key="[currentRoute]"
      :default-open-key="defaultOpenKeys()"
    />

    <a-layout>
      <Header :collapsed="collapsed" :on-collapse="handleMenuCollapse" />

      <a-breadcrumb>
        <a-breadcrumb-item v-for="item in breadList" :key="item.name || ''">
          <router-link
            v-if="item.name != currentRoute"
            :to="{ path: item.path === '' ? '/' : item.path }"
          >
            {{ item.meta.title }}
          </router-link>
          <span v-else>{{ item.meta.title }}</span>
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
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    ...mapGetters([
      'menu'
    ]),
    currentRoute() {
      return this.$route.name;
    },
    breadList() {
      return this.$route.matched.reduce((acc, cur) => {
        acc.push(cur);
        return acc;
      }, []);
    }
  },
  methods: {
    handleMenuCollapse(collapsed) {
      this.collapsed = collapsed;
    },
    defaultOpenKeys() {
      if (!this.breadList.length) return [];
      return [this.breadList[1].name || ''];
    }
  }
};
</script>
<style lang="scss" src="./style/index.scss"></style>

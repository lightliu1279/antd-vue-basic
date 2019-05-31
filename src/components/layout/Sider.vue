<template>
  <a-layout-sider
    :collapsed="collapsed"
    :trigger="null"
    collapsible
    breakpoint="lg"
    @collapse="onCollapse"
  >
    <div class="logo">
      <h2 class="logo__title">
        <b>KKday</b>
      </h2>
    </div>
    <a-menu
      id="menu"
      theme="dark"
      mode="inline"
      :selected-keys="defautMenuSelected()"
    >
      <template v-for="item in menuList">
        <a-menu-item
          v-if="!item.children"
          :key="item.key"
          @click="routePush(item.route)"
        >
          <a-icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </a-menu-item>

        <template v-if="item.children">
          <a-sub-menu :key="item.key">
            <span slot="title">
              <a-icon :type="item.icon" />
              <span>{{ item.title }}</span>
            </span>

            <a-menu-item
              v-for="n in item.children"
              :key="n.key"
              @click="routePush(item.route)"
            >
              <a-icon v-if="n.icon" :type="n.icon" />
              <span>{{ n.title }}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script>
export default {
  name: 'Sider',
  props: {
    collapsed: {
      type: Boolean,
      default: () => false
    },
    onCollapse: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    menuList() {
      return this.$store.getters.menu || [];
    }
  },
  methods: {
    defautMenuSelected() {
      const target = this.menuList.find(elm => {
        return elm.route && elm.route.name === this.$route.name;
      });
      return [target && target.key || ''];
    },
    routePush(route) {
      this.$router.push(route);
    }
  }
};
</script>

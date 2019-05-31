<template>
  <div id="root">
    <a-layout id="screen">
      <Sider :collapsed="collapsed" :on-collapse="handleMenuCollapse" />
      <a-layout>
        <Header :collapsed="collapsed" :on-collapse="handleMenuCollapse" />

        <a-breadcrumb>
          <a-breadcrumb-item
            v-for="(n, index) in breadcrumb"
            :key="index"
          >
            {{ n }}
          </a-breadcrumb-item>
        </a-breadcrumb>

        <a-layout-content id="content">
          <router-view />
        </a-layout-content>

        <Footer />
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Sider from './Sider';
import Header from './Header';
import Footer from './Footer';

export default {
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
    breadcrumb() {
      return this.$route.meta.breadcrumb;
    }
  },
  methods: {
    handleMenuCollapse(collapsed) {
      this.collapsed = collapsed;
    }
  }
};
</script>

<style lang="scss">
#screen {
  > .ant-layout {
    min-height: 100vh;
  }

  #header {
    background: #fff;
    padding: 0;

    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color .3s;

      &:hover {
        color: #1890ff;
      }
    }
  }

  #content {
    margin: 20px 15px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }

  .logo {
    height: 64px;
    // background: #002140;
    display: flex;
    justify-content: center;
    align-items: center;

    &__title{
      color: #fff;
      margin: 0;
    }
  }

  .ant-breadcrumb {
    // display: flex;
    // justify-content: space-between;
    padding: 16px 24px 0;
    font-size: 14px;

    &__current {
      height: 15px;
    }
  }
}
</style>

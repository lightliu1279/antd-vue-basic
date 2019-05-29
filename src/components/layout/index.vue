<template>
  <div id="root">
    <a-layout id="screen">
      <a-layout-sider
        v-model="collapsed"
        :trigger="null"
        collapsible
      >
        <div class="logo">
          <h2 class="logo__title">
            <b>KKday</b>
          </h2>
        </div>

        <Menu />
      </a-layout-sider>

      <a-layout>
        <Header :collapsed.sync="collapsed" />
        <a-layout-content id="content">
          Content
        </a-layout-content>
        <Footer />
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'App',
  components: {
    Menu,
    Header,
    Footer
  },
  data() {
    return {
      collapsed: false
    };
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
}

</style>

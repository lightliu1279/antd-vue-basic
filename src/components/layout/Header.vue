<template>
  <a-layout-header id="header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click.native="trigger"
    />
  </a-layout-header>
</template>

<script>
export default {
  name: 'Header',
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
  methods: {
    trigger() {
      this.onCollapse(!this.collapsed);
    }
  }

};
</script>

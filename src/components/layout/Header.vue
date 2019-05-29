<template>
  <a-layout-header id="header">
    <a-icon
      class="trigger"
      :type="$collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="()=> $collapsed = !$collapsed"
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
    }
  },
  computed: {
    $collapsed: {
      get() {
        return this.collapsed;
      },
      set(val) {
        this.$emit('update:collapsed', val);
      }
    }
  }
};
</script>

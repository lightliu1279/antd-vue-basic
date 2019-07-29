<template>
  <div id="app">
    <router-view />
    <portal-target
      name="highlightable"
      multiple
    />
    <portal-target
      name="modal"
      multiple
    />
  </div>
</template>
<script>
export default {
  name: 'App'
};
</script>

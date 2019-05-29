<template>
  <a-menu id="menu" theme="dark" mode="inline" :default-selectedkeys="['s1']" :default-open-keys="['sub1']">
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
      <a-menu-item key="s1">
        Option 1
      </a-menu-item>
      <a-menu-item key="s2">
        Option 2
      </a-menu-item>
    </a-sub-menu>

    <a-menu-item key="2">
      <a-icon type="video-camera" />
      <span>nav 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <a-icon type="upload" />
      <span>nav 3</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: 'Menu'
};
</script>

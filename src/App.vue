<template>
  <div id="app">
    <Layout/>
  </div>
</template>
<script>

import Layout from './layout/index.vue';
// 全局样式
import './style/index.scss';

export default {
  components: {
    Layout: Layout
  },
  created() {

  }
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  
}
</style>

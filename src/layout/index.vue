<template>
  <div class="layout">
    <Header/>

    <div class="layout-content">
        <h1>国际化示例</h1>
        <span>{{$t("demo.country")}}------{{$t("home.age")}}</span>
        <router-view></router-view>
    </div>

  </div>
</template>
<script>

import Header from './Header/index';

export default {
    components: {
        Header,
    }
    
}
</script>
<style lang="scss">

</style>
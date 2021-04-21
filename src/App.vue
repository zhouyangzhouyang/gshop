<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showtheFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  components: {
    FooterGuide
  }
}
</script>

<style>
  #app{width:100%;
  height: 100%;
  background-color: #f5f5f5;
  }
</style>
<!--<style>-->
<!--#long{-->
<!--  color: green;-->
<!--}-->
<!--</style>-->

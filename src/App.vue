<template>
  <div id="app" class="clearfix">
    <router-view></router-view>
    <Global/>
  </div>
</template>

<script>
import Login from '@/components/page/Login'
import Global from '@/components/page/Global'
export default {
  name: 'app',
  components: {
  	Login,
  	Global
  }
}
</script>

<style>
</style>

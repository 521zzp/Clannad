<template>
  <div id="app" class="clearfix">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from '@/components/page/Login'
export default {
  name: 'app',
  components: {
  	Login
  }
}
</script>

<style>
</style>

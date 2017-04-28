<template>
  <div id="app">
    <img src="./assets/logo.png">
    	<Icon type="trash-a"></Icon>
    	<img src="http://www.art.com/62345606_p0_master1200.jpg"/>
    	<Page :current="1" :total="100"></Page>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

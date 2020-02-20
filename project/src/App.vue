<template>
  <div id="app">
    <side-bar />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
  background: #F9FAFB;
  font-family: "Noto Sans SC";
  color: #5b5b5b;
}

</style>

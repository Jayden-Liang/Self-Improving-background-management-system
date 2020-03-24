<template>
  <div id="app">
    <side-bar />
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
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
@import './App.css';

</style>

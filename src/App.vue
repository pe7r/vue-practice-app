<template>
  <div id="app">
    <Header />
    <router-view />
    <!-- <MyHello :msg="msg" :isShowing="isShowing" /> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>

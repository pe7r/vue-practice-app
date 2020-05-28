<template>
  <div id="app">
    <div class="formContainer">
      <Form />
    </div>
    <!-- <MyHello :msg="msg" :isShowing="isShowing" /> -->
  </div>
</template>

<script>
// import MyHello from './components/MyHello'
import Form from './components/Form'

export default {
  name: 'App',
  components: {
    // MyHello,
    Form,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowing: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.formContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

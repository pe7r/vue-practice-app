<template>
  <div
    @click="changeColor"
    v-if="isShowing"
    class="message"
    :class="{blue: color === 'blue', red: color === 'red'}"
  >
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'MyHello',
  props: ['msg', 'isShowing'],
  data() {
    return {
      color: 'blue'
    }
  },
  methods: {
    changeColor() {
      this.color = 'red'
    }
  }
}
</script>

<style scoped>
  .message {
    cursor: pointer;
  }

  .blue {
    background: skyblue;
  }

  .red {
    background: red;
  }
</style>
<template>
  <div style="display: flex; margin-bottom: 10px; width: 100%;">
    <input type="text" class="groupedInput" placeholder="Title*" v-model="technology.title">
    <input type="text" class="groupedInput" placeholder="Description" v-model="technology.description">
    <button @click="$emit('deleteTechnology', technology.id)">Delete</button>
  </div>
</template>

<script>
export default {
  props: ['technology']
}
</script>

<style scoped>
  .groupedInput {
    width: 50%;
  }
</style>
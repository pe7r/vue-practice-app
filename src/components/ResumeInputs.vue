<template>
  <div style="display: flex; margin-bottom: 10px; width: 100%;">
    <input type="text" class="groupedInput" placeholder="Title*" v-model="item.title">
    <input type="text" class="groupedInput" placeholder="Description" v-model="item.description">
    <button @click="$emit('deleteInputs', item.id)">Delete</button>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
  .groupedInput {
    width: 50%;
  }
</style>
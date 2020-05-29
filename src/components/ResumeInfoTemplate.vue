<template>
  <div>
    <div v-if="data.length">
      <h3>{{dataTitle}}:</h3>
      <div v-for="item of data" :key="item.id">
        <ResumeInputs @deleteInputs="deleteInputs" :item="item" :isError="errorInputs.includes(item.id)" />
        <span v-if="errorInputs.includes(item.id)" style="color: red; float: left;">*Title is required</span>
      </div>
    </div>
    <h3 v-else> No {{dataTitle}} yet </h3>
    <div>
      <button @click="addInputs" style="width: 100px">Add</button>
    </div>
    <div v-if="hasDuplicates" style="color: red; float: left;">*{{dataTitle}} must be unique</div>
  </div>
</template>

<script>
import ResumeInputs from '@/components/ResumeInputs'
export default {
  props: ['data', 'dataTitle', 'hasDuplicates', 'errorInputs'],
  components: {
    ResumeInputs,
  },
  methods: {
    deleteInputs(id) {
      this.$emit('deleteInputs', id)
    },
    addInputs() {
      this.$emit('addInputs')
    }
  }
}
</script>
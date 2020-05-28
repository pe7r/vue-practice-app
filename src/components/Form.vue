<template>
  <div class="form">
    <input v-model="name" />
    <div>
      <h1>Techologies:</h1>
      <div v-for="item of technologies" :key="item.id" style="display: flex; margin-bottom: 10px;">
        <input type="text" class="groupedInput" placeholder="Title" v-model="item.title">
        <input type="text" class="groupedInput" v-model="item.description" placeholder="Description">
        <button @click="deleteTechnology(item.id)">Delete</button>
      </div>
      <button @click="addTechnology">Add</button>
    </div>
  </div>
</template>

<script>
// import TechnologyInputs from '@/components/TechnologyInputs'
export default {
  components: {
    // TechnologyInputs,
  },
  data() {
    return {
      name: 'Peter',
      technologies: [{
        title: '',
        description: '',
        id: 1,
      }]
    }
  },
  methods: {
    addTechnology() {
      this.technologies.push({
        title: '',
        description: '',
        id: this.technologies.length + 1,
      })
    },
    deleteTechnology(id) {
      let itemIndex = this.technologies.map(i => i.id).indexOf(id);
      console.log('delete index', id)
      this.technologies.splice(itemIndex, 1)
    },
  }
}
</script>

<style scoped>
  .form {
    width: 800px;
    min-height: 800px;
    border: 1px solid;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }

  .groupedInput {
    width: 50%;
  }
</style>
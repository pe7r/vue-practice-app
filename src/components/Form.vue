<template>
  <div class="form">
    <div>
      <input v-model="name" placeholder="Name*" style="width: 100%" />
      <span style="color: red; float: left;" v-if="name.length < 1 || errors.name"> {{errors.name}} </span>
    </div>

    <div v-if="technologies.length">
      <h3>Techologies:</h3>
      <div v-for="item of technologies" :key="item.id">
        <TechnologyInputs @deleteTechnology="deleteTechnology" technology="item" />
        <span v-if="errorTechs.includes(item.id)" style="color: red; float: left;">*Title is required</span>
      </div>
    </div>
    <h3 v-else> No Technologies yet </h3>
    <div>
      <button @click="addTechnology" style="width: 100px">Add</button>
    </div>
    <div v-if="hasDuplicates" style="color: red; float: left;">*Technologies must be unique</div>
    <div class="buttonGroup">
      <button @click="cancel">Cancel</button>
      <button @click="checkValidation">Submit</button>
    </div>
  </div>
</template>

<script>
import TechnologyInputs from '@/components/TechnologyInputs'
export default {
  components: {
    TechnologyInputs,
  },
  data() {
    return {
      name: '',
      technologies: [
        {
          title: '',
          description: '',
          id: 1,
        }
      ],
      errors: [],
      errorTechs: [],
      hasDuplicates: false
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
      this.technologies.splice(itemIndex, 1)
      let errorIndex = this.errorTechs.map(i => i.id).indexOf(id);
      this.errorTechs.splice(errorIndex, 1)
    },
    checkValidation() {
      let errors = [];

      if (!this.name) {
        errors = {...errors, name: '*required'}
      }

      let technologiesTitleArr = this.technologies.map(item => item.title);
      let technologiesIdErrorsArr = this.technologies.map(item => !item.title ? item.id : null).filter(i => i !== null);
      this.errorTechs = technologiesIdErrorsArr;

      let uniqueTitles = new Set(technologiesTitleArr);
      if (technologiesTitleArr.length > uniqueTitles.size) {
        this.hasDuplicates = true;
      } else {
        this.hasDuplicates = false;
      }

      this.errors = errors;
      if (errors.length < 1 && !this.hasDuplicates) {
        console.log({
          name: this.name,
          technologies: [...this.technologies]
        })
      }
    },
    cancel() {
      this.name = '';
      this.technologies = [];
      this.errorTechs = [];
      this.hasDuplicates = false;
      this.errors = [];
    },
  }
}
</script>

<style scoped>
  .form {
    width: 800px;
    min-height: 150px;
    border: 1px solid;
    padding: 30px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .buttonGroup {
    display: flex;
    justify-content: space-between;
    vertical-align: bottom;
  }
</style>
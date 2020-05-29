<template>
  <div class="form">
    <ResumeInfoTemplate
      :data="projects"
      :hasDuplicates="hasDuplicates"
      dataTitle="Projects"
      :errorInputs="errorInputs"
      @addInputs="addInputs"
      @deleteInputs="deleteInputs"
    />
  </div>
</template>

<script>
import ResumeInfoTemplate from '@/components/ResumeInfoTemplate'
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: '',
          description: ''
        },
      ],
      hasDuplicates: false,
      errorInputs: [],
    }
  },
  components: {
    ResumeInfoTemplate,
  },
  methods: {
    addInputs() {
      this.projects = [...this.projects, {
        id: this.projects.length + 2,
        title: '',
        description: ''
      }]
    },
    deleteInputs(id) {
      this.projects = this.projects.filter(i => i.id !== id)
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
</style>
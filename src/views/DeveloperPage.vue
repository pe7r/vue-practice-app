<template>
  <div class="formContainer">
    <DeveloperForm />
  </div>
</template>

<script>
import DeveloperForm from '@/components/DeveloperForm'

export default {
  name: 'App',
  components: {
    DeveloperForm,
  },
}
</script>

<style scoped>
.formContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

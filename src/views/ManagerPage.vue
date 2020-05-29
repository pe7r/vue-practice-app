<template>
  <div class="formContainer">
    <ManagerForm />
  </div>
</template>

<script>
import ManagerForm from '@/components/ManagerForm'

export default {
  name: 'App',
  components: {
    ManagerForm,
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
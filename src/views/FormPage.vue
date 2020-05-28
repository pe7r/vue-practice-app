<template>
  <div class="formContainer">
    <Form />
  </div>
</template>

<script>
import Form from '@/components/Form'

export default {
  name: 'App',
  components: {
    Form,
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

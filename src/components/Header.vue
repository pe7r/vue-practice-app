<template>
  <div class="container">
    <div class="logo">
      <h3>Logo</h3>
    </div>
    <div class="links">
      <router-link to='/'>Home</router-link>
      <router-link to='/managerPage'>Manager Page</router-link>
      <router-link to='/developerPage'>Developer Page</router-link>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  }

  a {
    margin-left: 10px;
    text-decoration: none;
    color: black;
  }
</style>
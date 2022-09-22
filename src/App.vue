<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.app-btns {
  display: flex;
  justify-content: space-between;
}
</style>

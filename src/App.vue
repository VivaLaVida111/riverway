<template>
  <el-container>
    <el-header class="header">
      <h5 class="card-title">
        金牛区城管局
      </h5>
    </el-header>
    <el-main class="main">
      <img alt="riverway" src="./assets/riverway.jpg" class="responsive-img" />
    </el-main>
  </el-container>
</template>

<script setup>
//import { ref } from 'vue';
</script>

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #f8f9fa;
  --border-color: #e0e0e0;
  --font-size-large: 30px;
  --font-size-medium: 25px;
  --spacing-large: 20px;
  --spacing-medium: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
  margin: 0; /* Remove top margin */
}

.header {
  background-color: var(--secondary-color);
  padding: var(--spacing-large);
  text-align: center;
  border-bottom: 1px solid var(--border-color);
  font-size: var(--font-size-medium);
  width: 100%;
  box-sizing: border-box;
  position: fixed; /* Fix header at the top */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure header is above other content */
}

.header .card-title {
  font-size: var(--font-size-large);
  padding: var(--spacing-medium);
  margin: 0;
  color: #333;
}

.main {
  padding: var(--spacing-large);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: calc(var(--spacing-large) * 2 + var(--font-size-medium)); /* Adjust for fixed header height */
}

.responsive-img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: var(--spacing-medium);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
<template>
  <HomePage></HomePage>
</template>

<script>
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
:root {
  --global-font-family: 
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  overflow: auto;
}

* {
  font-family: var(--global-font-family);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

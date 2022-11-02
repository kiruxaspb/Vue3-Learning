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
  --main-background-color: rgb(211, 211, 211);

  --play-backgroud-color: rgb(101, 213, 112);
  --play-hover-backgroud-color: rgb(164, 228, 108);
  --play-hover-border-color: rgb(12, 104, 0);
  
  --settings-backgroud-color: rgb(118, 121, 119);
  --settings-hover-backgroud-color: rgb(108, 110, 108);
  --settings-hover-border-color: rgb(0, 0, 0);
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
  /* font-family: var(--global-font-family); */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

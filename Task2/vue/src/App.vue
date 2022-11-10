<template>
  <HomePage></HomePage>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import HomePage from '@/components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage
  },
  methods: {
    ...mapGetters(['getAppsFromComponentsList']),
    ...mapMutations(['setApps'])
  },
  created() {
    this.setApps(this.getAppsFromComponentsList);
  }
}
</script>

<style>
:root {
  --main-background-color: rgb(211, 211, 211);
  --main-hover-background-color: rgb(171, 171, 171);
}

html, body, #app {
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  overflow: auto;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

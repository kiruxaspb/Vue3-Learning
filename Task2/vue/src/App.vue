<template>
  <HomePage></HomePage>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import HomePage from '@/components/HomePage.vue'

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

  --play-backgroud-color: rgb(101, 213, 112);
  --play-hover-backgroud-color: rgb(116, 240, 128);
  --play-hover-border-color: rgb(12, 104, 0);
  
  --settings-backgroud-color: rgb(118, 121, 119);
  --settings-hover-backgroud-color: rgb(154, 154, 154);
  --settings-hover-border-color: rgb(0, 0, 0);

  --setting-page-background: rgb(171, 171, 171);
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

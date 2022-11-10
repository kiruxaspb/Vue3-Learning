<template>
<div class="home-component" :class="[this.appColorTheme, this.appFont]">
  <div class="applications-holder">
    <component :is="currentLeftApp"></component>
    <component :is="currentRightApp"></component>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

import PlayComponent from './center-menu/PlayComponent.vue';
import SettingsComponent from './center-menu/SettingsComponent.vue';
import SettingApp from './center-menu/SettingApp.vue';
import FirstApp from './apps/FirstApp.vue';
import SecondApp from './apps/SecondApp.vue';

export default {
  name: 'HomePage',

  components: {
    PlayComponent,
    SettingsComponent,
    SettingApp,
    FirstApp,
    SecondApp
  },

  computed: {
    ...mapState(['currentLeftApp', 'currentRightApp', 'appColorTheme', 'appFont'])
  }
}
</script>

<style>
html, body {
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
   
:root {
  --theme-background-color: rgb(173, 173, 173);
  --theme-background-hover-color: rgb(143, 143, 143);
  --theme-font-family: 'Arial';
}

.home-component {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--theme-background-color);
  font-family: var(--theme-font-family);
}

.home-component:hover {
  background: var(--theme-background-hover-color);
}

.applications-holder {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.default {
  background: var(--theme-background-color);
}

.blue {
  --theme-background-color: rgb(118, 118, 255);
}

.blue:hover {
  --theme-background-hover-color: rgb(85, 85, 255);
}

.orange {
  --theme-background-color: rgb(255, 179, 79);
}

.orange:hover {
  --theme-background-hover-color: rgb(255, 161, 37);
}

.purple {
  --theme-background-color: rgb(238, 74, 197);
}

.purple:hover {
  --theme-background-hover-color: rgb(171, 54, 142);
}

.consolas {
  --theme-font-family: 'Consolas';
}

.trebuchet {
  --theme-font-family: 'Trebuchet MS';
}

</style>
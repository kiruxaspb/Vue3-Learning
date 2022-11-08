<template>
<div class="home-component">
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
import SettingApp from './center-menu/SettingApp.vue'

import FirstApp from './apps/FirstApp.vue'
import SecondApp from './apps/SecondApp.vue'

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
    ...mapState(['currentLeftApp', 'currentRightApp'])
  }
}
</script>

<style scoped>
.home-component {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--main-background-color);
}

.applications-holder {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}
</style>
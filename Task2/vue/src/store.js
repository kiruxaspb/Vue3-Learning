import { createStore } from 'vuex';
import components from '@/data/components/componets.json';
import errors from '@/data/components/errors.json';

export const store = createStore({
  state() {
    return {
      playClicks: 0,
      settingsClicks: 0,

      appForPlay: components.playComponent,

      apps: {},

      names: [],

      currentLeftApp: components.playComponent,
      currentRightApp: components.settingComponent,

      components,
      errors
    }
  },
  mutations: {
    setPlayClicks(state, playClicks) {
      state.playClicks = playClicks;
    },

    setSettingsClicks(state, settingsClicks) {
      state.settingsClicks = settingsClicks;
    },

    setCurrentLeftApp(state, currentLeftApp) {
      state.currentLeftApp = currentLeftApp;
    },

    setPlayingApp(state, currentPlayingApp) {
      state.currentPlayingApp = currentPlayingApp;
    },

    setCurrentRightApp(state, currentRightApp) {
      state.currentRightApp = currentRightApp;
    },

    setApps(state, apps) {
      state.apps = apps;
    },

    setAppForPlay(state, appForPlay) {
      state.appForPlay = appForPlay;
    }
  }, 
  getters: {
    getAppsFromComponentsList(state) {
      return state.components.apps;
    }
  },
  actions: {

  }
})
import { createStore } from 'vuex';
import components from '@/data/components/componets.json';
import errors from '@/data/components/errors.json';
import appColors from '@/data/components/appColors.json';
import appFonts from '@/data/components/appFonts.json';

export const store = createStore({
  state() {
    return {
      appForPlay: components.playComponent,

      apps: {},

      names: [],

      currentLeftApp: components.playComponent,
      currentRightApp: components.settingComponent,

      components,
      errors,

      // theme
      appColors,
      appFonts,

      appColorTheme: appColors.DefaultColor,
      appFont: appFonts.DefalutFont
    }
  },
  mutations: {
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
    },

    // theme
    setAppThemeColor(state, appColorTheme) {
      state.appColorTheme = appColorTheme;
    },

    setAppFont(state, appFont) {
      state.appFont = appFont;
    }
  },

  getters: {
    getAppsFromComponentsList(state) {
      return state.components.apps;
    },

    // theme
    getСolorsFromCustomColorsList(state) {
      return state.appColors.customColors;
    },

    getFontsFromCustomFontsList(state) {
      return state.appFonts.customFonts;
    }
  },

  actions: {

  }
})
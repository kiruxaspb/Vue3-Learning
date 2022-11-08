<template>
  <div class="setting-holder-container">
    <div class="back-btn">
      <div class="go-back-btn" @click="back()">
        <svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <path d="M441.751,475.584L222.166,256L441.75,36.416c6.101-6.101,7.936-15.275,4.629-23.253C443.094,5.184,435.286,0,426.667,0 H320.001c-5.675,0-11.093,2.24-15.083,6.251L70.251,240.917c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667 c3.989,4.011,9.408,6.251,15.083,6.251h106.667c8.619,0,16.427-5.184,19.712-13.163 C449.687,490.858,447.852,481.685,441.751,475.584z"/>
        </svg>
      </div>
    </div>
    <div class="select-holder-container">
      <p>Apps:</p>
      <select name="select" v-model="selectedApp" @change="setLeftApp">
        <option selected :value="application" v-for="(application, index) in getAppsFromComponentsList()" :key="index">{{ application }}</option>
      </select>
      <p>Colors:</p>
      <select name="select" v-model="selectedAppThemeColor" @change="setAppColor">
        <option selected :value="color" v-for="(color, index) in getСolorsFromCustomColorsList()" :key="index">{{ index }}</option>
      </select>
      <p>Fonts:</p>
      <select name="select" v-model="selectedAppFont" @change="setAppFont">
        <option selected :value="font" v-for="(font, index) in getFontsFromCustomFontsList()" :key="index">{{ index }}</option>
      </select>
    </div>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'SettingApp',
  data() {
    return {
      selectedApp: '',
      selectedAppThemeColor: '',
      selectedAppFont: ''
    }
  },
  methods: {
    ...mapGetters(['currentRightApp', 'getAppsFromComponentsList', 'getСolorsFromCustomColorsList', 'getFontsFromCustomFontsList']),
    ...mapMutations(['setAppForPlay', 'setCurrentRightApp', 'setAppThemeColor', 'setAppFont']),

    back() {
      this.setCurrentRightApp(this.components.settingComponent)
    },

    setLeftApp() {
      this.setAppForPlay(this.selectedApp);
    },

    setAppColor() {
      this.setAppThemeColor(this.selectedAppThemeColor);
    },

    setAppFont() {
      this.setAppFont(this.selectedAppFont);
    }
  },

  computed: {
    ...mapState(['components', 'appColors', 'appFonts'])
  },
  
  created() {
    console.log(this.getAppsFromComponentsList());
    console.log(this.getСolorsFromCustomColorsList());
    console.log(this.getFontsFromCustomFontsList());
  },
}
</script>

<style>
select {
  width: 200px;
  height: 30px;
}

.setting-holder-container {
  position: relative;
  width: 400px;
  height: 400px;
  background: var(--setting-page-background);
  border-radius: 10px;
}

.select-holder-container {
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--setting-page-background);
  border-radius: 10px;
}

.select-holder-container select {
  margin-bottom: 40px;
}

.back-btn {
  position: relative;
  left: 15px;
  top: 15px;
  z-index: 1;
}

.go-back-btn {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>
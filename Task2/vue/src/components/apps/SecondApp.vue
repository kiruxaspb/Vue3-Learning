<template>
  <div class="second-app-holder-container">
    <div @click="back()" class="go-back-btn">
      <svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <path d="M441.751,475.584L222.166,256L441.75,36.416c6.101-6.101,7.936-15.275,4.629-23.253C443.094,5.184,435.286,0,426.667,0 H320.001c-5.675,0-11.093,2.24-15.083,6.251L70.251,240.917c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667 c3.989,4.011,9.408,6.251,15.083,6.251h106.667c8.619,0,16.427-5.184,19.712-13.163 C449.687,490.858,447.852,481.685,441.751,475.584z"/>
      </svg>
    </div>
    <h1>SECOND APP</h1>
  </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  
  export default {
    name: 'SecondApp',
    methods: {
      ...mapMutations(['setCurrentLeftApp']),
      back() {
        this.setCurrentLeftApp(this.components.playComponent)
      }
    },
  
    computed: {
      ...mapState(['components', 'appColorTheme', 'appFont'])
    }
  }
  
  </script>
  
  <style scoped>
  .second-app-holder-container {
    position: relative;
    border-radius: 10px;
    border: 1px solid black;
    width: 400px;
    height: 400px;
  }
  
  .go-back-btn {
    z-index: 1;
    left: 15px;
    top: 15px;
    position: relative;
  }
  
  h1 {
    text-align: center;
  }
  </style>

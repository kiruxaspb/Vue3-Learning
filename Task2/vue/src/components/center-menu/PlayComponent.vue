<template>
  <div class="play-holder-container">
    <div class="play-container" @click="setCurrentComponent()">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
        <path id="XMLID_497_" d="M292.95,152.281L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4C32.959,4.524,30,9.547,30,15v300 c0,5.453,2.959,10.476,7.728,13.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999 c4.386-2.741,7.05-7.548,7.05-12.72C300,159.829,297.336,155.022,292.95,152.281z M60,287.936V42.064l196.698,122.937L60,287.936z"/>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'PlayComponent',

  methods: {
    ...mapMutations(['setCurrentLeftApp']),

    setCurrentComponent() {
      this.setCurrentLeftApp(this.appForPlay);
    }
  },

  computed: {
    ...mapState(['components', 'appForPlay'])
  },
}

</script>

<style scoped>
.play-holder-container {
  display: flex;
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 15px;
  background: var(--play-backgroud-color);
}

.play-holder-container:hover {
  background: var(--play-hover-backgroud-color);
  border: 1px solid var(--play-hover-border-color);
}
.play-container {
  width: 150px;
  height: 150px;
  margin: 0 auto;
}
.play-container svg {
  cursor: pointer;
  width: 150px;
  height: 150px;
}

.play-container svg:hover {
  margin-top:-13px;
  margin-left: -13px;
  width: 175px;
  height: 175px;
}

</style>
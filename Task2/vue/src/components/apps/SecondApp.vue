<template>
<p @click="back()">Back</p>
<h1>SECOND APP</h1>
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
    ...mapState(['components'])
  }
}

</script>

<style scoped>
h1 {
  align-items: center;
}
</style>
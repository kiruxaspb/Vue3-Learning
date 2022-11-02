<template>
<div class="home-component">
  <div class="menu">
    <LeftComponent></LeftComponent>
    <RightComponent></RightComponent>
  </div>
</div>
</template>

<script>
import LeftComponent from './content/LeftComponent.vue';
import RightComponent from './content/RightComponent.vue';

export default {
  name: 'HomePage',
  components: {
    LeftComponent,
    RightComponent
  }
}

</script>

<style scoped>
.home-component {
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--main-background-color);
}

.menu {
  position: relative;
  top: 30%;
  display: flex;
  margin: 0 auto;
}
</style>
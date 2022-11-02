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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--main-background-color);
}

.menu {
  flex-wrap: wrap;
  position: absolute;
  display: flex;
  margin: 0 auto;
}
</style>
<template>
<div class="home-component">
  <LeftComponent></LeftComponent>
  <RightComponent></RightComponent>
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
  width: 100%;
  height: 100%;
  padding-top: var(--navbar-height);
  background: var(--main-background-color);
}

.content {
  max-width: var(--content-width);
  margin: 0 auto;
}

</style>
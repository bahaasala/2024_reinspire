<template>
  <div v-if="!loaded" class="loading-open" ref="loadingElement"></div>
</template>

<script lang="ts" setup>
import { gsap, Power3 } from "gsap";

const loadingElement = ref<HTMLElement | null>(null);

const loaded = ref(false);

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: Power3.easeOut },
  });

  tl.to(loadingElement.value, {
    height: "0vh",
    ease: Power3.easeInOut,
    duration: 1.5,
  });
});
</script>
<style lang="scss">
$component: "loading-open";

.#{$component} {
  position: fixed;
  width: 100%;
  background-color: #131010;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2999;
}
</style>

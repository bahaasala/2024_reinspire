<template>
  <div v-if="!loaded" class="loading" ref="loadingElement">
    <div class="loading__container">
      <div class="loading__container__logo" ref="loadingLogoContainer">
        <div class="loading__logo--re">
          <p class="loading__logo--re-text">Re</p>
        </div>
        <div class="loading__logo--rest" ref="logoRest">
          <span class="loading__logo--rest-text">design</span>
          <span class="loading__logo--rest-text">think</span>
          <span class="loading__logo--rest-text">inspire</span>
        </div>
        <div class="loading__logo--brand" ref="brand">
          <span class="loading__logo--brand-text">®</span>
        </div>
        <!-- <p class="loading__logo">
          Re <span>inspire</span><br />
          <span>design</span><br />
          <span>think</span>
        </p> -->
      </div>

      <div class="loading__container__image" ref="loadingImageContainer">
        <div class="loading__bar-container">
          <div class="loading__bar" ref="loadingBar">
            <p class="loading__bar-percent">0%</p>
            <p class="loading__bar-percent">50%</p>
            <p class="loading__bar-percent">100%</p>
          </div>
        </div>

        <div class="loading__picture" ref="loadingPicture">
          <!-- <img
            ref="loadingPictureImage"
            class="black-white"
            src="https://www.datocms-assets.com/101417/1688383873-reinspire_art_3.jpg"
            alt="Reinspire Loading"
          /> -->
          <div class="image-overlay"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap, Power3 } from "gsap";

// const loaded = ref(false);
let loaded = ref(0);
// const isLoaded = ref(false);
const loadingElement = ref<HTMLElement | null>(null);
const loadingImageContainer = ref<HTMLElement | null>(null);
const loadingLogoContainer = ref<HTMLElement | null>(null);
const loadingBar = ref<HTMLElement | null>(null);
const loadingPicture = ref<HTMLElement | null>(null);
const loadingPictureImage = ref<HTMLElement | null>(null);
const logoRest = ref<HTMLElement | null>(null);
const brand = ref<HTMLElement | null>(null);
const { onComplete } = defineProps(["onComplete"]);

onMounted(() => {
  const isMobile = window.innerWidth <= 767;
  const targetHeight = isMobile ? "400px" : "500px";
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: Power3.easeOut },
    onComplete: () => {
      localStorage.loaded = 1;
      loaded.value = localStorage.loaded;
      onComplete();
    },
  });
  const tl2 = gsap.timeline({
    defaults: { duration: 1, ease: Power3.easeOut },
  });
  // picture
  tl.to(loadingPicture.value, {
    height: targetHeight,
    ease: Power3.easeOut,
    duration: 1,
  });
  // loading bar
  tl.to(loadingBar.value, {
    y: "-60px",
    ease: Power3.easeOut,
    duration: 0.3,
  });
  // Image color
  tl2.to(loadingPictureImage.value, {
    filter: "grayscale(0%)",
    ease: Power3.easeInOut,
    duration: 0.3,
    delay: 2,
  });
  // loading bar
  tl.to(loadingBar.value, {
    y: "-120px",
    ease: Power3.easeOut,
    duration: 0.8,
    delay: 0.5,
  });
  // hide image container
  tl.to(loadingImageContainer.value, {
    opacity: 0,
    ease: Power3.easeOut,
    duration: 0.8,
    delay: 0.8,
  });
  // show logo contaniner
  tl.to(loadingLogoContainer.value, {
    opacity: 1,
    ease: Power3.easeOut,
    duration: 0.8,
  });
  tl.to(logoRest.value, {
    y: "-60px",
    ease: Power3.easeInOut,
    duration: 0.8,
  });
  tl.to(logoRest.value, {
    y: "-120px",
    ease: Power3.easeInOut,
    duration: 0.8,
  });
  tl.to(brand.value, {
    ease: Power3.easeInOut,
    opacity: 1,
  });
  tl.to(loadingLogoContainer.value, {
    opacity: 0,
    ease: Power3.easeOut,
    duration: 0.8,
  });
});

onBeforeUnmount(() => { });
</script>

<style lang="scss">
$component: "loading";

.#{$component} {
  position: fixed;
  width: 100%;
  background-color: #131010;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2999;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding: 30px;

    &__logo {
      position: absolute;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
      display: flex;
      overflow: hidden;
      height: 60px;
      opacity: 0;
      margin-bottom: 50px;
    }

    &__image {
      //   opacity: 0;
      position: absolute;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
    }
  }

  &__logo {
    &--re {
      &-text {
        font-family: "Condor-Black";
        margin: 0;
        font-size: 50px;
      }
    }

    &--rest {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      //   transition: 0.5s ease-in-out;
      &-text {
        font-size: 50px;
      }
    }

    &--brand {
      opacity: 0;

      &-text {
        font-size: 30px;
      }
    }
  }

  &__bar-container {
    overflow: hidden;
    height: 60px;
  }

  &__bar {
    transition: 0.5s ease-in-out;

    &-percent {
      margin: 0;
      font-size: 50px;
    }
  }

  &__picture {
    max-width: 400px;
    transition: 0.5s ease-in-out;
    height: 0;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 767px) {
    &__container {
      &__image {
        padding: 40px;
      }
    }
  }
}
</style>

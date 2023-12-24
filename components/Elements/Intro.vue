<template>
  <div class="intro">
    <section class="intro-section">
      <div
        v-for="(image, index) in homepage.images"
        :key="image.url"
        class="intro-photo"
      >
        <img
          :src="image.url"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          class="intro-photo-img black-white"
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
        />
      </div>
      <!-- <div class="intro-circle-shape"></div> -->
    </section>
    <section class="intro-text-section">
      <p>{{ homepage.introText }}</p>
    </section>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "Intro",
  props: {
    homepage: {
      type: Object as PropType<Homepage>,
      required: true,
    },
  },
  setup() {
    const handleMouseMove = (event: MouseEvent): void => {
      const introPhoto = event.currentTarget as HTMLElement;
      const containerCenterX =
        introPhoto.offsetLeft + introPhoto.offsetWidth / 2;
      const containerCenterY =
        introPhoto.offsetTop + introPhoto.offsetHeight / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const offsetX = (mouseX - containerCenterX) * 0.015; // Decrease the multiplier for less movement
      const offsetY = (mouseY - containerCenterY) * 0.015; // Decrease the multiplier for less movement

      introPhoto.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.02, 1.02)`;
    };

    const handleMouseLeave = (event: MouseEvent): void => {
      const introPhoto = event.currentTarget as HTMLElement;
      introPhoto.style.transform = "none";
    };
    // get year
    const year = new Date().getFullYear();

    return {
      handleMouseMove,
      handleMouseLeave,
      year,
    };
  },
});
</script>

<style lang="scss">
$component: "intro";

.#{$component} {
  margin-top: 30px;
  &-section {
    position: relative;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 40px;
  }
  &-photo {
    overflow: hidden;
    max-height: 500px;
    width: 100%;
    &-img {
      translate: none;
      width: 100%;
      height: auto;
      transition: filter 0.5s ease-in-out, transform 0.1s ease;
    }
  }
  &-photo:first-child {
  }
  &-photo:nth-of-type(2) {
    margin-top: 100px;
  }
  &-photo:nth-of-type(3) {
  }
  &-photo:nth-of-type(4) {
    margin-top: 100px;
  }
  &-text-section {
    max-width: 1200px;
    margin: 50px auto 100px auto;
    display: flex;
    justify-content: space-around;
    h1 {
      font-size: 50px;
      max-width: 50%;
    }
    p {
      color: #8c8b87;
      text-align: center;
      padding: 0px 20px;
      font-size: 35px;
    }
  }
  // Media Queries
  @media (max-width: 767px) {
    margin-top: 0px;
    &-section {
      display: flex;
      overflow: auto;
      flex-grow: 1;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      margin-left: 20px;
      gap: 20px;
    }
    &-photo {
      width: calc(250px - 50px);
      min-width: calc(250px - 50px);
      padding-left: 0;
      scroll-snap-align: center;
      display: flex;
      flex-flow: column nowrap;
      &-img {
        transform: translate(-1.005px, 1.86px) scale(1.02, 1.02) !important;
      }
    }
    &-text-section {
      margin-top: 25px;
      margin-bottom: 75px;
      p {
        font-size: 25px;
        padding: 15px;
      }
    }
    // &-circle-shape {
    //   height: 300px;
    //   width: 300px;
    //   background-color: #262626;
    //   z-index: -1;
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    //   border-radius: 50%;
    // }
  }
}
</style>

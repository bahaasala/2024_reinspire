<template>
  <div class="intro">
    <!-- <section class="intro-sticky"
      style="background-image: url('https://www.datocms-assets.com/101417/1711541003-reinspire-sticky-intro-test.jpg')">

    </section>
    <section class="intro-sticky">

    </section>
    <section class="intro-sticky">

    </section> -->
    <section class="intro-section">
      <!-- <h2 class="visually-hidden">Reinspire Studio Introduction</h2> -->
      <ul>
        <!-- <li v-for="(image, index) in homepage.images" :key="image.url"> -->
        <!-- <figure>
            <NuxtImg format="webp" :src="image.url" :alt="image.alt" :width="image.width" :height="image.height"
              class="intro-photo-img black-white" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave"
              draggable="false" />
          </figure> -->
        <!-- <video type="video/mp4" width="100%" height="100%" autoplay loop muted playsinline nocontrols preload="auto">
            <source src="https://www.datocms-assets.com/101417/1690986623-reinspire_showreel_2023.mp4">
          </video> -->

        <!-- <video type="video/mp4" width="1200" height="900" autoplay loop muted playsinline nocontrols preload="auto">
            <source src="https://www.datocms-assets.com/101417/1690986623-reinspire_showreel_2023.mp4">
          </video> -->
        <!-- </li> -->
        <!-- collections -->
        <li v-for="(image, index) in homepage.images" :key="image.url">
          <!-- <NuxtLink :to="`/collections/${collection.slug}`"> -->
          <figure>
            <NuxtImg format="webp" :src="image.url" :alt="image.alt" :width="image.width" :height="image.height"
              class="intro-photo-img black-white" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave"
              draggable="false" />
          </figure>
          <div class="intro__single-item-container">
            <!-- <h3>{{ collection.title }}</h3> -->
          </div>
          <!-- </NuxtLink> -->
        </li>
      </ul>
    </section>
    <section class="intro-text-section">
      <h2 class="visually-hidden">Reinspire Services</h2>
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
    // move picture on mouse move
    const handleMouseMove = (event: MouseEvent): void => {
      const introPhoto = event.currentTarget as HTMLElement;
      const containerRect = introPhoto.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const offsetX = (mouseX - containerCenterX) * 0.015;
      const offsetY = (mouseY - containerCenterY) * 0.015;

      const maxTranslateX = containerRect.width * 0.02; // Adjust as needed
      const maxTranslateY = containerRect.height * 0.02; // Adjust as needed

      const translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, offsetX));
      const translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, offsetY));

      introPhoto.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.02, 1.02)`;
    };
    const handleMouseLeave = (event: MouseEvent): void => {
      const introPhoto = event.currentTarget as HTMLElement;
      introPhoto.style.transform = 'translate(0, 0)';
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
  // margin-top: 3rem;

  // sticky full width intro sections
  &-sticky:first-of-type {
    position: relative;
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    background-attachment: fixed;
    border: 1px solid red;
  }

  &-sticky:nth-of-type(2),
  &-sticky:nth-of-type(3),
  &-sticky:nth-of-type(4) {
    position: relative;
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    background-attachment: fixed;
    border: 0.5px solid red;
  }

  &-section {
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 3rem;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        position: relative;
        overflow: hidden;
        width: 100%;
        user-select: none;

        figure {
          height: 100%;
          left: 0;
          margin: 0;
          padding: 0;
          cursor: pointer;
          // cursor: url(https://www.datocms-assets.com/101417/1703522179-cursor.svg) 15 15, move;
          text-decoration: none;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            translate: none;
            transition: filter 0.5s ease-in-out, transform 0.1s ease;
          }
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      li:nth-of-type(even) {
        margin-top: 10rem;
      }

      li:nth-of-type(odd) {
        margin-bottom: 10rem;
      }
    }
  }

  &__single-item-container {
    display: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    justify-content: flex-end;
    padding: 0rem 1.5rem 0rem 1.5rem;
  }

  &-text-section {
    max-width: 120rem;
    margin: 5rem auto 10rem auto;
    display: flex;
    justify-content: space-around;

    p {
      color: #8c8b87;
      text-align: center;
      padding: 0 2rem;
      font-size: 3.5rem;
    }
  }

  // Repsonsive
  @media (max-width: 767px) {
    margin-top: 0;

    &-section {
      display: flex;
      overflow: auto;
      flex-grow: 1;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      // margin-left: 2rem;
      gap: 2rem;

      ul {
        grid-gap: 0;

        li {
          width: 100%;
          min-width: 100vw;
          // width: calc(25rem - 5rem);
          // min-width: calc(25rem - 5rem);
          padding-left: 0;
          scroll-snap-align: center;
          display: flex;
          flex-flow: column nowrap;
          min-height: 100vh;

          a {
            position: relative;
          }

          figure {
            height: 100vh;

            img {
              height: 100vh;
              transform: translate(-1.005px, 1.86px) scale(1.02, 1.02) !important;
            }
          }
        }

        li:nth-of-type(even) {
          margin-top: 0;
        }

        li:nth-of-type(odd) {
          margin-bottom: 0;
        }
      }
    }

    &__single-item-container {
      display: flex;
    }


    &-text-section {
      margin-top: 2.5rem;
      margin-bottom: 7.5rem;

      p {
        font-size: 2.5rem;
        padding: 1.5rem;
      }
    }
  }
}
</style>

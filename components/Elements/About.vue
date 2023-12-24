<template>
  <div id="about" class="about">
    <div class="about-inner-container">
      <div class="about-photo-container">
        <div
          class="about-photo"
          :style="`background-image: url(${homepage.imageBahaa.url})`"
        ></div>
        <div class="image-overlay"></div>
      </div>

      <div class="about-info">
        <h2 class="about-title">Bahaa <span>Salaymeh</span></h2>
        <p class="about-text">{{ homepage.aboutBahaa }}</p>
        <ul class="about-socials">
          <li>
            <a
              class="about-socials-linkedin"
              href="https://www.linkedin.com/in/bahaa-salaymeh-354b88142/"
              target="_blank"
              aria-label="Visit Bahaa's LinkedIn"
              ><SvgLinkedin
            /></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="about-inner-container">
      <div class="about-photo-container">
        <div
          class="about-photo"
          :style="`background-image: url(${homepage.imageMilo.url})`"
        ></div>
        <div class="image-overlay"></div>
      </div>
      <div class="about-info">
        <h2 class="about-title">Milo <span>van Sluis</span></h2>
        <p class="about-text">{{ homepage.aboutMilo }}</p>
        <ul class="about-socials">
          <li>
            <a
              class="about-socials-linkedin"
              href="https://www.linkedin.com/in/milo-van-sluis/"
              target="_blank"
              aria-label="Visit Milo's LinkedIn"
              ><SvgLinkedin
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "About",
  props: {
    homepage: {
      type: Object as PropType<Homepage>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
$component: "about";

.#{$component} {
  max-width: 1200px;
  margin: 0 auto 100px auto;
  position: relative;
  height: 500px;
  display: flex;
  &-inner-container {
    display: flex;
    &:hover {
      .about-photo img {
        filter: grayscale(0);
      }
      .about-title {
        transform: translateX(30px);
      }
      .about-photo {
        filter: grayscale(0);
        transform: scale(1.5);
      }
    }
  }
  &-photo-container {
    position: relative;
    min-width: 300px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  &-photo {
    height: 100%;
    background-size: contain;
    transform: scale(1.2);
    transition: 0.5s ease-in-out;
    filter: grayscale(1);
  }
  &-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    max-width: 300px;
  }
  &-title {
    margin: 0;
    margin-bottom: 20px;
    transition: 0.5s ease-in-out;
    transform: translateX(-50px);
    font-size: 50px;
    span {
      font-size: 23px;
    }
  }
  &-text {
    font-family: "NeueMontreal-Regular";
    margin: 0;
    color: #8c8b87;
    padding: 30px;
    line-height: 1.7;
  }
  &-socials {
    padding: 30px;
    &-linkedin {
      svg g {
        fill: #8c8b87;
        transition: 0.5s ease-in-out;
      }
      &:hover {
        svg g {
          fill: #0a66c2;
        }
      }
    }
  }
  // Media Queries
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    padding: 0px 15px;

    &-inner-container {
      flex-direction: column;
      margin-bottom: 75px;
      &:hover {
        .about-title {
          transform: translateX(0px);
        }
        .about-photo {
          transform: scale(2);
          background-position: center;
        }
      }
    }
    &-photo-container {
      height: 300px;
    }
    &-photo {
      background-repeat: no-repeat;
      background-position: 30px;
      // background-position-x: 50px;
    }
    &-info {
      max-width: 100%;
    }
    &-title {
      transform: translateX(0px);
      margin: -30px 0px 20px 0px;
      font-size: 30px;
    }
    &-text {
      padding: 0px;
      max-width: 275px;
    }
    &-socials {
      padding: 0px;
      a {
        svg {
          width: 40px;
        }
        // display: flex;
        // justify-content: flex-end;
      }
    }
  }
}
</style>

<template>
  <div id="contact" class="contact">
    <h2 class="contact-title">{{ homepage.contactTitle }}</h2>
    <div class="contact-image black-white">
      <img :src="homepage.contactImage.url" :alt="homepage.contactImage.alt" />
      <div class="image-overlay"></div>
    </div>
    <div class="contact-email-container">
      <div class="contact-email-inner-container">
        <a class="contact-email" href="mailto:hello@reinspire.nl">{{
          homepage.email
        }}</a>
        <a class="contact-email" href="mailto:hello@reinspire.nl">{{
          homepage.email
        }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "Contact",
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
$component: "contact";

.#{$component} {
  max-width: 1200px;
  margin: 300px auto 100px auto;
  position: relative;
  &-title {
    max-width: 50%;
    position: absolute;
    font-size: 120px;
    margin-top: -120px;
    z-index: 99;
    pointer-events: none;
  }
  &-image {
    position: relative;
    margin-left: 70px;
  }
  &-email-container {
    display: flex;
    justify-content: flex-end;
    margin-top: -40px;
    &:hover {
      .contact-email {
        transform: translateY(-70px);
      }
    }
  }
  &-email-inner-container {
    overflow: hidden;
    height: 60px;
  }
  &-email {
    position: relative;
    font-size: 50px;
    font-family: "Condor-Light";
    text-decoration: none;
    display: block;
    padding-bottom: 10px;
    transition: 0.5s ease-in-out;
  }
  // Media Queries
  @media (max-width: 767px) {
    margin: 0px auto 100px auto;
    padding: 0px 15px;
    &-title {
      font-size: 58px;
      max-width: 300px;
      margin-top: -100px;
    }
    &-image {
      img {
        width: 100%;
      }
    }
    &-email-inner-container {
      height: 40px;
    }
    &-email-container {
      margin-top: 0;
      &:hover {
        .contact-email {
          transform: translateY(-50px);
        }
      }
    }
    &-email {
      font-size: 30px;
    }
  }
}
</style>

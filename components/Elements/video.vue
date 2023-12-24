<template>
  <div class="video">
    <!-- <div id="showreel"></div> -->
    <video
      :src="homepage.videoId"
      ref="videoEL"
      type="video/mp4"
      width="1200"
      height="680"
      autoplay
      loop
      muted
      playsinline
      nocontrols
      preload="auto"
    ></video>
    <div class="video-overlay"></div>
    <div
      class="video-sound"
      @click="toggleSound"
      :class="{
        'video-sound__playing': !isMuted,
      }"
    >
      <div class="video-sound__text">SOUND</div>
      <div class="">
        <div class="video-sound__text-off">OFF</div>
        <div class="video-sound__text-on">ON</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import Player from "@vimeo/player";

export default defineComponent({
  name: "Video",
  props: {
    homepage: {
      type: Object as PropType<Homepage>,
      required: true,
    },
  },
  setup() {
    const options = {
      id: 849090764,
      width: 1300,
      loop: true,
      autoplay: true,
      muted: true,
      controls: false,
    };

    const videoEL = ref<HTMLVideoElement | null>(null);
    const player = ref<Player | null>(null);
    const isMuted = ref(true);
    let videoIsPlaying = false;

    onMounted(() => {
      // console.log(videoEL.value);
    });

    const toggleSound = (): void => {
      // const player2 = new Player("showreel", options);
      // player2.setMuted(!isMuted.value);
      if (videoEL.value) {
        videoEL.value.muted = !videoEL.value.muted;
        isMuted.value = !isMuted.value;
        videoIsPlaying = !videoIsPlaying;
      }
    };

    const mute = (): void => {
      // const player2 = new Player("showreel", options);
      // player2.setMuted(!isMuted.value);
      if (videoEL.value) {
        videoEL.value.muted = !videoEL.value.muted;
        videoIsPlaying = false;
        isMuted.value = true;
      }
    };

    const handleScroll = (): void => {
      // // Get the current scroll position
      const isMobile = window.innerWidth <= 767;
      // const targetHeight = isMobile ? "400px" : "500px";
      const scrollPosition = window.scrollY;
      if (videoIsPlaying == true && scrollPosition >= 1500) {
        mute();
      } else if (videoIsPlaying == true && scrollPosition >= 700 && isMobile) {
        mute();
      } else {
      }
    };

    onMounted(() => {
      // player.value = new Player("showreel", options);
      window.addEventListener("scroll", handleScroll);
    });

    return { options, player, isMuted, toggleSound, videoIsPlaying, videoEL };
  },
});
</script>

<style lang="scss">
$component: "video";

.#{$component} {
  max-width: 1200px;
  margin: 0 auto 100px auto;
  position: relative;
  width: 100%;
  height: 500px;
  padding-bottom: 41%;
  video {
    width: 100%;
    // height: 900px;
  }
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &-overlay {
    position: absolute;
    width: 101%;
    height: 100%;
    bottom: 0;
    background: linear-gradient(0deg, #131010 0%, rgba(0, 0, 0, 0) 100%);
    z-index: -1;
  }
  &-sound {
    font-family: "Condor-Light";
    position: absolute;
    right: -120px;
    transform: rotate(-90deg);
    top: 50%;
    display: flex;
    overflow-y: hidden;
    height: 25px;
    cursor: pointer;
    user-select: none;
    font-size: 20px;
    &__text {
      color: #717171;
      text-align: right;
      margin: 0;
      padding-right: 7px;

      &-on {
        color: #e6e6e6;
        transition: 0.5s ease-in-out;
      }
      &-off {
        color: #e6e6e6;
        transition: 0.5s ease-in-out;
      }
    }

    &__playing {
      .video-sound__text-on,
      .video-sound__text-off {
        transform: translateY(-23px);
      }
    }
  }
  // Media Queries
  @media (max-width: 767px) {
    height: 250px;
    padding-bottom: 0;
    margin-bottom: 150px;
    video {
      height: 100%;
    }
    &-sound {
      right: 15px;
      top: -30px;
      transform: rotate(0deg);
    }
    &-overlay {
      display: none;
      width: 100%;
    }
  }
}
</style>

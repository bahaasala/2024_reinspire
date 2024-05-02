<template>
  <GlobalMetaData :title="homepage.seo.title" :description="homepage.seo.description" />
  <div v-if="loaded == '0'">
    <GlobalLoading :onComplete="handleLoadingComplete" />
  </div>
  <div class="home" v-else>
    <GlobalLoadingOpen />
    <ElementsIntro :homepage="homepage" />
    <ElementsVideo :homepage="homepage" />
    <ElementsWorks :homepage="homepage" />
    <ElementsAbout :homepage="homepage" />
    <ElementsContact :homepage="homepage" />
    <!-- <ElementsUnderConstruction /> -->
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import client from "@/graphql";
import query from "@/data/pages/homepage.js";

export default defineComponent({
  name: "Home",
  async setup() {
    const Image = {
      image: "",
      url: "",
      alt: "",
      width: 0,
      height: 0,
    };

    const homepage = ref<Homepage>({
      seo: { title: "", description: "", image: { url: "" } },
      title: "",
      images: [],
      introText: "",
      showreelTitle: "",
      year: 0,
      videoId: "",
      works: [],
      imageBahaa: { ...Image },
      aboutBahaa: "",
      imageMilo: { ...Image },
      aboutMilo: "",
      contactTitle: "",
      contactImage: { ...Image },
      email: "",
    });

    onMounted(async () => {
      try {
        const { homepage: fetchedHomepage } = await client.request<{
          homepage: Homepage;
        }>(query);
        const images = fetchedHomepage.images.map((image) => image.image);
        homepage.value = { ...fetchedHomepage, images };
        // console.log("Homepage", homepage.value);
      } catch (error) {
        console.error("Failed to fetch homepage", error);
      }
    });

    const handleLoadingComplete = () => {
      loaded.value = "1";
    };

    const loaded = ref("");

    onMounted(() => {
      if (process.client) {
        const loadedBefore = localStorage.loaded;
        loaded.value = loadedBefore;
        setTimeout(() => {
          localStorage.loaded = "0";
          loaded.value = localStorage.loaded;
        }, 300000);
      }
    });

    return {
      homepage,
      handleLoadingComplete,
      loaded,
    };
  },
});
</script>

<style lang="scss">
$component: "home";

.#{$component} {
  margin-top: 120px;

  @media (max-width: 767px) {
    margin-top: 100px;
  }
}
</style>

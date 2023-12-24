<template>
  <GlobalMetaData :title="work.seo.title" :description="work.seo.description" />
  <div class="main-work-container">
    <div class="work fade-in">
      <div class="work__preview" v-if="work.externalUrl">
        <a class="work__preview-btn" :href="work.externalUrl" target="_blank">
          View website
        </a>
      </div>
      <div class="work__featured-image fade-in">
        <img :src="work.featuredImage.url" :alt="work.featuredImage.alt" />
      </div>
      <div class="work__categories fade-in">
        <ul class="work__categories-list">
          <li
            class="work__categories-list-item"
            v-for="category in work.categories"
            :key="category.name"
          >
            {{ category.name }}
          </li>
        </ul>
      </div>
      <div class="work__info fade-in">
        <h1 class="fade-in">{{ work.title }}</h1>
        <p class="work__info-description fade-in">{{ work.description }}</p>
        <p class="work__info-customer fade-in">
          <span>Customer |</span> {{ work.customer }}
        </p>
      </div>
      <div class="work__main-video fade-in">
        <!-- <iframe
          :src="`https://player.vimeo.com/video/${work.mainVideoId}?autoplay=1&loop=1&muted=1&title=0&portrait=0&byline=0&controls=0#t=2s`"
          frameborder="0"
          width="1200"
          height="680"
        ></iframe> -->

        <!-- add html video -->
        <video
          :src="work.mainVideoUrl"
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
      </div>
      <div class="work__mockups-col2 fade-in">
        <div
          class="work__mockups-col2-item"
          v-for="item in work.mockupsTwoColumns"
        >
          <img :src="item.url" :alt="item.alt" />
        </div>
      </div>
      <div class="work__mockup-full-width fade-in">
        <img :src="work.mockupFullWidth.url" :alt="work.mockupFullWidth.alt" />
      </div>
      <div class="work__mockups-col2 fade-in">
        <div
          class="work__mockups-col2-item"
          v-for="item in work.secondMockupsTwoColumns"
        >
          <img :src="item.url" :alt="item.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { gsap, Power1 } from "gsap";
import { defineComponent, onMounted, ref } from "vue";
import client from "@/graphql";
import query from "@/data/pages/singleWork.js";

export default defineComponent({
  name: "Work",
  async setup() {
    const Image = {
      image: "",
      url: "",
      alt: "",
      width: 0,
      height: 0,
    };

    const work = ref<Work>({
      seo: {
        title: "",
        description: "",
        image: {
          url: "",
        },
      },
      id: "",
      title: "",
      slug: "",
      externalUrl: "",
      featuredImage: Image,
      categories: [],
      description: "",
      customer: "",
      mainVideoUrl: "",
      mockupsTwoColumns: [],
      mockupFullWidth: Image,
      secondMockupsTwoColumns: [],
    });

    const router = useRouter();

    onMounted(() => {
      const options = {
        rootMargin: "0px 0px 250px 0px",
        threshold: 0.5,
      };
      const slideInTopElements = document.querySelectorAll(".fade-in");

      const delay = 350;

      const callback = (
        entries: any[],
        observer: { unobserve: (arg0: any) => void }
      ) => {
        entries.forEach(
          (
            entry: {
              isIntersecting: any;
              target: { classList: { add: (arg0: string) => void } };
            },
            index: number
          ) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("in-view");
              }, index * delay);
              observer.unobserve(entry.target);
            }
          }
        );
      };

      const observer = new IntersectionObserver(callback, options);
      slideInTopElements.forEach((element) => observer.observe(element));
    });

    onUnmounted(() => {});

    onMounted(async () => {
      try {
        const { slug } = router.currentRoute.value.params;
        const { work: fetchedWork } = await client.request<{ work: Work }>(
          query,
          {
            slug,
          }
        );
        work.value = fetchedWork;

        // console.log(work.value);

        if (!work.value) {
          router.replace("/404");
        }
      } catch (error) {
        console.error("Failed to fetch the project", error);
        router.replace("/404");
      }
    });

    return {
      work,
    };
  },
});
</script>

<style lang="scss">
$component: "work";

.#{$component} {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px;
  margin-top: 120px;
  &__preview {
    display: flex;
    justify-content: flex-end;
    &-btn {
      text-decoration: none;
      font-size: 20px;
      color: #8c8b87;
      transition: 0.5s ease-in-out;
      &:hover {
        color: #e6e6e6;
      }
    }
  }
  &__featured-image {
    margin-top: 20px;
    margin-bottom: 10px;
    img {
      width: 100%;
    }
  }
  &__categories {
    margin-bottom: 120px;
    &-list {
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: space-between;
      &-item {
        color: #8c8b87;
        list-style-type: none;
        font-size: 20px;
      }
    }
  }
  &__info {
    display: flex;
    align-items: top;
    justify-content: space-between;
    margin-bottom: 120px;
    h1 {
      font-family: "Condor-Bold";
      margin: 0;
    }
    &-description {
      font-family: "NeueMontreal-Regular";
      max-width: 400px;
      margin: 0;
      line-height: 1.7;
    }
    &-customer {
      font-family: "NeueMontreal-Regular";
      margin: 0;
      span {
        font-family: "NeueMontreal-Regular";
        color: #8c8b87;
      }
    }
  }
  &__main-video {
    margin-bottom: 120px;
    pointer-events: none;
    user-select: none;
    z-index: -1;
    position: relative;
  }
  &__mockups-col2 {
    display: flex;
    gap: 20px;
    margin-bottom: 120px;
    img {
      width: 100%;
    }
  }
  &__mockup-full-width {
    margin-bottom: 120px;
    img {
      width: 100%;
    }
  }
  // Media Queries
  @media (max-width: 767px) {
    padding: 0px 15px;
    &__preview {
      &-btn {
        font-size: 18px;
      }
    }
    &__featured-image {
      img {
        object-fit: cover;
        height: 200px;
      }
    }
    &__categories {
      margin-top: 50px;
      margin-bottom: 50px;
      &-list {
        flex-direction: column;
        gap: 10px;
        &-item {
          font-size: 16px;
        }
      }
    }
    &__info {
      flex-direction: column;
      margin-bottom: 50px;
      h1 {
        padding-bottom: 20px;
      }
      &-description {
        font-size: 16px;
      }
      &-customer {
        margin: 40px 0px 0px 0px;
      }
    }
    &__main-video {
      margin-bottom: 50px;
      video {
        width: 100%;
        height: 200px;
      }
    }
    &__mockups-col2 {
      margin-bottom: 50px;
      flex-direction: column;
      gap: 50px;
    }
    &__mockup-full-width {
      margin-bottom: 50px;
    }
  }
}
</style>

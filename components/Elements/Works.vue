<template>
  <div id="works" class="projects">
    <ul class="projects__list">
      <li
        v-for="work in homepage.works"
        :key="work.slug"
        class="projects__single-item"
        @mousemove="movePhoto"
        @mouseenter="listItemsGrey"
        @mouseleave="listItemsWhite"
      >
        <NuxtLink
          :to="`/projects/${work.slug}`"
          class="projects__single-item-link"
        >
          <div class="projects__single-item-name">
            <h3>{{ work.title }}</h3>
            <h3>{{ work.title }}</h3>
          </div>
          <div class="projects__single-item-picture">
            <img :src="work.featuredImage.url" :alt="work.featuredImage.alt" />
          </div>
          <div class="projects__single-item-category-arrow">
            <div class="projects__single-item-category">
              <p>{{ work.categories[0].name }}</p>
            </div>
            <div class="projects__single-item-arrow"><SvgArrow /></div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "Works",
  props: {
    homepage: {
      type: Object as PropType<Homepage>,
      required: true,
    },
  },
  setup() {
    // move photo
    const movePhoto = (e: MouseEvent) => {
      const pics = document.querySelectorAll(".projects__single-item-picture");

      pics.forEach((pic) => {
        const element = pic as HTMLElement;

        const mouseX = e.pageX;
        const mouseY = e.pageY;

        const left = mouseX - 200;
        const top = mouseY - 200;

        element.style.left = `${left}px`;
        element.style.top = `${top}px`;
      });
    };
    const listItemsGrey = (e: MouseEvent) => {
      const names = document.querySelectorAll(".projects__single-item h3");
      const categories = document.querySelectorAll(".projects__single-item p");

      names.forEach((name) => {
        const element = name as HTMLElement;

        element.classList.add("grey");
      });
      categories.forEach((category) => {
        const element = category as HTMLElement;

        element.classList.add("grey");
      });
    };
    const listItemsWhite = (e: MouseEvent) => {
      const names = document.querySelectorAll(".projects__single-item h3");
      const categories = document.querySelectorAll(".projects__single-item p");

      names.forEach((name) => {
        const element = name as HTMLElement;

        element.classList.remove("grey");
      });
      categories.forEach((category) => {
        const element = category as HTMLElement;

        element.classList.remove("grey");
      });
    };
    return { movePhoto, listItemsGrey, listItemsWhite };
  },
});
</script>

<style lang="scss">
$component: "projects";

.#{$component} {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px;
  margin-bottom: 200px;
  &__list {
    padding: 0;
    margin: 0;
  }
  &__single-item {
    border-bottom: solid 1px #e6e6e6;
    transition: 0.25s ease-in-out;
    list-style-type: none;
    &-link {
      display: flex;
      height: 150px;
      text-decoration: none;
      align-items: center;
      justify-content: space-between;
    }
    &-name {
      position: relative;
      overflow: hidden;
      height: 30px;
      h3 {
        color: #e6e6e6;
        transition: 0.5s ease-in-out;
        margin-bottom: 0px;
        margin-top: 0;
      }
      h3:nth-of-type(2) {
        font-family: "Condor-Bold";
      }
      .grey {
        transition: 0.5s ease-in-out;
        color: #515151;
      }
    }
    &-picture {
      display: none;
      position: absolute;
      z-index: -1;
      width: 460px;
      height: 360px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-category-arrow {
      position: relative;
      display: flex;
    }
    &-category {
      transition: 0.5s ease-in-out;
      p {
        color: #e6e6e6;
        transition: 0.25s ease-in-out;
      }
      .grey {
        transition: 0.5s ease-in-out;
        color: #515151;
      }
    }
    &-arrow {
      transition: 2s ease-in-out;
      position: absolute;
      right: 0;
      overflow: hidden;
      top: 15px;
      svg {
        transition: 0.5s ease-in-out;
        transform: translate(-50px, 50px);
      }
    }
    &:hover {
      border-bottom: solid 5px #e6e6e6;
      h3,
      p {
        color: #e6e6e6;
      }
      .projects__single-item-name h3 {
        transform: translateY(-40px);
      }
      .projects__single-item-picture {
        display: block;
        animation: slide 2s forwards;
      }
      .projects__single-item-category {
        transform: translateX(-100px);
      }
      .projects__single-item-arrow {
        // opacity: 1;
      }
      .projects__single-item-arrow svg {
        transform: translateY(0px);
      }
    }
    &:last-child {
      border-bottom: none;
    }
  }
  // Media Queries
  @media (max-width: 767px) {
    padding: 0px 15px;
    &__single-item {
      position: relative;
      &-link {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: auto;
        margin: 35px 0px;
      }
      &-name {
        h3 {
          font-size: 25px;
          margin: 0;
          margin-bottom: 10px;
        }
      }
      &-category-arrow {
        position: unset;
      }
      &-category {
        p {
          margin: 0;
          font-size: 14px;
          margin-top: 10px;
        }
      }
      &-picture {
        display: block;
        width: 120px;
        height: 70px;
        right: 75px;
      }
      &-arrow {
        display: block;
        position: absolute;
        right: 0px;
        top: -10px;
        svg {
          transform: translateY(0px);
        }
      }
      &:hover {
        .projects__single-item-picture {
          animation: unset;
        }
        .projects__single-item-category {
          transform: translateX(0px);
        }
      }
    }
  }
}
</style>

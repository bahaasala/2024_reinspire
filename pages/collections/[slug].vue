<template>
    <GlobalMetaData :title="collection.seo.title" :description="collection.seo.description" />
    <section class="collection">
        <section class="collection-intro-container">
            <h1>{{ collection.title }}</h1>
            <p class="collection__description">{{ collection.description }}</p>
        </section>
        <div class="collection__banner" :style="`background-image: url(${collection.collectionBanner.url})`">
        </div>
        <ul class="collection__visuals-col3">
            <li v-for="item in collection.visualsThreeColumns">
                <figure>
                    <NuxtImg format="webp" :src="item.url" :alt="item.alt" :width="item.width" :height="item.height"
                        class="black-white" draggable="false" />
                </figure>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { gsap, Power1 } from "gsap";
import { defineComponent, onMounted, ref } from "vue";
import client from "@/graphql";
import query from "@/data/pages/singleCollection.js";

export default defineComponent({
    name: "Collection",
    async setup() {
        const Image = {
            image: "",
            url: "",
            alt: "",
            width: 0,
            height: 0,
        };

        const collection = ref<Collection>({
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
            collectionBanner: Image,
            description: "",
            visualsThreeColumns: [],
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

        onUnmounted(() => { });

        onMounted(async () => {
            try {
                const { slug } = router.currentRoute.value.params;
                const { collection: fetchedCollection } = await client.request<{ collection: Collection }>(
                    query,
                    {
                        slug,
                    }
                );
                collection.value = fetchedCollection;

                console.log(collection.value);

                if (!collection.value) {
                    router.replace("/404");
                }
            } catch (error) {
                console.error("Failed to fetch the project", error);
                router.replace("/404");
            }
        });

        return {
            collection,
        };
    },
});
</script>

<style lang="scss">
$component: "collection";

.#{$component} {
    display: flex;
    flex-direction: column;

    &-intro-container {
        width: 100%;
        max-width: 120rem;
        margin: 10rem auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 7rem;

        h1,
        p {
            margin: 0;
            padding: 0;
        }

        p {
            max-width: 60rem;
        }
    }

    &__banner {
        order: -1;
        height: 70vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    &__description {}

    &__visuals-col3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 0;
        padding: 0;

        figure {
            margin: 0;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>
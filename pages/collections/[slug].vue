<template>
    <h1>Collections single page</h1>
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

.#{$component} {}
</style>
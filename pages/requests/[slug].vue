<template>
    <h1>{{ request.client }}</h1>
    <h1>Test</h1>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import client from "@/graphql";
import query from "@/data/pages/singleRequest.js";

export default defineComponent({
    name: "Request",
    async setup() {
        const request = ref<Request>({
            id: "",
            slug: "",
            client: "",
            website: "",
            engagement: "",
            clarify: "",
            act: "",
            debriefing: "",
            prototype: "",
        });

        const router = useRouter();

        onMounted(async () => {
            try {
                const { slug } = router.currentRoute.value.params;
                const { request: fetchedRequest } = await client.request<{ request: Request }>(
                    query,
                    {
                        slug,
                    }
                );
                request.value = fetchedRequest;

                console.log(request.value);

                if (!request.value) {
                    router.replace("/404");
                }
            } catch (error) {
                console.error("Failed to fetch the project", error);
                router.replace("/404");
            }
        });

        return {
            request,
        };
    },
})
</script>


<style lang="scss"></style>
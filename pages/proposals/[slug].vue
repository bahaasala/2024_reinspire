<template>
    <section class="proposal">
        <section class="proposal-banner-section">
            <h1>MULU</h1>
        </section>
    </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import client from "@/graphql";
import query from "@/data/pages/singleProposal.js";

export default defineComponent({
    name: "Proposal",
    async setup() {
        const Image = {
            image: "",
            url: "",
            alt: "",
            width: 0,
            height: 0,
        };

        const proposal = ref<Proposal>({
            id: "",
            proposalNumber: 0,
            proposalBanner: Image,
            title: "",
            website: "",
            introduction: "",
            praise: "",
            improvements: "",
            webInspirationTitle1: "",
            webInspirationLink1: "",
            webInspirationImage1: Image,
            webInspirationTitle2: "",
            webInspirationLink2: "",
            webInspirationImage2: Image,
            conceptPicture: Image,
            conceptImprovements: "",
            experimentationGallery: [],
        });

        const router = useRouter();

        onMounted(async () => {
            // const proposalNumberParam = router.currentRoute.value.params.proposalNumber;
            // const proposalNumber = parseInt(proposalNumberParam as string);
            // console.log("Proposal number parsed:", proposalNumber);
            // console.log(proposalNumber);

            try {
                const { proposalNumber } = router.currentRoute.value.params;
                const { proposal: fetchedProposal } = await client.request<{ proposal: Proposal }>(
                    query,
                    {
                        proposalNumber,
                    }
                );
                proposal.value = fetchedProposal;

                console.log(proposal.value);

                if (!proposal.value) {
                    router.replace("/404");
                }
            } catch (error) {
                console.error("Failed to fetch the proposal", error);
                router.replace("/404");
            }
        });

        return {
            proposal,
        };
    },
})
</script>

<style lang="scss">
$component: "proposal";
</style>

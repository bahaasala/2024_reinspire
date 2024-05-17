<template>
    <div class="proposal-banner-container" :style="`background-image: url(${proposal.proposalBanner.url})`">
    </div>
    <div class="proposal">
        <div class="proposal-intro-container">
            <section>
                <h1>Hey, {{ proposal.title }}</h1>
                <p>Want to grow?</p>
            </section>
            <a :href="proposal.website" target="_blank">Your website</a>
        </div>
        <div class="proposal-intro-text-container">
            <div>
                <p>{{ proposal.introduction }}</p>
                <p>{{ proposal.introductionSelected }}</p>
            </div>
            <figure>
                <img src="https://www.datocms-assets.com/101417/1715027656-reinspire_proposal_intro.jpg" alt="" />
            </figure>
        </div>
        <div class="proposal-title-container">
            <section>
                <h2>To Discover</h2>
                <p>Where to improve?</p>
            </section>
            <figure>
                <img src="https://www.datocms-assets.com/101417/1715028077-reinspire_proposal_growth.jpg"
                    :alt="proposal.proposalBanner.alt" />
            </figure>
        </div>
        <div class="proposal-research-container">
            <div>
                <h3>What we love</h3>
                <p>{{ proposal.praise }}</p>
            </div>
            <div>
                <h3>Room for growth</h3>
                <p>{{ proposal.improvements }}</p>
            </div>
        </div>
        <div class="proposal-title-container">
            <section>
                <h2>Be Inspired</h2>
                <p>By best web experiences</p>
            </section>
            <figure>
                <img src="https://www.datocms-assets.com/101417/1715027652-reinspire_proposal_inspiration.jpg"
                    :alt="proposal.proposalBanner.alt" />
            </figure>
        </div>
        <div class="proposal-inspiration-sites">
            <ul>
                <li>
                    <a :href="proposal.webInspirationLink1" target="_blank">
                        <figure>
                            <img :src="proposal.webInspirationImage1.url" :alt="proposal.webInspirationImage1.alt" />
                        </figure>
                        <div>
                            <p>{{ proposal.webInspirationTitle1 }}</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a :href="proposal.webInspirationLink2" target="_blank">
                        <figure>
                            <img :src="proposal.webInspirationImage2.url" :alt="proposal.webInspirationImage2.alt" />
                        </figure>
                        <div>
                            <p>{{ proposal.webInspirationTitle2 }}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="proposal-title-container">
            <section>
                <h2>Your Future</h2>
                <p>We don't just create, we collaberate</p>
            </section>
            <figure>
                <img src="https://www.datocms-assets.com/101417/1715027647-reinspire_proposal_concept.jpg"
                    :alt="proposal.proposalBanner.alt" />
            </figure>
        </div>
        <div class="proposal-concept-container">
            <figure>
                <img :src="proposal.conceptPicture.url" :alt="proposal.conceptPicture.alt" />
            </figure>
            <div class="proposal-concept-text-container">
                <p>{{ proposal.conceptImprovements }}</p>
            </div>
        </div>
        <div class="proposal-gallery">
            <ul>
                <li v-for="image in proposal.experimentationGallery">
                    <figure>
                        <img class="black-white" :src="image.url" :alt="image.alt" />
                    </figure>
                </li>
            </ul>
        </div>
        <div class="proposal-title-container">
            <section>
                <h2>Planning process</h2>
                <p>From start to launch</p>
            </section>
            <figure>
                <img src="https://www.datocms-assets.com/101417/1715027661-reinspire_proposal_process.jpg"
                    :alt="proposal.proposalBanner.alt" />
            </figure>
        </div>
        <div class="proposal-process">
            <ul>
                <li>
                    <h3>Proposal</h3>
                    <p>Step 1</p>
                </li>
                <li>
                    <h3>Meeting</h3>
                    <p>Step 2</p>
                </li>
                <li>
                    <h3>Agreement</h3>
                    <p>Step 3</p>
                </li>
                <li>
                    <h3>Creating</h3>
                    <p>Step 4</p>
                </li>
                <li>
                    <h3>Development</h3>
                    <p>Step 5</p>
                </li>
                <li>
                    <h3>Delivery</h3>
                    <p>Step 6</p>
                </li>
            </ul>
        </div>
        <div class="proposal-our-projects">
            <ElementsWorks :homepage="homepage" />
        </div>
        <div class="proposal-contact">
            <ElementsContact :homepage="homepage" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import client from "@/graphql";
import query from "@/data/pages/singleProposal.js";
import queryHome from "@/data/pages/homepage.js";

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
            slug: "",
            proposalBanner: Image,
            title: "",
            website: "",
            introduction: "",
            introductionSelected: "",
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

        const router = useRouter();

        onMounted(async () => {
            try {
                const { homepage: fetchedHomepage } = await client.request<{
                    homepage: Homepage;
                }>(queryHome);
                const images = fetchedHomepage.images.map((image) => image.image);
                homepage.value = { ...fetchedHomepage, images };
                const { slug } = router.currentRoute.value.params;
                const { proposal: fetchedProposal } = await client.request<{ proposal: Proposal }>(
                    query,
                    {
                        slug,
                    }
                );
                proposal.value = fetchedProposal;

                // console.log(proposal.value);

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
            homepage
        };
    },
})
</script>

<style lang="scss">
$component: "proposal";

.#{$component} {
    max-width: 1200px;
    margin: 0 auto;

    h1,
    h2 {
        margin: 0;
    }

    p {
        font-family: "NeueMontreal-Regular";
        margin: 0;
    }

    figure {
        margin: 0;
        width: 50%;

        img {
            width: 100%;
        }
    }

    &-banner-container {
        height: 20rem;
        background-size: cover;
        background-position: bottom;
        background-repeat: no-repeat;
    }

    &-intro-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5rem 0;
        border-bottom: solid 1px #363636;

        a {
            color: #8C8B87;
        }
    }

    &-intro-text-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5rem 0;
        border-bottom: solid 1px #363636;
        gap: 5rem;

        p {
            max-width: 60rem;
            margin: 0;
        }

        p:first-of-type {
            margin-bottom: 2rem;
        }

        p:nth-of-type(2) {
            color: #8C8B87;
        }
    }

    &-title-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: solid 1px #363636;
        gap: 5rem;

        section {
            padding-bottom: 4rem;
        }

        figure {
            img {
                max-height: 20rem;
                object-fit: cover;
            }
        }
    }

    &-research-container {
        display: flex;
        justify-content: space-between;
        padding: 5rem 0 15rem;
        border-bottom: solid 1px #363636;
        gap: 5rem;

        div {
            flex-basis: fit-content;
        }

        h3 {
            margin: 1rem 0;
        }

        p {
            color: #8C8B87;
        }
    }

    &-inspiration-sites {
        padding: 0rem 0rem 15rem 0rem;
        border-bottom: solid 1px #363636;

        ul {
            margin: 0;
            padding: 0;

            li {
                list-style-type: none;

                a {
                    display: flex;
                    align-items: center;
                    gap: 5rem;
                    text-decoration: none;
                    border-bottom: solid 1px #363636;
                    transition: 0.5s ease-in-out;
                    // max-height: 8rem;
                    // overflow: hidden;

                    &:hover {
                        // max-height: 20rem;
                        border-color: #ffffff;

                        img {
                            // width: 60%;
                            filter: grayscale(0);
                        }

                        p {
                            transform: translateX(-1rem);
                        }
                    }
                }

                figure {
                    margin-bottom: -5px;

                    img {
                        width: 50%;
                        filter: grayscale(1);
                        transition: filter 0.5s ease-in-out;
                    }
                }

                div {
                    p {
                        font-size: 2rem;
                        transition: 0.25s ease-in-out;
                    }

                    flex-basis: fit-content;
                }
            }
        }
    }

    &-concept-container {
        display: flex;
        align-items: center;
        gap: 15rem;
    }

    &-gallery {
        ul {
            margin: 15rem 0rem;
            padding: 0;
            display: grid;
            gap: 3rem;
            grid-template-columns: auto auto auto;

            li {
                list-style-type: none;

                figure {
                    margin: 0;
                    width: 100%;

                    img {
                        width: 100%;
                        min-height: 25rem;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    &-process {
        ul {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
            border-bottom: solid 1px #363636;
            // padding: 3rem 0rem;

            li {
                border-right: solid 1px #363636;
                padding: 3rem;

                h3 {
                    margin: 0;
                }
            }

            li:first-of-type {
                background: linear-gradient(-90deg, #212121 0%, rgba(19, 16, 16, 0) 100%);
            }

            li:last-of-type {
                border: none;
            }
        }
    }

    &-our-projects {
        margin-top: 10rem;
    }

    @media (max-width: 767px) {

        h1,
        h2,
        p {
            // padding: 1.5rem;
        }

        figure {
            width: 100%;
        }

        &-title-container,
        &-intro-text-container,
        &-research-container,
        &-concept-container {
            flex-direction: column;

            h1,
            h2,
            h3,
            p,
            a {
                padding: 1.5rem;
            }
        }

        &-title-container {
            align-items: flex-start;
            gap: 0;
        }

        &-intro-container {
            padding: 0;

            h1,
            p,
            a {
                padding: 1.5rem;
            }
        }

        &-inspiration-sites {
            ul {
                li {
                    a {
                        gap: 3rem;
                        flex-direction: column;
                        padding: 5rem 0rem;
                        align-items: start;
                    }

                    figure {
                        img {
                            width: 100%;
                        }
                    }

                    p {
                        padding: 1.5rem;
                    }
                }
            }
        }

        &-gallery {
            ul {
                grid-template-columns: auto;
            }
        }

        &-process {
            ul {
                flex-wrap: wrap
            }
        }

        .projects__single-item-link {
            margin: 35px 0px;
            padding: 0;
        }
    }
}
</style>

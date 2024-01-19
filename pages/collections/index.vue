<template>
    <section id="collections" class="collections intro-section">
        <!-- <h1>Grid</h1> -->
        <ul>
            <li>
                <NuxtLink to="/collections/fashion">
                    <figure>
                        <img class="black-white" src="https://www.datocms-assets.com/101417/1703463646-grid-1.jpg"
                            @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                    </figure>
                    <div class="cat-title">
                        <h2>Fashion</h2>
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/collections/fashion">
                    <figure>
                        <img class="black-white" src="https://www.datocms-assets.com/101417/1703521833-stories.jpg"
                            @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                    </figure>
                    <div class="cat-title">
                        <h2>Mockups</h2>
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/collections/fashion">
                    <figure>
                        <img class="black-white" src="https://www.datocms-assets.com/101417/1703521828-motion.jpg"
                            @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                    </figure>
                    <div class="cat-title">
                        <h2>Motion Design</h2>
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/collections/fashion">
                    <figure>
                        <img class="black-white" src="https://www.datocms-assets.com/101417/1703521838-vintage.jpg"
                            @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                    </figure>
                    <div class="cat-title">
                        <h2>Vintage</h2>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template> 

<script lang="ts">
export default defineComponent({
    name: "Collections",
    props: {
    },
    setup() {
        const handleMouseMove = (event: MouseEvent): void => {
            const introPhoto = event.currentTarget as HTMLElement;
            const containerRect = introPhoto.getBoundingClientRect();
            const containerCenterX = containerRect.left + containerRect.width / 2;
            const containerCenterY = containerRect.top + containerRect.height / 2;
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const offsetX = (mouseX - containerCenterX) * 0.015;
            const offsetY = (mouseY - containerCenterY) * 0.015;

            const maxTranslateX = containerRect.width * 0.02; // Adjust as needed
            const maxTranslateY = containerRect.height * 0.02; // Adjust as needed

            const translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, offsetX));
            const translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, offsetY));

            introPhoto.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.02, 1.02)`;
        };
        const handleMouseLeave = (event: MouseEvent): void => {
            const introPhoto = event.currentTarget as HTMLElement;
            introPhoto.style.transform = 'translate(0, 0)';
        };

        return {
            handleMouseMove,
            handleMouseLeave,
        };
    },
});
</script>

<style lang="scss">
$component: "collections";

.#{$component} {
    // max-width: 1200px;
    margin: 100px auto 400px auto;


}
</style>
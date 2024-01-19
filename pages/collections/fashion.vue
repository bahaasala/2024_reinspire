<template>
    <section id="grid" class="grid">
        <!-- <h1>Grid</h1> -->
        <ul>
            <li>
                <figure>
                    <img class="black-white" src="https://www.datocms-assets.com/101417/1703463646-grid-1.jpg"
                        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                    <div class="action-btns">
                        <a class="btn">Download</a>
                        <a class="btn">Customize</a>
                    </div>
                </figure>
            </li>
            <li>
                <figure>
                    <img class="black-white" src="https://www.datocms-assets.com/101417/1703463651-grid-2.jpg"
                        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                </figure>
            </li>
            <li>
                <figure>
                    <img class="black-white" src="https://www.datocms-assets.com/101417/1703463655-grid-3.jpg"
                        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                </figure>
            </li>
            <li>
                <figure>
                    <img class="black-white" src="https://www.datocms-assets.com/101417/1703463660-grid-4.jpg"
                        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                </figure>
            </li>
            <li>
                <figure>
                    <img class="black-white" src="https://www.datocms-assets.com/101417/1703463651-grid-2.jpg"
                        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                </figure>
            </li>
            <li>
                <figure>
                    <img class="black-white" src="https://www.datocms-assets.com/101417/1703463646-grid-1.jpg"
                        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                </figure>
            </li>
            <li>
                <figure>
                    <img class="black-white" src="https://www.datocms-assets.com/101417/1703463660-grid-4.jpg"
                        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                </figure>
            </li>
            <li>
                <figure>
                    <img class="black-white" src="https://www.datocms-assets.com/101417/1703463655-grid-3.jpg"
                        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" alt="">
                </figure>
            </li>
        </ul>
    </section>
</template> 

<script lang="ts">
export default defineComponent({
    name: "Grid",
    props: {
    },
    setup() {
        const handleMouseMove = (event: MouseEvent): void => {
            const introPhoto = event.currentTarget as HTMLElement;
            const containerCenterX =
                introPhoto.offsetLeft + introPhoto.offsetWidth / 2;
            const containerCenterY =
                introPhoto.offsetTop + introPhoto.offsetHeight / 2;
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const offsetX = (mouseX - containerCenterX) * 0.015; // Decrease the multiplier for less movement
            const offsetY = (mouseY - containerCenterY) * 0.015; // Decrease the multiplier for less movement

            introPhoto.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.02, 1.02)`;
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
$component: "grid";

.#{$component} {
    // max-width: 1200px;
    margin: 100px auto 400px auto;

    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            // position: relative;
            // padding: auto;
            overflow: hidden;
            max-height: 650px;
            width: 100%;

            &:hover {
                .btn {
                    opacity: 1;
                    transform: translateY(-59px);
                }

                img {
                    // scale: 1.1;
                }
            }
        }

        li:nth-of-type(even) {
            margin-top: 75px;
        }

        figure {
            // position: relative;
            // height: 100%;
            left: 0;
            margin: 0;
            padding: 0;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            translate: none;
            transition: filter 0.5s ease-in-out, transform 0.1s ease;
        }

        .action-btns {
            position: relative;
            z-index: 100;
            display: flex;
        }

        .btn {
            opacity: 0;
            display: block;
            transform: translateY(100px);
            transition: 0.25s ease-in-out;
            margin-left: 20px;
        }
    }
}
</style>
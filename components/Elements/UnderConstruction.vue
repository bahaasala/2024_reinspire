<template>
    <div class="progress">
        <section class="progress-section">
            <section class="progress-text-container">
                <h1><span>Our website is </span>Under Construction</h1>
                <p>Reach out via: <a href="mailto:info@reinspire.nl">info@reinspire.nl</a></p>
            </section>
        </section>
        <section class="progress-section">
        </section>
        <section class="progress-section">
        </section>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    name: "Progress",
});

</script>

<style lang="scss">
$component: "progress";

.#{$component} {
    &-text-container {
        h1 {
            margin: 0;
            display: flex;
            flex-direction: column;
        }
    }

    &-section:first-of-type {
        position: relative;
        width: 100%;
        height: 100vh;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        background-attachment: fixed;
        background-image: url("https://reinspire.nl/images/reinspire-under-construction-1.jpg");
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px 40px 20px 25px;
    }

    &-section:nth-of-type(2),
    &-section:nth-of-type(3) {
        position: relative;
        width: 100%;
        height: 100vh;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        top: 0;
        right: 0;
        display: flex;
        justify-content: flex-end;
        background-attachment: fixed;
    }

    &-section:nth-of-type(2) {
        background-image: url("https://reinspire.nl/images/reinspire-under-construction-2.jpg");
    }

    &-section:nth-of-type(3) {
        background-image: url("https://reinspire.nl/images/reinspire-under-construction-3.jpg");
    }

    @media (max-width: 767px) {
        &-section:first-of-type {
            background-image: url("https://reinspire.nl/images/reinspire-under-construction-mobile-1.jpg");
            background-attachment: unset;
            background-position: unset;
        }

        &-section:nth-of-type(2) {
            background-image: url("https://reinspire.nl/images/reinspire-under-construction-mobile-2.jpg");
            background-attachment: unset;
            background-position: unset;
        }

        &-section:nth-of-type(3) {
            background-image: url("https://reinspire.nl/images/reinspire-under-construction-mobile-3.jpg");
            background-attachment: unset;
            background-position: unset;
        }
    }

}
</style>
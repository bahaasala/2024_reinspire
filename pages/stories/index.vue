<template>
    <div class="stories">
        <section>
            <img src="https://www.datocms-assets.com/101417/1705708302-reinspire_pink_desert_1.jpg">
            <img src="https://www.datocms-assets.com/101417/1705708321-reinspire_pink_desert_queen.jpg">
            <img src="https://www.datocms-assets.com/101417/1705708316-reinspire_pink_desert_4.jpg">
            <img src="https://www.datocms-assets.com/101417/1705708312-reinspire_pink_desert_3.jpg">
            <img src="https://www.datocms-assets.com/101417/1705708307-reinspire_pink_desert_2.jpg">

            <!-- ADD A AUDIO ELEMENT WHERE I CAN ADD MP3 IN IT -->
            <audio controls>
                <source src="https://www.datocms-assets.com/101417/1705709043-reinspire_pink_desert-sound.mp3"
                    type="audio/mp3">
                Your browser does not support the audio element.
            </audio>

        </section>
    </div>
</template>

<script lang="ts">
</script>

<style lang="scss">
$component: "stories";

.#{$component} {
    img {
        width: 100%;
    }
}
</style>
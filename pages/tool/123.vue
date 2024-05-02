<template>
    <div class="tool-single-project">
        <section class="tool-single-project-intro">
            <h1>Reinspire Tool - Stitching Stories</h1>
        </section>
        <div class="tool-single-project-content">
            <section class="tool-single-project-list-section">
                <h3>Website</h3>
                <ul>
                    <li><a href="https://www.stitchingstories.nl/wp-admin" target="_blank">Dashboard</a></li>
                    <li><a href="https://www.stitchingstories.nl" target="_blank">Website</a></li>
                </ul>
            </section>
            <section class="tool-single-project-list-section">
                <h3>Trello</h3>
                <ul>
                    <li><a href="https://trello.com/b/D1hB4lbZ/stitching-stories-website">Trello board</a></li>
                </ul>
            </section>
            <section class="tool-single-project-list-section">
                <h3>Tutorials</h3>
                <ul>
                    <li><a href="#">Add collection</a></li>
                    <li><a href="#">Add product</a></li>
                </ul>
            </section>
            <section class="tool-single-project-list-section">
                <h3>Analytics</h3>
                <ul>
                    <li><a href="#">Google analytics</a></li>
                </ul>
            </section>
            <section class="tool-single-project-list-section">
                <h3>Branding</h3>
                <ul>
                    <li><a href="#">Process</a></li>
                    <li><a href="#">Brand Guide</a></li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
$component: "tool-single-project";

.#{$component} {
    margin-bottom: 30rem;

    &-intro {
        position: relative;
        width: 100%;
        height: 30vh;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        background-attachment: fixed;
        background-image: url("https://www.datocms-assets.com/101417/1713698696-reinspire-tool-pic-1.jpg");
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px 40px 20px 25px;

        h1 {
            text-align: center;
        }
    }

    &-content {
        max-width: 1200px;
        margin: 0 auto;
    }

    &-list-section {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.5px solid #8B8A85;

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0;
            padding: 0;

            li {
                margin-left: 1rem;
            }
        }
    }

    // background-color: #f00;
}
</style>
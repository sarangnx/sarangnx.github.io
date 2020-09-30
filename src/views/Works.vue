<template>
    <div class="curvy-bg">
        <div class="works col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>Works</h1>
            <div class="d-flex flex-column">
                <work
                    image="/img/projects/bifrost.png"
                    title="Bifrost - Save to Google Drive"
                    :tech="['nuxt.js', 'express.js', 'googleapis', 'heroku']"
                >
                    <template #description>
                        Bifrost is a service that helps you to download any files directly to Google Drive.
                    </template>
                </work>
            </div>
        </div>
    </div>
</template>

<script>
import loader from '@/mixins/loader';
import Work from '@/components/Work';

export default {
    mixins: [loader],
    components: {
        Work
    }
};
</script>

<style lang="scss">
.works {
    h1 {
        font-weight: bold;
    }
}
</style>

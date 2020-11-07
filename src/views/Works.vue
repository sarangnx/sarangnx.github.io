<template>
    <div class="curvy-bg">
        <div class="works col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>Works</h1>
            <div class="d-flex flex-column">
                <work
                    image="/img/projects/blackpearl.png"
                    title="Black Pearl - Download Torrents to Google Drive"
                    :tech="['socket.io', 'vue.js', 'express.js', 'googleapis', 'heroku']"
                    source="https://github.com/sarangnx/torrent-webapp"
                    website="https://torrent.srng.dev/"
                >
                    <template #description>
                        This service helps you to download any torrents directly to Google Drive. Like other torrent
                        clients such as µTorrent you can select and download partial torrents too. You can donwload a
                        single file or a complete folder. And all of this works without using any of your bandwidth.
                    </template>
                </work>
                <work
                    image="/img/projects/bifrost.png"
                    title="Bifrost - Save to Google Drive"
                    :tech="['nuxt.js', 'express.js', 'googleapis', 'heroku']"
                    source="https://github.com/sarangnx/google-drive-download"
                    website="https://google-drive-download.herokuapp.com/"
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

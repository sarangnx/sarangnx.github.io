<template>
    <div class="curvy-bg">
        <div class="works col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>Works</h1>
            <p></p>
        </div>
    </div>
</template>

<script>
import loader from '@/mixins/loader';

export default {
    mixins: [loader]
};
</script>

<style lang="scss">
.works {
    h1 {
        font-weight: bold;
    }
}
</style>

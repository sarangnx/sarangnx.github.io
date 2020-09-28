<template>
    <div class="home d-flex flex-column flex-md-row justify-content-around">
        <div class="text-container col-12 col-md-6">
            <span class="title">I'm Sarang</span>
            <span class="sub-title">Full Stack Developer</span>
        </div>
        <div class="image-container col-12 col-md-6">
            <img src="/img/me.png" />
        </div>
    </div>
</template>

<script>
import loader from '@/mixins/loader';

export default {
    name: 'Home',
    mixins: [loader],
    mounted() {
        // fallback for old browsers
        const minHeight = window.innerHeight - 200;
        document.querySelector('.home').style.minHeight = `${minHeight}px`;
    }
};
</script>

<style lang="scss">
@import '~rfs/scss';

.home {
    height: var(--desktop-full-height);
    .mobile-view > & {
        height: var(--mobile-full-height);
    }
}

.image-container {
    justify-content: flex-end;
    img {
        width: 100%;
    }
}

.text-container {
    color: white;
    align-items: center;
    justify-content: center;

    .title {
        @include font-size(54px);
    }

    .sub-title {
        @include font-size(16px);
        color: #969696;
    }
}

.text-container,
.image-container {
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
}
</style>

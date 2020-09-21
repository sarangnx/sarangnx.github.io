<template>
    <router-view />
    <bottom-nav v-if="!$bp.smAndUp"></bottom-nav>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue';

export default {
    components: {
        BottomNav
    },
    mounted() {
        // set --vh property in root to fix issues with mobile vh
        // this calculates vh excluding address bar.
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
};
</script>

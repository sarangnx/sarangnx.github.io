<template>
    <router-view />
    <bottom-nav v-if="!$bp.smAndUp"></bottom-nav>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue';

export default {
    components: {
        BottomNav
    }
};
</script>

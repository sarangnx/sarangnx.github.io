<template>
    <navigation />
    <main :class="$bp.smAndUp ? 'flex-grow-1' : 'mobile-view'">
        <router-view />
    </main>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
    components: {
        Navigation
    }
};
</script>

<style lang="scss">
.mobile-view {
    // 60px = height of bottom nav
    // 3rem = py-4 in top nav
    // max(26px, calc(1rem + 1.5vw)) = height of logo
    height: calc(100% - 60px - 3rem - max(26px, calc(1rem + 1.5vw)));
    > div:last-child {
        margin-bottom: 60px;
    }
}
</style>

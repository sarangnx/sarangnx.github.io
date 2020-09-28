<template>
    <transition leave-active-class="slideOutRight animated faster">
        <page-loading v-if="loading" />
    </transition>
    <notifications />
    <navigation />
    <main :class="{ 'mobile-view': !$bp.smAndUp }">
        <router-view />
    </main>
    <custom-footer />
</template>

<script>
import Navigation from '@/components/Navigation';
import CustomFooter from '@/components/CustomFooter';
import Notifications from '@/components/Notification/Notifications';
import PageLoading from '@/components/PageLoading';

export default {
    components: {
        Navigation,
        CustomFooter,
        Notifications,
        PageLoading
    },
    computed: {
        loading() {
            return this.$store.state.loader.loading;
        }
    }
};
</script>

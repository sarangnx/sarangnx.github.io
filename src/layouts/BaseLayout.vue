<template>
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

export default {
    components: {
        Navigation,
        CustomFooter,
        Notifications
    }
};
</script>

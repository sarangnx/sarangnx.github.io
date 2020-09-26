<template>
    <div class="notifications">
        <fade-in group>
            <notification
                v-for="notification in notifications"
                :key="notification.timestamp.getTime()"
                v-bind="notification"
                @close="removeNotification"
            />
        </fade-in>
    </div>
</template>

<script>
import Notification from './Notification';
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'Notifications',
    components: {
        Notification
    },
    computed: {
        ...mapState({
            notifications: state => state.notifications.notifications
        })
    },
    methods: {
        ...mapMutations({
            removeNotification: 'notifications/removeNotification'
        })
    }
};
</script>

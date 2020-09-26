export default {
    install(app) {
        app.config.globalProperties.$notify = notification => {
            app.config.globalProperties.$store.dispatch('notifications/notify', notification);
        };
    }
};

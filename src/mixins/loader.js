export default {
    mounted() {
        // set a delay before hiding loader
        setTimeout(() => {
            this.$store.commit('loader/change', false);
        }, 400);
    }
};

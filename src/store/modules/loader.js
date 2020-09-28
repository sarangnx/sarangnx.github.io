export default {
    namespaced: true,
    state: () => ({
        loading: true
    }),
    mutations: {
        change(state, value) {
            state.loading = value;
        }
    }
};

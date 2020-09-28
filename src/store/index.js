import { createStore } from 'vuex';
import notifications from './modules/notifications';
import loader from './modules/loader';

export default createStore({
    modules: {
        notifications,
        loader
    }
});

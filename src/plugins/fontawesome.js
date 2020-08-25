import '@fortawesome/fontawesome-free/css/all.css';
import FaIcon from '@/components/FaIcon';

export default {
    install(app) {
        app.component('fa-icon', FaIcon);
    }
};

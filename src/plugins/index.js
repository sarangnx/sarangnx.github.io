import './styles';
import fontawesome from './fontawesome';
import breakpoints from './breakpoints';
import transitions from './transitions';
import notifications from './notifications';

export default {
    install(app) {
        app.use(fontawesome);
        app.use(breakpoints);
        app.use(transitions);
        app.use(notifications);
    }
};

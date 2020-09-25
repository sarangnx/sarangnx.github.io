import './styles';
import fontawesome from './fontawesome';
import breakpoints from './breakpoints';
import transitions from './transitions';

export default {
    install(app) {
        app.use(fontawesome);
        app.use(breakpoints);
        app.use(transitions);
    }
};

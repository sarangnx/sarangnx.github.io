import './bootstrap';
import fontawesome from './fontawesome';
import breakpoints from './breakpoints';

export default {
    install(app) {
        app.use(fontawesome);
        app.use(breakpoints);
    }
};

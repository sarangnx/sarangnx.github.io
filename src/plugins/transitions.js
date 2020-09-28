import 'animate.css/source/_vars.css';
import 'animate.css/source/_base.css';
import 'animate.css/source/fading_entrances/fadeInDown.css';
import 'animate.css/source/fading_entrances/fadeInUp.css';
import 'animate.css/source/fading_exits/fadeOutDown.css';
import 'animate.css/source/fading_exits/fadeOutUp.css';
import 'animate.css/source/sliding_exits/slideOutRight.css';

import FadeIn from '@/components/Transitions/FadeIn';

export default {
    install(app) {
        app.component('fade-in', FadeIn);
    }
};

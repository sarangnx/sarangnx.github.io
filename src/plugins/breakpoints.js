import { reactive } from 'vue';

export default {
    install(app) {
        app.config.globalProperties.$bp = reactive({
            xs: false,
            sm: false,
            md: false,
            lg: false,
            xl: false,
            xsOnly: false,
            smOnly: false,
            smAndDown: false,
            smAndUp: false,
            mdOnly: false,
            mdAndDown: false,
            mdAndUp: false,
            lgOnly: false,
            lgAndDown: false,
            lgAndUp: false,
            xlOnly: false,
            height: 0,
            width: 0,
            thresholds: {
                xs: 576,
                sm: 768,
                md: 992,
                lg: 1200
            },
            vScrollBarWidth: 0
        });

        // update breakpoints
        function update() {
            this.height = window.innerHeight || 0;
            this.width = window.innerWidth || 0;
            this.vScrollBarWidth = document.documentElement
                ? window.innerWidth - document.documentElement.clientWidth
                : 0;

            const xs = this.width <= this.thresholds.xs;
            const sm = this.width <= this.thresholds.sm && !xs;
            const md = this.width <= this.thresholds.md - this.vScrollBarWidth && !(sm || xs);
            const lg = this.width <= this.thresholds.lg - this.vScrollBarWidth && !(md || sm || xs);
            const xl = this.width >= this.thresholds.lg - this.vScrollBarWidth;

            this.xs = xs;
            this.sm = sm;
            this.md = md;
            this.lg = lg;
            this.xl = xl;

            this.xsOnly = xs;
            this.smOnly = sm;
            this.smAndDown = (xs || sm) && !(md || lg || xl);
            this.smAndUp = !xs && (sm || md || lg || xl);
            this.mdOnly = md;
            this.mdAndDown = (xs || sm || md) && !(lg || xl);
            this.mdAndUp = !(xs || sm) && (md || lg || xl);
            this.lgOnly = lg;
            this.lgAndDown = (xs || sm || md || lg) && !xl;
            this.lgAndUp = !(xs || sm || md) && (lg || xl);
            this.xlOnly = xl;
        }

        // update breakpoints on resize
        window.addEventListener('resize', update.bind(app.config.globalProperties.$bp), { passive: true });

        // init
        update.apply(app.config.globalProperties.$bp);
    }
};

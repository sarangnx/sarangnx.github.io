<template>
    <footer :class="{ 'mobile-view': !$bp.smAndUp }" class="pt-5">
        <div class="top mb-5">
            <div class="logo-container col-12 col-md-9 p-0 mb-5 mb-md-0">
                <div class="d-flex align-items-center">
                    <router-link to="/">
                        <img src="/img/sg.svg" />
                    </router-link>
                    <span>sarang</span>
                </div>
            </div>
            <div class="quick-links col-12 col-md-3 p-0">
                <h5>Quick Links</h5>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About Me</router-link>
                <router-link to="/skills">Skills</router-link>
                <router-link to="/works">Works</router-link>
                <router-link to="/contact">Contact Me</router-link>
            </div>
        </div>
        <div class="center">
            <span>made with vue.js</span>
            <span>© srng.dev</span>
        </div>
        <div class="bottom"></div>
    </footer>
</template>

<style lang="scss">
@import '~rfs/scss';

footer {
    background: #000000;
    &.mobile-view {
        margin-bottom: 60px !important;
    }

    .top {
        display: flex;
        flex-wrap: wrap;
        @include padding-left(4rem);
        @include padding-right(4rem);

        .logo-container {
            img {
                height: calc(1rem + 1.5vw);
                width: auto;
                min-height: 25px;
            }
            span {
                padding-left: 10px;
                @include font-size('34px');
            }
        }

        .quick-links {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            h5 {
                font-weight: bold;
            }

            a {
                color: #ffffff;
                @include font-size('15px');
            }
        }
    }

    .center {
        background: #1a1a1a;
        @include padding(0.75rem);
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }

    .bottom {
        width: 100%;
        height: 10px;
        background: #bd0000;
    }
}
</style>

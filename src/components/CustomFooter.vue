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
                <div class="quick-links">
                    <a href="https://github.com/sarangnx/sarangnx.github.io" title="GitHub Repo" target="_blank">
                        &lt;source code/&gt;
                    </a>
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
        <div class="social">
            <a href="https://github.com/sarangnx" title="GitHub Profile" target="_blank">
                <fa-icon icon="github" type="fab" />
            </a>
            <a href="https://gitlab.com/sarangnx" title="GitLab Profile" target="_blank">
                <fa-icon icon="gitlab" type="fab" />
            </a>
            <a href="https://stackoverflow.com/users/9155456/srx" title="Stack Overflow Profile" target="_blank">
                <fa-icon icon="stack-overflow" type="fab" />
            </a>
            <a title="Discord - itachi#8350" @click.prevent="copyToClipboard">
                <fa-icon icon="discord" type="fab" />
            </a>
        </div>
        <div class="made-with">
            <span>made with vue.js</span>
            <span>© srng.dev</span>
        </div>
        <div class="red-line"></div>
    </footer>
</template>

<script>
export default {
    methods: {
        copyToClipboard() {
            if (navigator.clipboard) {
                navigator.clipboard.writeText('itachi#8350');
                this.$success({ message: `Discord ID copied to clipboard`, icon: 'discord', iconType: 'fab' });
            }
        }
    }
};
</script>

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

            a,
            span {
                color: #ffffff;
                @include font-size('15px !important');
            }
        }
    }

    .social {
        display: flex;
        justify-content: center;
        padding: 1rem;
        a {
            color: #505050;
            @include padding-left('2rem');
            @include padding-right('2rem');
            @include font-size('26px');
            &:hover {
                color: #ffffff;
                cursor: pointer;
            }
        }
    }

    .made-with {
        background: #1a1a1a;
        @include padding(0.75rem);
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }

    .red-line {
        width: 100%;
        height: 10px;
        background: #bd0000;
    }
}
</style>

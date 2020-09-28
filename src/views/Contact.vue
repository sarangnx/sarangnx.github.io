<template>
    <div class="curvy-bg">
        <div class="contact col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>Contact</h1>
            <div class="mt-5">
                <div class="contacts">
                    <a href="mailto:sarangnkd@gmail.com" @click="copyToClipboard('sarangnkd@gmail.com', 'email')">
                        <fa-icon icon="at" type="fas" />
                        <span class="ml-3">sarangnkd@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/sarang-n-270756170/" target="_blank">
                        <fa-icon icon="linkedin" type="fab" />
                        <span class="ml-3">Sarang N</span>
                    </a>
                    <a href="#" @click.prevent="copyToClipboard('itachi#8350', 'discord')">
                        <fa-icon icon="discord" type="fab" />
                        <span class="ml-3">itachi#8350</span>
                    </a>
                </div>
                <div class="contacts mt-5">
                    <h5 class="font-weight-bold">Profiles</h5>
                    <a href="https://github.com/sarangnx" target="_blank">
                        <fa-icon icon="github" type="fab" />
                        <span class="ml-3">sarangnx</span>
                    </a>
                    <a href="https://gitlab.com/sarangnx" target="_blank">
                        <fa-icon icon="gitlab" type="fab" />
                        <span class="ml-3">sarangnx</span>
                    </a>
                    <a href="https://stackoverflow.com/users/9155456/srx" target="_blank">
                        <fa-icon icon="stack-overflow" type="fab" />
                        <span class="ml-3">user:9155456 (srx)</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loader from '@/mixins/loader';

export default {
    mixins: [loader],
    methods: {
        copyToClipboard(text, type) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text);
                let message =
                    type === 'email'
                        ? { message: `Email ID copied to clipboard`, icon: 'at', iconType: 'fas' }
                        : { message: `Discord ID copied to clipboard`, icon: 'discord', iconType: 'fab' };
                this.$success(message);
            }
        }
    }
};
</script>

<style lang="scss">
.contact {
    h1 {
        font-weight: bold;
    }
    .contacts {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a {
            color: white;
            padding: 0.35rem;
            padding-left: 0px;
            display: flex;
            align-items: center;
            text-decoration: none;
            cursor: pointer;
            .fa-icon {
                font-size: 20px;
            }

            &:hover {
                color: #cacaca;
            }
        }
    }
}
</style>

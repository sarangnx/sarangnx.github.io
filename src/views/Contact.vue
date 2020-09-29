<template>
    <div class="curvy-bg">
        <div class="contact col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>Contact</h1>
            <div class="d-flex flex-column flex-md-row">
                <div class="mt-2 col-12 col-md-6 p-0 d-flex flex-column justify-content-between">
                    <div class="contacts mb-5 mb-md-0">
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
                    <div class="contacts">
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
                <div class="col-12 col-md-6 p-0 contact-form-wrapper">
                    <div id="contact-form" :class="{ 'w-100': $bp.smAndDown }">
                        <div class="form--group">
                            <input type="text" id="name" class="form--field" />
                            <label for="name" class="form--label">Name</label>
                        </div>
                        <div class="form--group">
                            <input type="email" id="email" class="form--field" />
                            <label for="email" class="form--label">Email</label>
                        </div>
                        <div class="form--group">
                            <textarea rows="2" id="message" class="form--field"></textarea>
                            <label for="message" class="form--label">Message</label>
                        </div>
                        <div class="form--group">
                            <button class="send">Send</button>
                        </div>
                    </div>
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
#contact-form {
    display: flex;
    flex-direction: column;
    background: #1f1f1f;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 4px 4px 4px #0b0b0b70;

    .form--group {
        position: relative;
        padding: 15px 0px;
    }
    .form--field,
    .send {
        width: 100%;
        border: 0px;
        font-size: 0.9rem;
        padding: 1rem;
        outline: 0px;
        background: #0f0f0f;
        color: #ffffff;
        border-radius: 10px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    }
    .form--label {
        position: absolute;
        left: 0px;
        top: 0px;
        font-weight: bold;
        margin: 0px;
        font-size: 0.9rem;
        left: 20px;
        top: 0.2rem;
        color: #b5b5b5;
    }
    textarea {
        resize: none;
    }
    .send {
        background: #08a045;
    }
}
.contact-form-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.mobile-view {
    .contact-form-wrapper {
        justify-content: center;
        margin-top: 4rem;
    }
}
</style>

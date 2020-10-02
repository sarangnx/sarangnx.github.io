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
                <div
                    :class="[
                        'contact-form-wrapper',
                        'col-12 col-md-6 p-0',
                        'd-flex align-items-center flex-column',
                        'justify-content-center justify-content-md-end'
                    ]"
                >
                    <h6 class="px-3">Leave a message</h6>
                    <div id="contact-form" :class="{ 'w-100': $bp.smAndDown }">
                        <div class="form--group">
                            <input type="text" id="name" class="form--field" v-model="name" />
                            <label for="name" class="form--label">Name</label>
                            <span class="input-error" v-if="errors && errors.name">{{ errors.name }}</span>
                        </div>
                        <div class="form--group">
                            <input type="email" id="email" class="form--field" v-model="email" />
                            <label for="email" class="form--label">Email</label>
                            <span class="input-error" v-if="errors && errors.email">{{ errors.email }}</span>
                        </div>
                        <div class="form--group">
                            <textarea rows="2" id="message" class="form--field" v-model="message"></textarea>
                            <label for="message" class="form--label">Message</label>
                            <span class="input-error" v-if="errors && errors.message">{{ errors.message }}</span>
                        </div>
                        <div class="form--group">
                            <button class="send" @click="submitForm" :disabled="loading">
                                <template v-if="loading">
                                    Sending
                                    <fa-icon icon="spinner" type="fas" size="lg" class="fa-spin" />
                                </template>
                                <template v-else>
                                    Send
                                </template>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { isEmail, isLength, isEmpty, trim } from 'validator';
import loader from '@/mixins/loader';

export default {
    mixins: [loader],
    setup() {
        function copyToClipboard(text, type) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text);
                let message =
                    type === 'email'
                        ? { message: `Email ID copied to clipboard`, icon: 'at', iconType: 'fas' }
                        : { message: `Discord ID copied to clipboard`, icon: 'discord', iconType: 'fab' };
                this.$success(message);
            }
        }

        const name = ref('');
        const email = ref('');
        const message = ref('');
        const errors = ref({});
        const loading = ref(false);

        // Watchers to reset validation on user input
        watch([name, email, message], () => {
            errors.value.name = null;
            errors.value.email = null;
            errors.value.message = null;
        });

        async function submitForm() {
            errors.value.name = isEmpty(name.value) ? 'Name Required' : null;
            errors.value.email = isEmpty(email.value)
                ? 'Email Required'
                : isEmail(email.value)
                ? null
                : 'Invalid Email';
            errors.value.message = isEmpty(message.value)
                ? 'Message Requried'
                : isLength(message.value, { min: 10 })
                ? null
                : 'Too short.';

            if (errors.value.name || errors.value.email || errors.value.message) {
                return this.$error('All Fields Required.');
            }
            // END Validation

            loading.value = true;

            // send POST Request to GCP Function
            const response = await fetch('https://asia-south1-srngdev.cloudfunctions.net/submitform', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: trim(name.value),
                    email: trim(email.value),
                    message: trim(message.value)
                })
            });

            const res = await response.json();
            response.status != 200 ? this.$error(res.message) : this.$success(res.message);

            // reset form
            name.value = '';
            email.value = '';
            message.value = '';
            loading.value = false;
        }

        return { name, email, message, errors, submitForm, loading, copyToClipboard };
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
.contact-form-wrapper {
    #contact-form,
    h6 {
        max-width: 400px;
        width: 100%;
    }
}
#contact-form {
    display: flex;
    flex-direction: column;
    background: #1f1f1f;
    padding: 1.2rem 2rem;
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
        min-height: 55px;
        &:active {
            box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.5), inset -4px -2px 10px rgba(5, 255, 105, 0.4) !important;
            font-size: 0.87rem;
        }
        &:disabled,
        &[disabled],
        &:disabled:active {
            font-size: 0.9rem;
            box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2) !important;
            opacity: 0.7;
        }
    }
    .input-error {
        position: absolute;
        max-width: 70%;
        right: 5%;
        background: red;
        top: 0px;
        border-radius: 10px;
        font-size: 0.7rem;
        padding: 0.3rem;
        z-index: 5;
    }
}

.contact-form-wrapper {
    margin-top: 5rem !important;
}

@media (min-width: 768px) {
    .contact-form-wrapper {
        margin-top: -3rem !important;
    }
}
</style>

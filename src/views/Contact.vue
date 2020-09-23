<template>
    <div class="curvy-bg">
        <div class="contact col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>Contact</h1>
            <div class="mt-5">
                <div class="contacts">
                    <a href="#">
                        <fa-icon icon="at" solid />
                        <span class="ml-3">sarangnkd@gmail.com</span>
                    </a>
                    <a href="#">
                        <fa-icon icon="linkedin" brand />
                        <span class="ml-3">Sarang N</span>
                    </a>
                    <a href="#">
                        <fa-icon icon="discord" brand />
                        <span class="ml-3">itachi#8350</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.contact {
    h1 {
        font-weight: bold;
    }
    .contacts {
        display: flex;
        flex-direction: column;
        a {
            color: white;
            padding: 0.5rem;
            padding-left: 0px;
        }
    }
}
</style>

<template>
    <nav class="top-nav px-3 py-4 d-flex justify-content-between align-items-center">
        <router-link class="nav-logo" to="/">
            <img src="/img/sg.svg" />
        </router-link>
        <div v-if="$bp.smAndUp" class="links">
            <router-link class="px-2" to="/about">About</router-link>
            <router-link class="px-2" to="/skills">Skills</router-link>
            <router-link class="px-2" to="/works">Works</router-link>
            <router-link class="px-2" to="/contact">Contact</router-link>
        </div>
    </nav>
</template>

<style lang="scss">
.nav-logo {
    img {
        height: calc(1rem + 1.5vw);
        width: auto;
        min-height: 25px;
    }
}

.top-nav {
    background: var(--nav-bg);

    .links a {
        text-decoration: none !important;
        color: white;
        font-family: 'Roboto Mono';
    }
}
</style>

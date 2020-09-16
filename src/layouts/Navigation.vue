<template>
    <nav
        class="top-nav px-3 py-4 d-flex justify-content-between align-items-center"
    >
        <div class="nav-logo">
            <img src="/img/sg.svg" />
        </div>
        <div class="links">
            <router-link class="px-2" to="/about">About</router-link>
            <router-link class="px-2" to="/about">Skills</router-link>
            <router-link class="px-2" to="/about">Works</router-link>
            <router-link class="px-2" to="/about">Contact</router-link>
        </div>
    </nav>
</template>

<style lang="scss">
.nav-logo {
    img {
        height: calc(1em + 1.5vw);
        width: auto;
        min-height: 25px;
    }
}

.top-nav {
    background: var(--nav-bg);

    .links a {
        text-decoration: none;
        color: white;
        font-family: 'Roboto Mono';
    }
}
</style>

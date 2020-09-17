<template>
    <nav class="bottom-nav">
        <router-link class="px-2" to="/about">
            <fa-icon icon="user-alt" solid />
        </router-link>
        <router-link class="px-2" to="/skills">
            <fa-icon icon="code" solid />
        </router-link>
        <router-link class="px-2" to="/works">
            <fa-icon icon="briefcase" solid />
        </router-link>
        <router-link class="px-2" to="/contact">
            <fa-icon icon="envelope" solid />
        </router-link>
    </nav>
</template>

<style lang="scss">
.bottom-nav {
    background: var(--nav-bg);
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        align-items: center;
        color: white;
        text-decoration: none !important;
        &:hover {
            background: #0f0f0f;
            color: white;
        }
        &.router-link-active {
            color: var(--green);
        }
    }
}
</style>

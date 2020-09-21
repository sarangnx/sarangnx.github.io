<template>
    <footer :class="{ 'mobile-view': !$bp.smAndUp }"></footer>
</template>

<style lang="scss">
footer {
    padding: 20px;
    &.mobile-view {
        margin-bottom: 60px !important;
    }
}
</style>

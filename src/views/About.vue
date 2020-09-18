<template>
    <div class="about container mt-5">
        <h1>About Me</h1>
        <p></p>
    </div>
</template>

<style lang="scss">
.about {
    h1 {
        font-weight: bold;
    }
    &::before {
        content: '';
        background: url('/img/curvybg-1.svg');
        position: absolute;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        left: 0px;
        top: 0px;
        background-position: bottom;
        background-size: contain;
        z-index: -1;
    }
}

// to keep svg above bottom nav in mobile-view
.mobile-view {
    .about::before {
        background-position: 0px calc(100% - 60px);
    }
}
</style>

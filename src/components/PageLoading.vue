<template>
    <div id="page-loading">
        <div class="looping-rhombuses-spinner">
            <div class="rhombus"></div>
            <div class="rhombus"></div>
            <div class="rhombus"></div>
        </div>
    </div>
</template>

<style lang="scss">
#page-loading {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
    height: 100%;
    width: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

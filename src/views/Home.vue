<template>
    <div class="home d-flex flex-column flex-md-row justify-content-around">
        <div class="text-container col-12 col-sm-6">
            <span>I'm Sarang</span>
            <span>Full Stack Developer</span>
        </div>
        <div class="image-container col-12 col-md-6">
            <img src="/img/me.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
};
</script>

<style lang="scss">
.home {
    height: 100%;
}

.image-container {
    justify-content: flex-end;
    img {
        width: 100%;
    }
}

.text-container {
    color: white;
}

.text-container,
.image-container {
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
}
</style>

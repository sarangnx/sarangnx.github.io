<template>
    <div class="work">
        <div class="info">
            <h6 class="font-weight-bold">
                {{ title }}
            </h6>
            <p>
                <slot name="description"></slot>
            </p>
        </div>
        <div class="image">
            <div class="work-image">
                <img :src="image" :alt="title" />
            </div>
        </div>
        <div class="tech">
            <span v-for="(t, index) in tech" :key="index">{{ t }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String
        },
        title: {
            type: String
        },
        tech: {
            type: Array
        }
    }
};
</script>

<style lang="scss">
.info {
    padding-right: 2em;
    p {
        font-size: 0.8em;
    }
}
.image {
    .work-image {
        width: 100%;
        border-radius: 10px;
        img {
            width: 100%;
            border-radius: 10px;
        }
        box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
    }
}
.tech {
    margin-top: 1.7em;
    margin-bottom: 5px;
    span {
        padding: 5px 10px;
        background: black;
        margin: 0px 5px;
        font-size: 0.7rem;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
        border-radius: 5px;
    }
}
@media (min-width: 768px) {
    .work {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        .image {
            grid-row-end: span 2;
        }
        .tech {
            align-self: end;
            margin-top: 0px;
        }
        .info {
            padding-right: 2em;
        }
    }
}
</style>

<template>
    <div class="work my-3">
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
            <div v-if="website || source" class="overlay">
                <a v-if="website" :href="website" target="_blank">
                    <fa-icon icon="external-link-alt" type="fas" />
                </a>
                <a v-if="source" :href="source" target="_blank">
                    <fa-icon icon="code-branch" type="fas" />
                </a>
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
        title: String,
        tech: Array,
        source: String,
        website: String
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
    position: relative;
    .work-image {
        width: 100%;
        border-radius: 10px;
        img {
            width: 100%;
            border-radius: 10px;
        }
        box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #04040494;
        border-radius: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        a {
            border-radius: 50%;
            height: 2em;
            width: 2em;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
        }
        display: none;
    }
    &:hover .overlay {
        display: flex;
    }
}
.tech {
    margin-top: 1.7em;
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;

    span {
        padding: 5px 10px;
        background: black;
        margin: 5px;
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

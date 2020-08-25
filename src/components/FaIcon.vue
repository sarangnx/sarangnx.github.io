<template>
    <span :class="[type, iconClass]"></span>
</template>

<script>
export default {
    props: {
        icon: {
            type: String
        },
        regular: {
            type: Boolean
        },
        solid: {
            type: Boolean
        },
        brand: {
            type: Boolean
        }
    },
    computed: {
        type() {
            const type = this.regular
                ? 'far'
                : this.solid
                ? 'fas'
                : this.brand
                ? 'fab'
                : 'fas';

            return type;
        },
        iconClass() {
            return `fa-${this.icon}`;
        }
    }
};
</script>

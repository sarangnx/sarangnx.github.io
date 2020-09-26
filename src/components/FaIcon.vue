<template>
    <span :class="[type, iconClass, faSize]" class="fa-icon"></span>
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
        },
        size: {
            type: String,
            default: 'sm'
        }
    },
    computed: {
        type() {
            const type = this.regular ? 'far' : this.solid ? 'fas' : this.brand ? 'fab' : 'fas';

            return type;
        },
        iconClass() {
            return `fa-${this.icon}`;
        },
        faSize() {
            return `fa-${this.size}`;
        }
    }
};
</script>

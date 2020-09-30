<template>
    <span :class="[type, iconClass, faSize]" class="fa-icon fa-fw"></span>
</template>

<script>
export default {
    props: {
        icon: {
            type: String
        },
        size: {
            type: String,
            default: 'sm'
        },
        type: {
            type: String,
            default: 'fas',
            validator: value => ['fas', 'fab', 'far'].indexOf(value) !== -1
        }
    },
    computed: {
        iconClass() {
            return `fa-${this.icon}`;
        },
        faSize() {
            return `fa-${this.size}`;
        }
    }
};
</script>

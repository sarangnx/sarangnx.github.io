<template>
    <component
        :is="componentType"
        :enter-active-class="`${enterActiveClass} animated faster`"
        :leave-active-class="`${leaveActiveClass} animated faster`"
        move-class="move"
    >
        <slot></slot>
    </component>
</template>

<script>
import { Transition, TransitionGroup } from 'vue';

export default {
    components: {
        Transition,
        TransitionGroup
    },
    inheritAttrs: false,
    props: {
        group: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: 'down',
            validator: function(value) {
                return ['up', 'down'].indexOf(value) !== -1;
            }
        }
    },
    computed: {
        componentType() {
            return this.group ? 'transition-group' : 'transition';
        },
        enterActiveClass() {
            return this.direction === 'down' ? 'fadeInDown' : 'fadeInUp';
        },
        leaveActiveClass() {
            return this.direction === 'down' ? 'fadeOutUp' : 'fadeOutDown';
        }
    },
    methods: {
        setAbsolutePosition(el) {
            if (this.group) {
                el.style.position = 'absolute';
            }
        }
    }
};
</script>

<style>
.move {
    transition: transform 0.3s ease-out;
}
</style>

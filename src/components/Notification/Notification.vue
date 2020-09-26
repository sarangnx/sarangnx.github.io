<template>
    <div class="alert" :class="[verticalAlign, horizontalAlign, alertType]" :style="customPosition" @click="tryClose">
        <template v-if="icon || $slots.icon">
            <slot name="icon">
                <fa-icon :icon="icon" :type="iconType" size="2x" />
            </slot>
        </template>
        <div class="d-flex flex-column px-3">
            <span v-if="title" class="title">
                <b>{{ title }}</b>
            </span>
            <span v-if="message" v-html="message"></span>
        </div>
        <template v-if="showClose">
            <slot name="dismiss-icon">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="close">
                    <span aria-hidden="true">×</span>
                </button>
            </slot>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Notification',
    props: {
        message: String,
        title: String,
        icon: String,
        iconType: String,
        verticalAlign: {
            type: String,
            default: 'top',
            validator: value => ['top', 'bottom'].indexOf(value) !== -1
        },
        horizontalAlign: {
            type: String,
            default: 'right',
            validator: value => ['left', 'center', 'right'].indexOf(value) !== -1
        },
        type: {
            type: String,
            default: 'info',
            validator: value =>
                ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'].indexOf(value) !== -1
        },
        timeout: {
            type: Number,
            default: 5000,
            validator: value => value >= 0
        },
        timestamp: {
            type: Date,
            default: () => new Date()
        },
        showClose: {
            type: Boolean,
            default: true
        },
        closeOnClick: {
            type: Boolean,
            default: true
        },
        clickHandler: Function
    },
    data: () => ({
        elmHeight: 0
    }),
    computed: {
        ...mapState({
            notifications: state => state.notifications.notifications,
            settings: state => state.notifications.settings
        }),
        alertType() {
            return `alert-${this.type}`;
        },
        customPosition() {
            const initialMargin = 20;
            const alertHeight = this.elmHeight + 10;
            // find count of notifications that have same alignment as this one.
            let sameAlertsCount = this.notifications.filter(alert => {
                return (
                    alert.horizontalAlign === this.horizontalAlign &&
                    alert.verticalAlign === this.verticalAlign &&
                    alert.timestamp <= this.timestamp
                );
            }).length;
            if (this.settings.overlap) {
                sameAlertsCount = 1;
            }
            const pixels = (sameAlertsCount - 1) * alertHeight + initialMargin;
            const styles = {
                [this.verticalAlign]: `${pixels}px`
            };
            return styles;
        }
    },
    mounted() {
        this.elmHeight = this.$el.clientHeight;
        if (this.timeout) {
            setTimeout(this.close, this.timeout);
        }
    },
    methods: {
        close() {
            this.$emit('close', this.timestamp);
        },
        tryClose(evt) {
            if (this.clickHandler) {
                this.clickHandler(evt, this);
            }
            if (this.closeOnClick) {
                this.close();
            }
        }
    }
};
</script>

<style lang="scss">
.notifications .alert {
    position: fixed;
    z-index: 10000;
    max-width: calc(min(500px, calc(100% - 40px), calc(100vh - 40px)));
    display: flex;
    align-items: center;
    &.center {
        margin: 0 auto;
    }
    &.left {
        left: 20px;
    }
    &.right {
        right: 20px;
    }
}
</style>

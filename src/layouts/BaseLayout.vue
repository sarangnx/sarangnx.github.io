<template>
    <navigation />
    <main>
        <router-view />
    </main>
</template>

<script>
import Navigation from './Navigation';

export default {
    components: {
        Navigation
    }
};
</script>

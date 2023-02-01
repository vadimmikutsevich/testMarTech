<script setup>
defineProps(['text'])
</script>

<template>
    <h1 class="title">
        {{ text }}
    </h1>
</template>

<style scoped>
.title {
    background: linear-gradient(145.08deg, #E61726 12.35%, #D4208C 83.63%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: 2.4rem;
    max-width: 476px;
    width: 100%;
    letter-spacing: -0.05em;
}
</style>
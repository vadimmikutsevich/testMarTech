<script setup>
defineProps(['image'])
</script>

<template>
    <div class="container">
        <img :src="image" alt="photo">
    </div>
</template>

<style scoped>
.container {
    display: flex;
    border-radius: 50%;
    overflow: hidden;
};
img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}
</style>
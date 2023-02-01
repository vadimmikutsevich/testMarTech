<script setup>
defineProps(['text', 'action'])
</script>

<template>
    <button @click="action" class="btnContainer">
        <a class="btnTitle">{{ text }}</a>
    </button>
</template>

<style scoped>
.btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(238.08deg, #D4208C 0.42%, #E61726 82.5%);
    border: 0;
    padding: 25px 51px;
    cursor: pointer;
    border-radius: 10px;
    width: 100%;
}
.btnTitle {
    font-weight: 800;
    font-size: 0.8rem;
    color: #FFFFFF;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

@media(max-width: 768px) {
    .btnContainer {
        padding: 15px 35px;
    }
}
</style>
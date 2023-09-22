<script setup>
    defineProps(["btn-text"]);
</script>

<template>
    <button class="btnC"> {{ btn-text }}</button>
</template>

<style scoped>
    .btnC{
        max-width: 520px;
        padding: 16px;
        background-color: rgba(117, 87, 211, 1);
        color: #fff;
    }
</style>
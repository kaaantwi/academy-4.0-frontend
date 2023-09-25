<script setup>
 defineProps(['titles'])
</script>

<template>
    <div class="header">
        <img class="logo" src="../assets/icons/logo.png" alt="logo" />
        <h2 class="title">Application {{ titles }}</h2>
    </div>
</template>

<style scoped>
    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }
    .logo{
        width: 110.103px;
        height: 20.845px;
    }
    .title{
        font-family: "Lato";
        font-style: italic;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 70px;
        text-align: center;
        color: #2b3c4e;
    }
</style>
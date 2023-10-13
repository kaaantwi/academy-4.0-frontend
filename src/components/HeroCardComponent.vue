<script setup>
    defineProps(["title", "textBody", "cardBackgroundColor"])
</script>

<template>
    <section :style="{ background: cardBackgroundColor}">
        <h4>{{ title }}</h4>
        <p>{{ textBody }}</p>
    </section>
</template>

<style scoped>
section{
    padding: 24px 26px 32px 24px;
}

section h4{
    color: #211F26;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: 0.16px;
}

section p{
    color: rgba(33, 31, 38, 0.60);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 156%; /* 21.84px */
    letter-spacing: 0.14px;
    padding-top: 12px;
}
</style>
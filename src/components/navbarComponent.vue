<script setup>
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class="navbar">
        <div class="div">
            <img src="../assets/icons/logo.png" alt="" class="logo">
        </div>
        <div class="nav-links">
            <p><RouterLink class="links" to="/">Home</RouterLink></p>
            <RouterLink class="links" to="/signin">Sign In</RouterLink>
            <RouterLink class="links link-btn" to="/register">Register Now</RouterLink>
        </div>
    </div>
    
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-self: center;
    padding: 45px 10%;
    z-index: 500;
}

.nav-links {
    display: flex;
    gap: 40px;
    align-items: center;
}

.links {
    text-decoration: none;
    color: rgba(33, 31, 38, 0.71);
    font-size: 16px;
}

.link-btn {
    color: #7557D3;
    border-radius: 2px;
    border: 1px solid rgba(117, 87, 211, 0.40);
    padding: 10px;

}</style>

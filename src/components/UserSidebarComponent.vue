<script setup>

</script>

<template>
    <div class="sidenav">
        <div class="profile">
            <img class="profile-img" src="../assets/icons/leftbanner.png" alt="" />
            <div class="details">
                <h1 class="profile-name">Andy Cole</h1>
                <p class="profile-mail">cole@gmal.com</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .sidenav{
        font-family: "Lato";
        width: 292px;
        height: 100vh;
        background: #ffffff;
        box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
        border-radius: 8px;
    }
    .profile{
        background: #7557D3;
        height: 255px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 13px;
        color: #fff;
    }
    
    .profile-img{
        border-radius: 80px;
        border: red 5px solid;
        width: 80px;
        height: 80px;
    }
    .details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    .profile-name{
        color: #FFF;
        font-family: 'Lato';
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -0.4px;
    }
    .profile-mail{
        color: #FFF;
        font-family: Lato;
        font-size: 16px;
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.32px;
    }
</style>
<script setup>
    import { ref } from 'vue';
    import { RouterLink } from "vue-router";

// Define a reactive property to track the password visibility
const passwordVisible = ref(false);

// Function to toggle password visibility
function togglePassword() {
    passwordVisible.value = !passwordVisible.value;
}

</script>

<template>
    <section>
        <div class="container">
            <div class="main">
                <img src="@/assets/icons/logowhite.svg">
                <p>Admin Log In</p>
            </div>

            <div class="forms">
                <div class="input-options">
                    <label for="input">Email Address</label>
                    <input type="text" class="field-input">
                </div>
                <div class="input-options">
                    <label for="password">Password</label>
                    <div class="password-field">
                        <input :type="passwordVisible ? 'text' : 'password'" class="field-input">
                        <span class="password-toggle" @click="togglePassword">
                            <img src="../../assets/icons/eyewhite.svg" alt="show password"/>
                        </span>
                    </div>
                </div>
                <div class="btn">
                    <RouterLink to="/adminDashboard"><button>Sign In</button></RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    
section{
    height: 100vh;
    background-color: #7557D3;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container{
    background-image: url('../../assets/icons/imageBackg.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 624px;
}
.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding-bottom: 69px;
}

.main p {
    color: #FFF;
    font-family: Lato;
    font-size: 24px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
}
.forms {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 22px;
}

.input-options {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input-options label {
    color: #fff;
    font-family: 'Lato';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.field-input {
    border-radius: 4px;
    border: 1.5px solid #BDBDBD;
    width: 379px;
    height: 48px;
    background-color: transparent;
    color: #fff;
}

/*  Additional CSS for the password toggle icon /  */
.password-field {
    position: relative;
}

.password-toggle {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #fff;
}

 /* Style the eye icon /  */
.password-toggle img {
    width: 18px;
}

.btn {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

button {
    padding: 16px 165px 14px 165px;
    color: #7557D3;
    font-family: 'Lato';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: #fff;
    border: none;
    cursor: pointer;
}

</style>
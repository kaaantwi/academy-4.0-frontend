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
        <div class="main">
            <div class="title">
                <img class="logo" src="../assets/icons/small_logo.svg"/>
                <h3>Application Form</h3>
            </div>
            <div class="forms">
                <div class="forms-layout">
                    <div class="input-options">
                        <label for="input">First Name</label>
                        <input type="text" class="field-input">
                    </div>
                    <div class="input-options">
                        <label for="input">Last Name</label>
                        <input type="text" class="field-input">
                    </div>
                </div>
                <div class="forms-layout">
                    <div class="input-options">
                        <label for="input">Email Address</label>
                        <input type="text" class="field-input">
                    </div>
                    <div class="input-options">
                        <label for="input">Phone Number</label>
                        <input type="text" class="field-input">
                    </div>
                </div>
                <div class="forms-layout">
                    <div class="input-options">
                        <label for="password">Password</label>
                        <div class="password-field">
                            <input :type="passwordVisible ? 'text' : 'password'" class="field-input">
                            <span class="password-toggle" @click="togglePassword">
                                <img src="../assets/icons/eye.svg"/>
                            </span>
                        </div>
                    </div>
                    <div class="input-options">
                        <label for="confirmPassword">Confirm Password</label>
                        <div class="password-field">
                            <input :type="passwordVisible ? 'text' : 'password'" class="field-input">
                            <span class="password-toggle" @click="togglePassword">
                                <img src="../assets/icons/eye.svg"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <RouterLink to="/login"><button>Sign Up</button></RouterLink>
                    <p>Already have an account? <RouterLink to="/login" class="link">Sign In</RouterLink></p>
                </div>
                
            </div>
        </div>
    </section>
</template>

<style scoped>
.title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 160px;
    gap: 24px;
}
.title h3{
    color: #2B3C4E;
    font-family: 'Lato';
    font-size: 24px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
}
.forms{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 68px;
    gap: 27px;
}
.forms-layout{
    display: flex;
    gap: 62px;
}
.input-options{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.input-options label{
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.field-input{
    border-radius: 4px;
    border: 1.5px solid #BDBDBD;
    width: 379px;
    height: 48px;
}
.btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 13px;
    gap: 10px;
}

button{
    color: #FFF;
    font-family: 'Lato';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 16px 233px;
    background: #7557D3;
    border: none;
}
.btn p{
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
}
.link a{
    color: #1A2C56;
}

/* Additional CSS for the password toggle icon */
.password-field {
    position: relative;
}

.password-toggle {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #000;
}

/* Style the eye icon */
.password-toggle img {
    width: 18px;
}
</style>

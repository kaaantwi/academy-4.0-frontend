<script>
import formHeaderComponent from '../components/formHeaderComponent.vue'
import { ref, computed } from 'vue';

export default {
    setup() {
        // Define reactive variables using ref
        const showPassword = ref(false);
        const password = ref(null);

        // Define a computed property for the button label
        const buttonLabel = computed(() => (showPassword.value ? 'Hide' : 'Show'));

        // Define a method to toggle the showPassword flag
        const toggleShow = () => {
            showPassword.value = !showPassword.value;
        };

        // Return the variables and methods to the template
        return {
            showPassword,
            password,
            buttonLabel,
            toggleShow,
        };
    },
};
</script>



<template>
    <section class="section container">
        
            <div class="header">
                <img src="../assets/icons/logo.png" alt="logo" class="image"/>
                <h3 class="title">Application Log In</h3>
            </div>
            <!-- <div class="columns is-mobile is-centered has-text-centered">
                <div class=""> -->
                    <div class="card">
                        <div class="card-content">
                            <div class="field">
                                <label class="label">Username</label>
                                <div class="control">
                                    <input type="text" class="inputfield" />
                                </div>
                            </div>
                            <label class="label">Password</label>
                            <div class="field">
                                <div class="control">
                                    <input :type="showPassword ? 'text' : 'password'" class="input" v-model="password" />
                                </div>
                                <div class="control">
                                    <button class="btn" @click="toggleShow">
                                        <span class="icon is-small is-right">
                                            <i class="fas"
                                                :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button class="button is-success card-footer-item">Login</button>
                            </div>
                        </div>
                    </div>
                <!-- </div>
            </div> -->
        </section>
</template>

<style scoped>
    .header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 10px solid red;
        gap: 24px;
    }
    .card{
        display: flex;
        justify-content: center;
        border: 10px solid red;
    }
    .image{
        width: 110.103px;
        height: 20.845px;

    }
    .title{
        color: #2B3C4E;
        font-family: 'Lato';
        font-size: 24px;
        font-style: italic;
        font-weight: 500;
        line-height: normal;
    }
    .inputfield{
        width: 100% !important;
        height: 48px;
        border-radius: 4px;
        border: 1.5px solid #BDBDBD;
    }
    .control{
        border: 10px solid red;
        width: 379px;
        border-radius: 4px;
        border: 1.5px solid #BDBDBD;
    }
    .control .btn{
        width: 100%;
    }
</style>
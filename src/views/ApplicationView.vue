<script setup>
import { ref } from 'vue';
import axios from 'axios';
import FormHeaderComponent from '../components/formHeaderComponent.vue';


// Define reactive data using ref
const user = ref({
    firstName: '',
    lastName: '',
    emailAddress: '',
    dateOfBirth: '',
    address: '',
    university: '',
    course: '',
    cgpa: '',
    cv: null,
    photo: null,
});

// Define file input properties
const fileInputs = ref({
    cv: { accept: 'file_extension', label: 'Upload CV' },
    img: { accept: 'image/*,.pdf', label: 'Upload Photo' },
});

// Define form input properties
const formInputs = ref({
    firstName: { label: 'First Name', placeholder: '', readonly: true },
    lastName: { label: 'Last Name', placeholder: '', readonly: true },
    emailAddress: { label: 'Email', placeholder: '', readonly: true },
    dateOfBirth: { label: 'Date of Birth', placeholder: 'dd/mm/yyyy', readonly: false },
    address: { label: 'Address', placeholder: '', readonly: false },
    university: { label: 'University', placeholder: '', readonly: false },
    course: { label: 'Course of Study', placeholder: '', readonly: false },
    cgpa: { label: 'CGPA', placeholder: '', readonly: false },
});

// Define error messages using ref
const errors = ref({
    firstName: '',
    lastName: '',
    emailAddress: '',
    dateOfBirth: '',
    address: '',
    university: '',
    course: '',
    cgpa: '',
    cv: '',
    img: '',
});

const loading = ref(false);
const error = ref('');

// Create a function to clear error messages
const clearError = (key) => {
    errors.value[key] = '';
};

// Create a function to handle file selection
const selectFileOrImage = (event, key) => {
    user.value[key] = event.target.files[0];
};

// Create a function to create a user
const createUser = async () => {
    loading.value = true;
    const formData = new FormData();

    for (const key in user.value) {
        formData.append(key, user.value[key]);
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:3000/api/v1/auth/application', formData, {
            headers: {
                Authorization: `Basic ${token}`,
            },
        });

        localStorage.removeItem('token');
        const { data } = response.data;
        localStorage.setItem('token', data.token);
        loading.value = false;

        if (data.details.applicant) {
            // Assuming you have a router instance set up
            // Use this.$router.push('/dashboard') to navigate
        } else {
            // Assuming you have a router instance set up
            // Use this.$router.push('/pre-dashboard') to navigate
        }
    } catch (err) {
        loading.value = false;
        error.value = err.response.data.message;
    }
};

</script>

<template>
    <div class="container">
        <FormHeaderComponent titles="Form" />
        <div class="form-container">
            <div class="server-error" v-show="error"> {{ error }} </div>
            <div class="loader" v-if="loading"></div>
            <form @submit.prevent="createUser" class="label-form">
                <div class="uploads">
                    <div v-for="(input, key) in fileInputs" :key="key">
                        <input class="fileupload" type="file" :id="key" :name="key" :accept="input.accept"
                            @change="selectFileOrImage($event, key)" @keypress="clearError(key)" />
                        <label class="file-label" :for="key"> + {{ input.label }}</label>
                        <p v-show="errors[key]">{{ errors[key] }}</p>
                    </div>
                </div>
                <div class="input-container">
                    <div class="form-group">
                        <div v-for="(input, key) in formInputs" :key="key">
                            <label>{{ input.label }}</label>
                            <input @keypress="clearError(key)" :name="key" v-model="user[key]"
                                :placeholder="input.placeholder" :readonly="input.readonly" />
                            <p v-show="errors[key]">{{ errors[key] }}</p>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>







<style scoped>
.loader {
    position: absolute;
    top: 400px;
    border: 16px solid #f3f3f3;
    border-top: 16px solid #7557d3;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 2s linear infinite;
    z-index: 3;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

img {
    margin-top: 100px;
    margin-bottom: 26px;
}

button {
    font-family: "Lato";
    font-weight: 700;
    height: 50px;
    width: 379px;
    border: none;
    margin-top: 40px;
    background: #7557d3;
    border-radius: 4px;
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
}

h1 {
    font-family: "Lato";
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 70px;
    text-align: center;
    color: #2b3c4e;
}

.logo-image {
    text-align: center;
}

input {
    width: 379px;
    height: 48px;
    left: 767px;
    top: 394px;
    margin-top: 3px;
    border: 1.5px solid #bdbdbd;
    border-radius: 4px;
    padding-left: 10px;
}

label {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-top: 20px;
    color: #4f4f4f;
}

p {
    margin-top: 5px;
    color: red;
    font-size: 12px;
    text-align: start;
}


.input-container {
    gap: 62px;
    justify-content: center;
}

.file-label {
    width: 211px;
    height: 49.97px;
    left: 494px;
    top: 328px;
    border: 1.5px dashed #2b3c4e;
    border-radius: 2.87205px;
    text-align: center;
    padding-top: 14px;
    cursor: pointer;
}

.fileupload {
    display: none;
}

.label-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

label {
    display: block;
    text-align: start;
}

h2 {
    font-family: "Lato";
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
    margin-top: 12px;
    text-align: center;
}

form {
    text-align: center;
}

.form-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px 62px;
    justify-content: center;
}

.form-container {
    padding: 50px 60px 50px 60px;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
}

.uploads {
    display: flex;
    gap: 0 32px;
}

.server-error {
    width: max-content;
    border-radius: 5px;
    background: #d68f8a;
    color: #fff;
    padding: 10px;
    align-self: center;
}
</style>

<script setup>
import { ref, onUpdated } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import axios from 'axios';

const firstNameValue = ref('');
const lastNameValue = ref('');
const emailValue = ref('');
const dateOfBirthValue = ref('dd/mm/yyyy');
const addressValue = ref('');
const universityValue = ref('');
const courseValue = ref('');
const cgpaValue = ref('');
const cvValue = ref('');
const photoValue = ref('');

const router = useRouter();

const fileInputs = ref({
  cvValue: { accept: 'file_extension', label: 'Upload CV' },
  imgValue: { accept: 'image/*,.pdf', label: 'Upload Photo' },
});

const firstNameError = ref('');
const lastNameError = ref('');
const emailError = ref('');
const dobError = ref('');
const addressError = ref('');
const universityError = ref('');
const courseError = ref('');
const gpaError = ref('');
const cvError = ref(null);
const photoError = ref(null);

// const loading = ref(false);
// const error = ref('');

// Create a function to clear error messages
const clearError = (key) => {
  switch (key) {
    case 'firstNameValue':
      firstNameError.value = '';
      break;
    case 'lastNameValue':
      lastNameError.value = '';
      break;
    case 'emailValue':
      emailError.value = '';
      break;
    case 'dateOfBirthValue':
      dobError.value = '';
      break;
    case 'addressValue':
      addressError.value = '';
      break;
    case 'universityValue':
      universityError.value = '';
      break;
    case 'courseValue':
      courseError.value = '';
      break;
    case 'cgpaValue':
      gpaError.value = '';
      break;
    case 'cvValue':
      cvError.value = null;
      break;
    case 'photoValue':
      photoError.value = null;
      break;
    default:
      break;
  }
};

const selectFileOrImage = (event, key) => {
  const file = event.target.files[0]; // Get the selected file

  if (file) {
    if (key === 'cvValue') {
      cvValue.value = file;
    } else if (key === 'imgValue') {
      photoValue.value = file;
    }
  } else {
    if (key === 'cvValue') {
      cvValue.value = '';
    } else if (key === 'imgValue') {
      photoValue.value = '';
    }
  }
};

onUpdated(() => {
  console.log("cvv", cvValue.value)
  console.log("cvv", photoValue.value)
})

const register = async () => {
  // Validation logic here

  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      'http://localhost:6001/api/v1/application/create',
      {
        first_Name: firstNameValue.value,
        last_Name: lastNameValue.value,
        cv_url: cvValue.value,
        image_url: photoValue.value,
        email: emailValue.value,
        date_of_birth: dateOfBirthValue.value,
        address: addressValue.value,
        university: universityValue.value,
        course: courseValue.value,
        CGPA: cgpaValue.value,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("res" , response)
    const { first_Name, last_Name, cv_url,image_url, email, date_of_birth, address, university, course, cgpa, status, id, user_id } = response.data.data;
    const userDetails = { first_Name, last_Name, cv_url,image_url, email, date_of_birth, address, university, course, cgpa, status, id, user_id };
    // localStorage.setItem("token", response.data.data.token)
    localStorage.setItem("userApplicationDetails", JSON.stringify(userDetails))
    localStorage.setItem("userDetails", JSON.stringify(userDetails))
    // const userDetails = JSON.parse(localStorage.getItem("userDetails"))  
    router.push({ name: "dashboard" });
  }
  catch (error){
    console.log(error)
  }
}

</script>

<template>
    <section>
      <div class="title">
        <img src="../assets/icons/small_logo.svg" alt="logo" />
        <p>Application Form</p>
      </div>
  
      <form @submit.prevent="register" class="application-form">
        <div class="upload">
          <div v-for="(input, key) in fileInputs" :key="key">
            <input
              :class="key === 'cvValue' ? 'cv' : 'photo'"
              :id="key"
              :type="key === 'cvValue' ? 'file' : 'text'"
              :name="key"
              :accept="input.accept"
              :value="key === 'cvValue' ? cvValue : photoValue"
              @change="(event) => selectFileOrImage(event, key)"
              @keypress="clearError(key)"
            />
            <label :for="key" class="upload-label">
              <span>&#43;</span>
              <p>{{ input.label }}</p>
            </label>
            <p v-show="errors[key]">{{ errors[key] }}</p>
          </div>
        </div>
  
        <div class="forms">
          <div class="forms-layout">
            <div class="input-options">
              <label for="input">First Name</label>
              <input type="text" class="field-input" v-model="firstNameValue" />
              <p v-show="firstNameError">{{ firstNameError }}</p>
            </div>
            <div class="input-options">
              <label for="input">Last Name</label>
              <input type="text" class="field-input" v-model="lastNameValue" />
              <p v-show="lastNameError">{{ lastNameError }}</p>
            </div>
          </div>
          <div class="forms-layout">
            <div class="input-options">
              <label for="input">Email</label>
              <input type="text" class="field-input" v-model="emailValue" />
              <p v-show="emailError">{{ emailError }}</p>
            </div>
            <div class="input-options">
              <label for="input">Date of Birth</label>
              <input
                type="text"
                class="field-input"
                v-model="dateOfBirthValue"
              />
              <p v-show="dobError">{{ dobError }}</p>
            </div>
          </div>
          <div class="forms-layout">
            <div class="input-options">
              <label for="input">Address</label>
              <input type="text" class="field-input" v-model="addressValue" />
              <p v-show="addressError">{{ addressError }}</p>
            </div>
            <div class="input-options">
              <label for="input">University</label>
              <input type="text" class="field-input" v-model="universityValue" />
              <p v-show="universityError">{{ universityError }}</p>
            </div>
          </div>
          <div class="forms-layout">
            <div class="input-options">
              <label for="input">Course of Study</label>
              <input type="text" class="field-input" v-model="courseValue" />
              <p v-show="courseError">{{ courseError }}</p>
            </div>
            <div class="input-options">
              <label for="input">CGPA</label>
              <input type="text" class="field-input" v-model="cgpaValue" />
              <p v-show="gpaError">{{ gpaError }}</p>
            </div>
          </div>
          <div class="btn">
            <RouterLink to="/dashboard">
              <button type="submit">Submit</button>
            </RouterLink>
          </div>
        </div>
      </form>
    </section>
  </template>
  

<style scoped>

section{
    background: #FDFDFF;
    /*padding: 0px 238px 100px 238px;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   padding: 50px 0px;
    
}
.title{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    gap: 24px;
}
.title p{
    color: #2B3C4E;
    font-family: 'Lato';
    font-size: 24px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
}
.application-form{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 5px 15px 0px rgba(33, 31, 38, 0.05);
    flex-direction: column;
    padding: 50px;
}
.upload{
    display: flex;
    gap: 32px;
}
.cv{
    display: none;
}
.upload-label{
    display: flex;
    border-radius: 2.872px;
    border: 1.5px dashed #2B3C4E;
    width: 211px;
    height: 49.974px;
    align-items: center;
    justify-content: center;
    gap: 14px;
}
.photo{
    display: none;
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
    gap: 73px;
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
    padding: 20px;
}

button{
    color: #FFF;
    font-family: 'Lato';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 15px 164px;
    background: #7557D3;
    border: none;
    border-radius: 4px;
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
</style>
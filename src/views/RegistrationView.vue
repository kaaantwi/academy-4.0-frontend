<script setup>

</script>

<template>
    <section>
        <div class="title">
            <img src="../assets/icons/small_logo.svg" alt="logo">
            <p>Application Form</p>
        </div>

        <div class="application-form">
            <div class="upload">
                <input class="cv" id="cv-file" type="file"/>
                <label class="upload-label" for="cv-file"><span>&#43;</span>
                    <p>Upload CV</p></label>
                <input class="photo" id="photo-file" type="file"/>
                <label class="upload-label" for="cv-file"><span>&#43;</span>
                    <p>Upload Photo</p></label>
                
            </div>
            <!--<div class="uploads">
                    <div v-for="(input, key) in fileInputs" :key="key">
                        <input class="fileupload" type="file" 
                            />
                        <label class="file-label" :for="key"> + {{ input.label }}</label>
                        <p v-show="errors[key]">{{ errors[key] }}</p>
                    </div>
                </div>-->

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
                        <label for="input">Email</label>
                        <input type="text" class="field-input">
                    </div>
                    <div class="input-options">
                        <label for="input">Date of Birth</label>
                        <input type="text" class="field-input" value="dd/mm/yyyy">
                    </div>
                </div>
                <div class="forms-layout">
                    <div class="input-options">
                        <label for="input">Address</label>
                        <input type="text" class="field-input">
                    </div>
                    <div class="input-options">
                        <label for="input">University</label>
                        <input type="text" class="field-input">
                    </div>
                </div>
                <div class="forms-layout">
                    <div class="input-options">
                        <label for="input">Course of Study</label>
                        <input type="text" class="field-input">
                    </div>
                    <div class="input-options">
                        <label for="input">CGPA</label>
                        <input type="text" class="field-input">
                    </div>
                </div>
                <div class="btn">
                    <RouterLink to="/dashboard"><button>Submit</button></RouterLink>
                </div>
            </div>
        </div>
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
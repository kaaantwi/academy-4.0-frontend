<script setup>
import ModalComponent from '../../components/ModalComponent.vue';
import { ref } from 'vue';

const mainModalVisibility = ref(false);


const openMainModal = () => {
  mainModalVisibility.value = true;
};

</script>

<template>
   <section>
    <ModalComponent  v-show="mainModalVisibility" class="main-modal" />
  
    <div class="app-main">
        <div class="title">
            <h1>Entries - Batch 2</h1>
            <img src="@/assets/icons/hello.svg">
        </div>
        <p>Comprises of all that applied for batch 2</p>
    </div>

    <table>
        <tr class="head">
            <th>Name</th>
            <th>Email</th>
            <th>
                <div class="sort">
                    <p>DOB - Age</p>
                    <figure>
                        <img src="@/assets/icons/sortup.svg">
                        <img src="@/assets/icons/sortdown.svg">
                    </figure>
                </div>
            </th>
            <th>Address</th>
            <th>University</th>
            <th>
                <div class="sort">
                    <p>CGPA</p>
                    <figure>
                        <img>
                    </figure>
                </div>
            </th>
        </tr>
        <tr @click="openMainModal" class="tail">
            <td>Jack Ice</td>
            <td>hhhhhh</td>
            <td>kkkkkk</td>
            <td>uuuuuu</td>
            <td>ppppp</td>
            <td>sssssssss</td>
        </tr>
    </table>
   </section> 
</template>

<style scoped>
section{
  display: flex;
  flex-direction: column;
    background: #FDFDFF;
}
.app-main{
    padding-bottom: 40px;
}
  .title {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .title h1 {
    color: #2B3C4E;
    font-family: 'Lato';
    font-size: 43.556px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.871px;
  }

  .app-main p {
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 13px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background: #2b3c4e;
    border-collapse: collapse;
    width: 1042px;
    height: 46px;
    padding-left: 40px;
    padding-right: 18px;
  }

  .sort {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  td {
    padding: 24px 26px;
  }

  .tail {
    /* Add styles to align the tail row with the table head */
    /*background-color: #F0F0F0; */
    color: #333; /*example text color */
    display: flex;
    justify-content: space-between;
    
  }
  table {
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1042px;
}
.tail:hover {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557d3;
  border-radius: 8px 0px 0px 8px;
  margin-top: 20px;
  cursor: pointer;
}
figure{
    display: flex;
    flex-direction: column;
    gap: 3px;
}


</style>

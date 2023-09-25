<script setup>
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';


</script>

<template>
    <div class="container">
        <DashboardTitleComponent 
            cardTitle="Dashboard"
            cardText="Your Application is currently being review, you wil be notified if successful"
        />

        <div class="applicant-info">
            <div class="date">
                <h5 class="date-title">Date of Application</h5>
                <h3 class="text">09.09.19</h3>
                <div class="line"></div>
                <h6>4 days since applied</h6>
            </div>
            <div class="date">
                <h5 class="date-title">Application Status</h5>
                <h3 class="text">Pending</h3>
                <div class="line yellow"></div>
                <h6>We will get back to you</h6>
            </div>
        </div>

        <div class="cards">
            <div class="card">
                <h6 class="card-title">Updates</h6>
                <div class="card-content">
                    <hr>
                    <hr>
                    <hr>
                    <hr>
                </div>
            </div>
            <div class="card">
                <h6 class="card-title">Updates</h6>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    font-family: 'Lato';
    display: flex;
    flex-direction: column;
    gap: 65px;
}
.applicant-info{
    display: flex;
    gap: 87px;
}
.date-title{
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.date{
    display: flex;
    flex-direction: column;
    gap: 11px;
}
.text{
    color: #2B3C4E;
    font-family: 'Lato';
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
h6{
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.line{
    width: 148px;
    height: 4px;
    border-radius: 4px;
    background: #006DF0;
    margin-top: 8px;
}
.yellow{
   width: 148px;
    height: 4px;
    border-radius: 4px; 
    background: #F09000;        
}
.cards{
    display: flex;
    justify-content: space-between;
    gap: 55px;
}
.card{
    width: 482px;
    height: 453px;
    border-radius: 4px;
    border: 1px solid #ECECF9;
    padding: 34px;
}
.card-title{
    color: #2B3C4E;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
}
</style>
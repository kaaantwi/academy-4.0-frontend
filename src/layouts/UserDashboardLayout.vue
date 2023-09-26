<script setup>
import { RouterLink, useRoute, RouterView } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div class="layoutPart">
    <div class="sidebar">
      <div class="sideNavigation">
        <div class="profileSide">
          <img class="profile-img" src="@/assets/icons/leftbanner.png" alt="profile picture" />
          <div class="details">
            <h1 class="profile-name">Andy Cole</h1>
            <p class="profile-gmail">cole@gmail.com</p>
          </div>
        </div>

        <div class="sidenavigation-links">
          <RouterLink class="links" :to="{ name: 'dashboard' }" active-class="active">
            <div class="icons"><img src="@/assets/icons/dashboardicon.svg" alt="" /></div>
            <p class="link-text">Dashboard</p>
          </RouterLink>

          <RouterLink class="links" :to="{ name: 'assessment' }" active-class="active">
            <div class="icons"><img src="@/assets/icons/assessment.svg" alt="" /></div>
            <p class="link-text">Assessment</p>
          </RouterLink>

          <RouterLink class="links logout" :to="{ name: 'users' }">
            <div class="icons"><img src="@/assets/icons/logouticon.svg" alt="" /></div>
            <p class="link-text">Log Out</p>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="rightContent">
      <RouterView />
    </div>
  </div>
</template>


<style scoped>
.layoutPart{
  display: flex;
}
.sideNavigation {
  height: 100vh;
  width: 292px;
  font-family: 'Lato';
  border-radius: 8px;

  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  
}
.profile-img {
    border-radius: 80px;

    height: 80px;
    width: 80px;
}

.profileSide {
    background: #7557D3;
    height: 255px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 13px;
    color: #fff; 
    align-items: center;
    
}



.details {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    
    align-items: center;
    
}
.sidenavigation-links{
    display: flex;
    flex-direction: column;
    padding: 45px;
    gap: 28px;
    
}

.profile-name {
    
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FFF;
    font-family: 'Lato';
    letter-spacing: -0.4px;
}

.profile-gmail {
    
    
    font-weight: 400;
    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: italic;
    letter-spacing: -0.32px;
}
.icons {
  height: 15.789px;
  
  width: 12px;
}

.links {
  display: flex;
  gap: 21px;
  font-family: 'Lato';
  font-size: 16px;
  font-weight: 400;
  align-items: center;
  text-decoration: none;
  color: #2B3C4E;
  text-align: center;
  line-height: normal;
}
.logout {
  margin-top: 32px;
}



.rightContent{
  padding: 102px 47px;
}
.active{
    
    font-size: 16px;
    font-style: normal;
    color: #2B3C4E;
    font-weight: 700;
    text-align: center;
    font-family: 'Lato';
}

</style>

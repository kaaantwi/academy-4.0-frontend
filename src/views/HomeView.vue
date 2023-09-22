<script setup>
import { RouterLink } from "vue-router";
import NavbarComponent from "../components/navbarComponent.vue";
import CardComponent from "../components/cardComponent.vue";

</script>
<template>
    <NavbarComponent class="navbar"/>
    <div class="wrapper">
      <div class="content">
        <div class="left-text">
          <h3 class="header">
            Ever had a Dream of Becoming a Software <span>Engineer?</span>
          </h3>
          <p class="paragraph">
            Join enyata academy today and bring your long awaiting dream to reality.
          </p>
          <div>
            <RouterLink class="btn-link" to="/register">Register Now</RouterLink>
          </div>
        </div>
        <img src="../assets/icons/leftbanner.png" alt="" class="banner">
      </div>
      <div class="whyus">
        <div class="whyheader">
          <hr class="yellowline">
          <h4 class="whytext">Why us?</h4>
        </div>
        <div class="card-wrapper">
          <CardComponent  cardTitle="Learn from the best" cardText="Amet minim mollit non deserunt 
          ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation amet." />

          <CardComponent class="bg-white"  cardTitle="100% online classes" cardText="Amet minim mollit non deserunt 
          ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation amet." />
          <CardComponent  cardTitle="Get paid while learning" cardText="Amet minim mollit non deserunt 
          ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation amet." />
          <CardComponent class="bg-white" cardTitle="Work on real project" cardText="Amet minim mollit non deserunt 
          ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation amet." />
        </div>
      </div>
      <div class="footer">
        <h3 class="footerText">Copyright © Enyata 2021</h3>
      </div>
    </div>
</template>

<style scoped>
.navbar{
  z-index: 500;
}
.content{
  display: flex;
  align-items: center;
}
  .wrapper{
    /* padding: 10% 0 0 0; */
    position: absolute;
    top: 0;
    z-index: -700;
  }
  .left-text{
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-left: 10%;
  }
  .header{
    color: #211F26;
    font-size: 40.908px;
    font-weight: 700;
    line-height: 57.271px;
    letter-spacing: 1.432px;
    padding-top: 207px;
  }
  .header span{
    color: #7557D3;
  }
  .paragraph{
    color: rgba(33, 31, 38, 0.71);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.4px;
  }
  .btn-link{
    border-radius: 2px;
    background: #7557D3;
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    padding: 12px 24px;
  }
  .whyus{
    padding: 100px 10% 0 10%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .whyheader{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .whytext{
    color: #211F26;
    font-size: 24px;
    font-weight: 700;
    line-height: 33.6px;
    letter-spacing: 0.24px;
  }
  .yellowline{
    width: 40px;
    height: 4px;
    border: 3px solid rgba(253, 200, 64, 1);
  }
  .card-wrapper{
    display: flex;
  }
  .bg-white{
    background-color: #ffff;
  }
  .footer{
    color: #fff;
    background: #7557D3;
    text-align: center;
    padding: 50px;
  }
  .footerText{
    color: #FFF;
    font-size: 14px;
    line-height: 21.84px;
    letter-spacing: 0.14px;
  }
</style>

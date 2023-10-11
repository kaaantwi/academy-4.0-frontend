<script setup>
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';
import { RouterLink } from 'vue-router';
// import { ref, computed } from "vue";
// import axios from "axios";

// const currentQuestionIndex = ref(0);

// const questions = [
//   {
//     question: "What is the capital of France?",
//     options: ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
//     correctAnswer: 0,
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["A. Earth", "B. Mars", "C. Venus", "D. Jupiter"],
//     correctAnswer: 1,
//   },
//   // Add more questions here
// ];

// const currentQuestion = computed(() => {
//   return questions[currentQuestionIndex.value];
// });

// const currentQuestionNumber = computed(() => {
//   return currentQuestionIndex.value + 1;
// });

// const isLastQuestion = computed(() => {
//   return currentQuestionIndex.value === questions.length - 1;
// });

// function nextQuestion() {
//   if (currentQuestionIndex.value < questions.length - 1) {
//     currentQuestionIndex.value++;
//   }
// }

// function previousQuestion() {
//   if (currentQuestionIndex.value > 0) {
//     currentQuestionIndex.value--;
//   }
// }




// const selectedAnswer = ref('');
// const index = ref(0);
// const answers = ref([]);
// const user = ref({
//   score: 0,
//   takenTest: null,
// });
// const stopTime = ref(0);
// const timer = ref(0);
// const time = ref(null);

// const objQuestion = async () => {
//   // Implement your question loading logic here
// };

// // Load questions when the component is created
// objQuestion();

// time.value = Number(localStorage.getItem('timer'));
// const stopTimeRef = ref(null);

// const startTimer = () => {
//   timer.value++;
// };

// const stop = () => {
//   clearInterval(stopTimeRef.value);
//   localStorage.setItem('stopTime', timer.value);
// };

// const answered = (event) => {
//   selectedAnswer.value = event.target.value;
// };

// const finish = async () => {
//   const userId = localStorage.getItem('userId');
//   const token = localStorage.getItem('token');

//   user.value.takenTest = true;

//   try {
//     const res = await axios.put(`http://localhost:6000/api/v1/assessment/take`, user.value, {
//       headers: {
//         Authorization: `Basic ${token}`,
//       },
//     });
//     console.log(res);
//     // Replace with Vue Router navigation
//     // this.$router.push({ name: 'successful' });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// const next = () => {
//   answers.value[index.value] = selectedAnswer.value;
//   if (index.value < allQuestions.value.length - 1) {
//     index.value++;
//   }
//   if (index.value < answers.value.length) {
//     selectedAnswer.value = answers.value[index.value];
//   } else {
//     selectedAnswer.value = '';
//   }
//   computeScore();
// };

// const previous = () => {
//   answers.value[index.value] = selectedAnswer.value;
//   index.value = index.value === 0 ? 0 : index.value - 1;
//   selectedAnswer.value = answers.value[index.value];
//   computeScore();
// };

// const allQuestions = computed(() => {
//   // Replace with your getter implementation
//   return [];
// });

// const getTime = computed(() => {
//   const duration = intervalToDuration({ start: 0, end: timer.value * 1000 });
//   return {
//     min: duration.minutes.toString().padStart(2, '0'),
//     sec: duration.seconds.toString().padStart(2, '0'),
//   };
// });

// watch(timer, (value) => {
//   if (value >= time.value) {
//     stop();
//     finish();
//   }
// });

</script>

<template>
  <section>
    <div class="head">
      <div>
        <DashboardTitleComponent
          cardTitle="Take Assessment"
          cardText="Click the finish button below to submit assessment, you can go back at any time to edit your answers."
        />
      </div>

      <div class="timer" 
       :class="[Number(getTime.min) > 20 ? 'time-up' : '']"
                >{{ getTime.min }}>
        <h3 class="heading">Timer</h3>
        <h4 class="time"                 
        :class="[Number(getTime.min) > 20 ? 'time-up' : '']"
                >{{ getTime.sec }}
          <span class="hour" >00</span><span class="minutes">mins</span>
          <span class="seconds">000</span><span class="minutes">sec</span>
        </h4>
      </div>
    </div>

    <div class="questions">
      <h1>Question {{ currentQuestionNumber }}</h1>

      <h2>{{ currentQuestion.question }}</h2>
    </div>
    <div class="ans-box">
    <div class="answers checkboxes" v-for="(option, index) in currentQuestion.options" :key="index">
       <input 
       :checked="selectedAnswer === alphabet"
      :value="alphabet" type="radio" name="answers"/><label>{{ option }}</label> 
    </div>
    </div>
    <div class="btn1">
      <button class="previous" @click="previousQuestion" :disabled="currentQuestionIndex === 0">
        Previous
      </button>
      <button class="next" @click="nextQuestion" :disabled="currentQuestionIndex === questions.length - 1">
        Next
      </button>
    </div>
    <div class="btn2">
      <RouterLink to="/results"><button class="finish" @click="finishAssessment" :disabled="!isLastQuestion">Finish</button></RouterLink>
    </div>
      
  </section>
</template>

<style scoped>
.head{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
    .heading{
        color: #4F4F4F;
        font-family: 'Lato';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }
    .time{
        
        font-size: 48px;
        font-style: normal;
        font-weight: 300;
    }
    .minutes{
        color: #4F4F4F;
        font-family: 'Lato';
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
    }
    .hour, .seconds{
        color: #2B3C4E;
        text-align: center;
        font-family: 'Lato';
        font-size: 48px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .questions{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 64px;
      padding-bottom: 48px;
      gap: 14px;
    }
    .questions h1{
      color: #2B3C4E;
      font-family: 'Lato';
      font-size: 14px;
      font-style: italic;
      font-weight: 500;
      line-height: normal;
    }
    .questions h2{
      color: #2B3C4E;
      font-family: 'Lato';
      font-size: 24px;
      font-style: italic;
      font-weight: 500;
      line-height: normal;
    }
    .ans-box{
      border: #7557D3 1px solid;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 400px;
      margin: 0 auto;
      gap: 20px;
    }
    .answers{
      display: block;
      border: 1px solid red;
    }
    .btn1{
      padding-top: 66px;
      display: flex;
      justify-content: center;
      gap: 529px;
      padding-bottom: 75px;
    }
    .previous{
      color: #211F26;
      font-family: 'Lato';
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background: #fff;
      stroke-width: 1px;
      stroke: rgba(0, 0, 0, 0.25);
      padding: 10px 31px 11px 32px;
      border-radius: 4px;
    }
    .next{
      color: #FFF;
      font-family: 'Lato';
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background: #7557D3;
      border: none;
      border-radius: 4px;
      padding: 10px 44px 11px 46px;
    }
    .btn2{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .finish{
      color: #FFF;
      font-family: 'Lato';
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background: #CECECE;
      padding: 11px 81px;
      border-radius: 4px;
    }
    .checkboxes input[type="radio"] {
  cursor: pointer;
  appearance: none;
  height: 10px;
  width: 10px;
  background-color: #fff;
  border: 1px solid #2b3c4e;
  -webkit-appearance: none;
}
input[type="radio"]:checked {
  background-color: black;
}
label{
  margin-left: 20px;
}
</style>
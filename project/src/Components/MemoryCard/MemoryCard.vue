<template>
  <div class="my-card">
     <cardNav/>

    <main>
      <div class="cardiv">
      <transition name="rotate" mode="out-in">
        <component :is="currentCmp" :callback="shiftCmp"></component>
      </transition>
    </div>

    <!-- <div class='slogan'>
          <h1>温故而知新</h1>
    </div>-->
    

    
    </main>
  </div>
</template>

<script>
import question from "./childcmp/question.vue";
import answer from "./childcmp/answer.vue";
import cardNav from './childcmp/cardNav.vue'

export default {
  components: {
    question,
    answer,
    cardNav
  },
  data: function() {
    return {
      currentCmp: "question",
      buttonText: "答案",
    };
  },
  methods: {
    shiftCmp(el) {
      if (el === "answer") {
        this.currentCmp = "answer";
        this.buttonText = "返回";
      } else {
        this.currentCmp = "question";
        this.buttonText = "答案";
      }
    },
    
  }
};
</script>

<style  scoped>
.rotate-enter-active {
  animation: jump-in 0.3s ease-out forwards;
}

.rotate-leave-active {
  animation: jump-out 0.3s ease-out forwards;
}

@keyframes jump-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
@keyframes jump-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}


.my-card {
  margin-top: 0;
  background-size: cover;
}


main{
  margin-left: 300px;
}

.cardiv {
  /* border: 1px red solid; */
  min-height: 300px;
}

.slogan {
  text-align: center;
  font-family: "lixukexingshu1f8ea482aa1e86d";
  margin-top: 5rem;
  letter-spacing: 10px;
  font-size: 4rem;
}


</style>


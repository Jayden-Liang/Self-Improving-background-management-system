<template>
  <div>
    <cardNav />
    <div class="main">
      <div class="cardiv" v-for="(item,index) in cardData" :key="index">
            <questionAnswer :item='item'/>
      </div>

    </div>
  </div>
</template>

<script>
import questionAnswer from './question-answer.vue'
import cardNav from "./cardNav.vue";
import question from "./question.vue";
import answer from "./answer.vue";

export default {
  components: {
    question,
    answer,
    cardNav,
    questionAnswer
  },
  data: function() {
    return {
      currentCmp: "question",
      buttonText: "答案",
      cardData: { question: "1", answer: "2" },
      activeName: '1'
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
    }
  },
  created() {
    const axios = require("axios");
    axios
      .get("http://hit-the-road.cc/api/memoryCard")
      .then(res => {
        this.cardData = res.data;
        console.log(this.cardData);
      })
      .catch(error => {
        this.$message.error(error);
      });
  }
};
</script>


<style scoped>
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

.main {
  margin-left: 300px;
  margin-top: 50px;
  display: flex;
  flex-wrap:wrap;

}

.cardiv {
  margin-left: 2rem;
}
</style>
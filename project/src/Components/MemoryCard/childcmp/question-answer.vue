<template>
  <div class="question-answer" @mouseenter="showAnswer" @mouseleave="showQuestion">
    <div :class="{question: show, questionhide: !show}">{{item.question}}</div>

    <p :class="{answer: !show, answerhide: show}">{{ item.answer }}</p>
    <div class="operation">
      <el-popover
        placement="top-start"
        
        width="50"
        trigger="hover"
        :content="'抽中'+item.tested +'次'"
      >
        <el-button slot="reference" type="info" icon="el-icon-info"></el-button>
      </el-popover>
      
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="warning" icon="el-icon-delete"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data: function() {
    return {
      show: true,
      tested: 0
    };
  },
  methods: {
    showAnswer() {
      this.show = false;
    },
    showQuestion() {
      this.show = true;
    }
  }
};
</script>

<style scoped>
.question-answer {
  height: 200px;
  width: 500px;
  border: 1px #ccc solid;
  position: relative;
  box-shadow: 5px 10px 10px #cccc;
  margin-top: 1rem;
}

.questionhide,
.answerhide {
  /* display: none; */
  opacity: 0;
  transition: all 0.5s ease;
  text-align: center;
}
.question,
.answer {
  opacity: 1;
  display: block;
  transition: all 0.5s ease;
  text-align: center;
}

.answer {
  font-size: 0.8rem;
  white-space: pre-line;
  text-align: left;
  padding-left: 2rem;
  height: 160px;
  overflow: auto;
}
.question {
  color: #420420;
  font-size: 1.5rem;
  margin-top: 3rem;
}
.operation {
  position: absolute;
  right: 5px;
  bottom: 10px;
}

.operation .el-button {
  padding: 6px 12px;
}
</style>
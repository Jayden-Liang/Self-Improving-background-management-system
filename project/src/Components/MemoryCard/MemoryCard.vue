<template>
  <div class="my-card">
    <nav class="navBar">
      <div class="cardTitle">Memory card</div>
      <ul>
        <li>数据统计</li>
        <li><el-button type="text" @click="dialogVisible = true">添加</el-button></li>
        <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
      </ul>
    </nav>

    <main>
      <div class="cardiv">
      <transition name="rotate" mode="out-in">
        <component :is="currentCmp" :callback="shiftCmp"></component>
      </transition>
    </div>

    <!-- <div class='slogan'>
          <h1>温故而知新</h1>
    </div>-->
    

    <el-dialog title="添加问题" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="问题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="答案">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    </main>
  </div>
</template>

<script>
import question from "./childcmp/question.vue";
import answer from "./childcmp/answer.vue";
export default {
  components: {
    question,
    answer
  },
  data: function() {
    return {
      currentCmp: "question",
      buttonText: "答案",
      dialogVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
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
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
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

.navBar {
  background: #2ea3fd;
  width: 100%;
  height: 50px;
  display: flex;
}
.navBar div:first-child {
  flex: 2;
  text-align: center;
  /* margin-top: 30px; */
  font-size: 2rem;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
}
.navBar ul {
  flex: 1;
  margin-top: 5px;
}
.navBar ul li {
  list-style: none;
  display: inline-block;
  margin-left: 20px;
  color: white;
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

.el-button--text{
    color: white;
}
</style>


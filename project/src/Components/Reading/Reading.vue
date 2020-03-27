<template>
  <div class="reading">
    <nav class='navbar sticky-top'>
      <ul class='navbar-nav ml-auto'>
        <li class="nav-item"><button @click='naviToBg' class="btn btn-outline-success  my-sm-0" type="submit">后台</button></li>
      </ul>
    </nav>
    <!-- <Modal :showModal="showModal" /> -->
    <main>
        <div class="data-display">
      <div class="summary">
        <div>
          <button
            type="button"
            class="btn btn-primary checkout"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >打卡</button>
          
        </div>
        
        <div class="finished-task">
          <div>
            <div class="word">已读</div>
            <div class="num">2/30</div>
          </div>
        </div>
        <div class="notes-num">
          <div>
            <div class="word">笔记</div>
            <div class="num">35</div>
          </div>
        </div>
      </div>
      <div class="chart-pic">
        <div class="readingChart" style="width: 35rem; height: 22rem;">
          <canvas id="myChart"></canvas>
        </div>
        <div class="pie">
          <canvas id="pie-chart"></canvas>
        </div>
      </div>

      <div class="daily-say">
        <div class="daily-each">
          <div class="date-today">2020-03-02</div>
          <div class="daily-note">今天看到第五章节，对思考关于人的大脑的探索很有趣。</div>
          <div class="daily-book">《思考.快与慢》</div>
        </div>
      </div>

      

    <div class="booklist">
      <div class="read-btn" @click="shifCmp">
        <div>{{buttonText}}</div>
      </div>
      <!-- <UnreadList /> -->
      <transition name="slide" mode="out-in">
        <component :is="selectedCmp"></component>
      </transition>
    </div>


    <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">今日阅读</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="block mt-2">
                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
              </div>
              <el-input
                class="mt-4"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea2"
              ></el-input>

              <el-select class="mt-4" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="modal-footer">
              <el-button plain data-dismiss="modal">取消</el-button>
              <el-button type="success" plain data-dismiss="modal">提交</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    
  </div>
</template>

<script>
import Chart from "chart.js";
import ReadList from "./Cmp/ReadList.vue";
import UnreadList from "./Cmp/UnreadList.vue";
import dailyNote from "./Cmp/dailyNote.vue";

export default {
  components: {
    ReadList: ReadList,
    UnreadList: UnreadList,
    dailyNote
  },
  data: function() {
    return {
      selectedCmp: "ReadList",
      buttonText: "已读",
      showModal: true,
      addNote: true,
      name: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      options: [
        {
          value: "选项1",
          label: "美国众神"
        },
        {
          value: "选项2",
          label: "三国演义(听书)"
        },
        {
          value: "选项3",
          label: "思考.快与慢"
        },
        {
          value: "选项4",
          label: "盐糖脂"
        },
        {
          value: "选项5",
          label: "半小时漫画经济学"
        }
      ],
      value: "美国众神",
      value1: "",
      value2: "",
      textarea2: ""
    };
  },
  methods: {
    shifCmp() {
      if (this.selectedCmp == "ReadList") {
        this.selectedCmp = "UnreadList";
        this.buttonText = "未读";
      } else {
        this.selectedCmp = "ReadList";
        this.buttonText = "已读";
      }
    },
    naviToBg(){
      this.$router.push('/reading-bg').catch(err => {})
    }

  },
  mounted() {
    let myChart = document.querySelector("#myChart").getContext("2d");
    //Global Options 全局设置
    Chart.defaults.global.defaultFontFamily = "Lato"; //设置字体
    Chart.defaults.global.defaultFontSize = 12; //设置字体大小
    Chart.defaults.global.defaultFontColor = "#777"; //设置字体颜色
    let massPopChart = new Chart(myChart, {
      type: "line", //bar, horizontalBar, pie,line, doughnut, radar, polarArea 可以是不同的图表
      data: {
        //数据存放的地方
        labels: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        datasets: [
          {
            label: "数量/本",
            data: ["2", "4", "2", "3", "5"],
            // backgroundColor: 'yellow',

            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: "2",
            hoverBorderColor: "#800080"
          }
        ]
      },
      options: {}
    });
    //-----------------------------------------------------------------------------labels:['小说','经济','思维与认知','心理']
    let pieChart = document.querySelector("#pie-chart").getContext("2d");
    var myPieChart = new Chart(pieChart, {
      type: "doughnut",
      data: {
        //数据存放的地方
        labels: ["小说", "经济", "思维与认知", "心理"],
        datasets: [
          {
            label: "数量/本",
            data: ["2", "4", "2", "3"],
            backgroundColor: ["#FF6384", "#FFCD56", "#36A2EB", "#40e0d0"],
            borderWidth: 1,
            hoverBorderColor: "#800080"
          }
        ]
      },
      options: {
        legend: {
          position: "right"
        }
      }
    });
  }
};
</script>

<style scoped>
@import "./Reading.css";
<style > .slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 0.3s ease-in forwards;
  opacity: 0;
  transition: opacity 0.3s;
}
/* @keyframes slide-in {
      from {
          transform: translateX(100px);
      }
      to {
          transform: translateX(0);
      }
  }
  @keyframes slide-out {
      from {
          transform: translateX(0);
      }
      to {
          transform: translateX(100px);
      }
  } */
</style>
</style>
<template>
  <div class="reading">
      <div></div>
      <Modal :showModal='showModal'/>
      <dailyNote v-on:childByValue="name=$event"/>
      <div>{{name}}</div>

    <div class="data-display">
      <div class="summary">
        <div class="checkout" @click='checkout'>
          <div>打卡</div>
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
    </div>

    <div class="booklist">
      <div class="read-btn" @click='shifCmp'>
        <div>{{buttonText}}</div>
      </div>
       <!-- <UnreadList /> -->
       <transition name='slide' mode='out-in'>
       <component :is='selectedCmp'></component>
       </transition>
      
      
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import ReadList from "./Cmp/ReadList.vue";
import UnreadList from "./Cmp/UnreadList.vue";
import Modal from '../Modal.vue';
import dailyNote from './Cmp/dailyNote.vue'

export default {
  components: {
    ReadList: ReadList,
    UnreadList: UnreadList,
    Modal,
    dailyNote
  },
  data: function(){
      return {
          selectedCmp:'ReadList',
          buttonText: '已读',
          showModal: true,
          addNote: true,
          name:''
      }
  },
  methods:{
    shifCmp(){
        if (this.selectedCmp=='ReadList'){
           this.selectedCmp='UnreadList'
           this.buttonText='未读'
        }else{
            this.selectedCmp='ReadList'
            this.buttonText='已读'
        }
    },
    checkout(){
        this.$store.dispatch('ayncModal')
    }
    // ...mapActions([
    //   'ayncModal'
    // ])
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
@import "./check.css";
<style>
  .slide-enter{
      opacity: 0;
  }
  .slide-enter-active{
      animation: slide-in 1s ease-out forwards;
      transition: opacity 1s;
  }
  .slide-leave{
  } 
  .slide-leave-active{
      animation: slide-out 0.3s ease-in forwards;
      opacity: 0;
      transition: opacity 0.3s;
  }
  @keyframes slide-in {
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
  }

</style>
</style>
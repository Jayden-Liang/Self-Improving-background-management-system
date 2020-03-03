<template>
        <div class='reading'>
           <div class='data-display'>
               <div class='summary'>
                   <div class='checkout'>
                   <div>打卡</div>
               </div>
               <div class='finished-task'>
                   <div>
                       <div class='word'>已读</div>
                       <div class='num'>2/30</div>
                   </div>
               </div>
               <div class='notes-num'>
                   <div>
                       <div class='word'>笔记</div>
                       <div class='num'>35</div>
                   </div>
               </div>
               </div>
               <div class='chart-pic'>
                     <div class='readingChart' style='width: 35rem; height: 22rem;' >
                      <canvas id='myChart' ></canvas>
                    </div>
                   <div class='pie'>
                       <canvas id='pie-chart'></canvas>
                  </div>
               </div>

               <div class='daily-say'>
                   <div class='daily-each'>
                       <div class='date-today'>2020-03-02</div>
                       <div class='daily-note'>今天看到第五章节，对思考关于人的大脑的探索很有趣。</div>
                       <div class='daily-book'>《思考.快与慢》</div>
                   </div>
                   

               </div>
               
               
           </div>
          
          <div class='booklist'>
            <div class='read-btn'><div>已读</div></div>
           <h2>在读书单</h2>
           <ol class='booklist-ol'>
               <li>美国众神</li>
               <li>三国演义(听书)</li>
               <li>思考.快与慢</li>
               <li>盐糖脂</li>
               <li>半小时漫画经济学</li>
           </ol>
          </div>
        </div>
</template>

<script>
import Chart from 'chart.js'

export default {
    mounted(){
        let  myChart=document.querySelector('#myChart').getContext('2d')
        //Global Options 全局设置
        Chart.defaults.global.defaultFontFamily='Lato'; //设置字体
        Chart.defaults.global.defaultFontSize=12; //设置字体大小
        Chart.defaults.global.defaultFontColor='#777';  //设置字体颜色
        let massPopChart = new Chart(myChart, {
            type: 'line',  //bar, horizontalBar, pie,line, doughnut, radar, polarArea 可以是不同的图表
            data: {    //数据存放的地方
                labels: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                datasets: [{
                    label: '数量/本',
                    data: ['2','4','2','3','5'],
                    // backgroundColor: 'yellow',
                    
                    borderWidth: 1,
                    borderColor:'#777',
                    hoverBorderWidth:'2',
                    hoverBorderColor:'#800080',
                    


                }]
            },    
            options:{

            }
        })
        //-----------------------------------------------------------------------------labels:['小说','经济','思维与认知','心理']
        let  pieChart=document.querySelector('#pie-chart').getContext('2d')
        var myPieChart = new Chart(pieChart, {
          type: 'doughnut',  
            data: {    //数据存放的地方
                labels: ['小说','经济','思维与认知','心理'],
                datasets: [{
                    label: '数量/本',
                    data: ['2','4','2','3'],
                    backgroundColor: ['#FF6384', '#FFCD56','#36A2EB','#40e0d0'],
                    borderWidth: 1,
                    hoverBorderColor:'#800080',
                    


                }]
            },    
            options:{
                
                legend:{
                    position: 'right'
                }
            }
       });


    }
}
</script>

<style scoped>
@import './check.css';

 
</style>
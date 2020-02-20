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
               <div class='readingChart'>
                   <canvas id='myChart' ></canvas>
               </div>
               
           </div>
          
          <div class='booklist'>
           <h2>在读书单</h2>
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
                    data: ['2'],
                    // backgroundColor: 'yellow'
                    backgroundColor:['#008080','#ffb6c1','#7fe5f0','#bada55','#ffc3a0','#c0c0c0','#5ac18e','#ffc0cb','#40e0d0','#faebd7'],
                    borderWidth: 1,
                    borderColor:'#777',
                    hoverBorderWidth:'2',
                    hoverBorderColor:'#800080'
                }]
            },    
            options:{}
        })
    }
}
</script>

<style scoped>
 .reading{ 
     margin-left: 18.6rem;
     display: flex;
     
 }

 .data-display{
     flex-basis: 80%;
     margin-top: 1rem;
     margin-left: 2rem;
    
 }

  .summary{
   display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 4rem;
     height: 13rem;
     background: white;
 }

.checkout, .finished-task, .notes-num {
     border: 1px #c1c1c1 solid;
     border-radius: 50%;
     font-size: 1.4rem;
     height: 8rem;
     width: 8rem;
     display: flex;
     justify-content: center;
     align-items: center;
 }

 .checkout:hover, .finished-task:hover, .notes-num:hover{
     background: #ff7373;
 }

 .num{
     font-size: 1.1rem;
     text-align: center;
     padding-top: 0.5rem;
 }

 .word{
     margin-top: 1rem;
 }

 .booklist{
     height: 99vh;
     margin-left: 2rem;
     margin-top: 1vh;
     background: white;
     flex-basis: 18%;
     text-align: center;
 }

 .readingChart{
     width:60%;
    
 }

 #myChart{
   margin-top: 3rem;
   background: white;
 }


</style>
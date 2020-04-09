const LineCart = ()=>{
    var echarts = require('echarts');
    var myChart = echarts.init(document.querySelector('.line'));
        // 指定图表的配置项和数据
   var option = {
    title: {
        text: '每月读书'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        color: 'blue'
    },
    color: ['#ff7373'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
      
    },
    
    xAxis: {
        // show: false,
        type: 'category',
        axisTick:{
          show: false
        },
        axisLine:{
          show: false
        },
        axisLabel: {
          color: '#4ca3dd'
        },
        boundaryGap: true,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月' , '十一月', '十二月']
    },
    yAxis: {
        type: 'value',
        axisLine:{
          show: false,
          lineStyle:{
            color: '#4ca3dd'
          }
        },
        axisTick:{
          show: false
        },
        splitLine:{
          lineStyle:{
              color: '#eeeeee'
          }
          
        }
    },
    series: [
        {
            name: '读书',
            type: 'line',
            smooth: true,
            stack: '本',
            symbol:'circle',
            symbolSize: 8,
            itemStyle: {
               color: '#ff7373',
               borderColor: '#ffc0cb',
               borderWidth: 6
            },
            showSymbol: false,
            data: ["2", "3", "2", "2", "2",'3','2','1','2','2']
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize', function(){
            myChart.resize()
        })
}

const pieCart=()=>{
    var echarts = require('echarts');
    var myChart = echarts.init(document.querySelector('.pie'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '占比 <br/>{b}: {d}%'
        },
        color: ["#FF6384", "#FFCD56", "#36A2EB", "#40e0d0",'#b0e0e6'],
        legend: {
            orient: 'vertical',
            right: 10,
            
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 50, name: '小说'},
                    {value: 10, name: '经济'},
                    {value: 30, name: '思维与认知'},
                    {value: 10, name: '心理'},
                    {value: 1, name: '漫画'},
                ]
            }
        ]
    };
    myChart.setOption(option);
     window.addEventListener('resize', function(){
            myChart.resize()
        })
}

const barCart = ()=>{
    var echarts = require('echarts');
    var myChart = echarts.init(document.querySelector('.bar'));
    var option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        
        xAxis: [
            {
                type: 'category',
                data: ['小说', '经济', '思维与认知', '心理', '漫画'],
                axisTick:{
                    show: false
                  },
                axisLabel: {
                    interval:0
                },
                axisLine:{
                    lineStyle:{
                        color: '#4ca3dd'
                    }
                },
                
                
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick:{
                    show: false
                  },
                splitLine:{
                    lineStyle:{
                        color: '#eeeeee'
                  }},
                  axisLine:{
                    lineStyle:{
                        color: '#4ca3dd'
                    }
                }
            }
        ],
        series: [
            {
                name: '本',
                type: 'bar',
                barWidth: '35%',
                data: [30, 8, 24, 6, 10],
                itemStyle:{
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option);
     window.addEventListener('resize', function(){
            myChart.resize()
        })
}
export {
    LineCart,
    pieCart,
    barCart
}
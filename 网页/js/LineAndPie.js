var myChart = echarts.init(document.getElementById('LineAndPie'));

setTimeout(function () {
option = {
    legend: { textStyle:{
                            fontSize: 18,//字体大小
                            color: '#ffffff'//字体颜色
                        },},
    tooltip: {
        trigger: 'axis',
        showContent: true
    },
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['America', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ['Korea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ['China', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ['Europe', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
        ]
    },
    xAxis: {type: 'category',
    axisLine:{
                        lineStyle:{
                            color:'#ffffff',
                         
                        }
                    } 
 },//x轴为类目
    yAxis: {gridIndex: 0,
        axisLine:{
                        lineStyle:{
                            color:'#ffffff',
                         
                        }
                    } },
    grid: {top: '55%'},//为了确定线性表的位置
    series: [
        {type: 'line', seriesLayoutBy: 'row'},
        {type: 'line', seriesLayoutBy: 'row'},
        {type: 'line', seriesLayoutBy: 'row'},
        {type: 'line',  seriesLayoutBy: 'row'},
        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
                formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
                itemName: 'product',
                value: '2012',
                tooltip: '2012'
            }
        }
    ]
};

myChart.on('updateAxisPointer', function (event) {
    var xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
        var dimension = xAxisInfo.value + 1;
        myChart.setOption({
            series: {
                id: 'pie',
                label: {
                    formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                    value: dimension,
                    tooltip: dimension
                }
            }
        });
    }
});

myChart.setOption(option);

});
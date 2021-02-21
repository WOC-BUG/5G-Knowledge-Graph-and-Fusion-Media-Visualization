var myChart = echarts.init(document.getElementById('sun'));
var data = [{
    name: '通信',
    itemStyle: {
        color: '#da0d68'
    },
  
    // tooltip:{
    //        trigger:'item',
    //       show:true,
    //       formatter:{

    //       }
    //     },
    children: [{
        name: ' 核心网总要求',
        value: 1,
        itemStyle: {
            color: '#e0719c'
        }
           
    },{
        name:'接口技术要求',
        value: 1,
        itemStyle: {
            color: '#dd4c51'
        }
    },{
        name:'波分复用源光网络',
        value: 1,
        itemStyle: {
            color: '#c94a44'
        }
    },{
        name:'天线阵列测试',value: 1,
        itemStyle: {
            color: '#dd4c51'
        }
    },{
        name:'终端测试',
        value: 1,
        itemStyle: {
            color: '#f7a128'
        }
    }]
},{
    name:'电子',
    itemStyle: {
        color: '#ebb40f'
    },
    children:[{
        name:'超高清电视机规范',
        value: 1,
        itemStyle: {
            color: '#e1c315'
        }
    },{
        name:'音频、视听设备',
        value: 1,
        itemStyle: {
            color: '#faef07'
        }
    },{
        name:'绿色设计',
        value: 1,
        itemStyle: {
            color: '#b09733'
        }
    }]
},{
    name:'化工',
    itemStyle: {
        color: '#e65832'
    },
    children:[{
        name:'阻燃化学品',
        value: 1,
        itemStyle: {
            color: '#d45a59'
        }
    },{
        name:'分子筛透水膜',
        value: 1,
        itemStyle: {
            color: '#f89a80'
        }
    },{
        name:'设备规范',
        value: 1,
        itemStyle: {
            color: '#e75b68'
        }
    },{
        name:'化学涂料',
        value: 1,
        itemStyle: {
            color: '#d0545f'
        }
    }]

},{
    name:'冶金',
    itemStyle: {
        color: '#c94930'
    },
    children:[{
        name:'废水处理',
        value: 1,
        itemStyle: {
            color: '#caa465'
        }
    },{
        name:'钢铁加工',
        value: 1,
        itemStyle: {
            color: '#be8663'
        }
    },
    {
        name:'光谱',
        value: 1,
        itemStyle: {
            color: '#ddaf61'
        }
    }]
},{
    name:'有色金属',
    itemStyle: {
        color: '#b14d57'
    },
    children:[{
        name:'岩土检测',
        value: 1,
        itemStyle: {
            color: '#e5762e'
        }
    },{
        name:'灌注桩基',
        value: 1,
        itemStyle: {
            color: '#cc3d41'
        }
    }] 
},{
    name:'建材',
    itemStyle: {
        color: '#a87b64'
    },
    children:[{
        name:'混凝土设备',
        value: 1,
        itemStyle: {
            color: '#c78869'
        }
    },{
        name:'建筑材料',
        value: 1,
        itemStyle: {
            color: '#bb764c'
        }
    }]
},{
    name:'机械',
    itemStyle: {
        color: '#0aa3b5'
    },
    children:[{
        name:'工业车辆',
        value: 1,
        itemStyle: {
            color: '#76c0cb'
        }
    },{
        name:'电机用埋置式热电阻',
        value: 1,
        itemStyle: {
            color: '#9db2b7'
        }
    },{
        name:'照相机环境试验 ',
        value: 1,
        itemStyle: {
            color: '#a2b029'
        }
    },{
        name:'施工养护 ',
        value: 1,
        itemStyle: {
            color: '#718933'
        }
    },
    {
        name:'船舶 ',
        value: 1,
        itemStyle: {
            color: '#5e9a80'
        }
    }]

},{
    name:'航空',
    itemStyle: {
        color: '#187a2f'
    },
    children:[{
        name:'无人机 ',
        value: 1,
        itemStyle: {
            color: '#3aa255'
        }
    }]
    
},{
    name:'轻工',
    itemStyle: {
        color: '#8f1c53'
    },
    children:[{
        name:'杀虫用品 ',
        value: 1,
        itemStyle: {
            color: '#975e6d'
        }
    }]
},{
name:'纺织',
itemStyle: {
        color: '#8b6439'
    },
    children:[{
        name:'工作服',
        value: 1,
        itemStyle: {
            color: '#9db2b7'
        }
    }]
}],

option = {    
    series: {
        
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: ['15%', '80%'],
        sort: null,
        emphasis:{
            itemStyle:{
                color:'red'
            }
        },
       
        levels: [{}, {
            r0: '15%',
            r: '35%',
            itemStyle: {
                borderWidth: 2
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            r0: '35%',
            r: '70%',
            label: {
                align: 'right'
            }
        }, {
            r0: '70%',
            r: '72%',
            label: {
                position: 'outside',
                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }
};


myChart.setOption(option);
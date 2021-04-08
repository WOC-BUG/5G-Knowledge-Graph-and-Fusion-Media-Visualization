// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echarts'));
myChart.hideLoading();
var graph={  //这是数据项目中一般都是获取到的
    nodes:[

        {"id":"0","name":"沉浸式内容","attributes":{"modularity_class":0}},
        {"id":"1","name":"游戏建模","attributes":{"modularity_class":0}},
        {"id":"2","name":"医疗机器人","attributes":{"modularity_class":0}},
        {"id":"3","name":"远程诊断","attributes":{"modularity_class":0}},
        {"id":"4","name":"全景直播","attributes":{"modularity_class":0}},
        {"id":"5","name":"自动驾驶","attributes":{"modularity_class":0}},
        {"id":"14","name":"8k高清视频","attributes":{"modularity_class":0}},
        {"id":"15","name":"天然气监测","attributes":{"modularity_class":0}},
        {"id":"16","name":"专业安防","attributes":{"modularity_class":0}},

        {"id":"6","name":"云VR/AR","attributes":{"modularity_class":1}},
        {"id":"7","name":"智能能源","attributes":{"modularity_class":1}},
        {"id":"8","name":"智慧医疗","attributes":{"modularity_class":1}},
        {"id":"9","name":"车联网","attributes":{"modularity_class":1}},
        {"id":"10","name":"家庭娱乐","attributes":{"modularity_class":1}},

        {"id":"11","name":"5G应用场景","attributes":{"modularity_class":2}},
        
    ],
        links:[
            //这里是id是重新标识的，sourse、target是原来的id
        {"id":"0","source":"0","target":"6"},
        {"id":"1","source":"1","target":"6"},
        {"id":"2","source":"16","target":"7"},
        {"id":"3","source":"15","target":"7"},
        {"id":"4","source":"2","target":"8"},
        {"id":"5","source":"3","target":"8"},
        {"id":"6","source":"5","target":"9"},
        {"id":"7","source":"14","target":"10"},
        {"id":"8","source":"4","target":"10"},
        {"id":"9","source":"10","target":"11"},
        {"id":"10","source":"9","target":"11"},
        {"id":"11","source":"8","target":"11"},
        {"id":"12","source":"7","target":"11"},
        {"id":"13","source":"6","target":"11"},
        
        ]
};

var categories=[
    {
        id:0,
        name: '5G应用场景',
        itemStyle:{normal:{color:'#ffe983'}},
        symbolSize:10,
        shadowColor: '#FFFFFF',
        shadowBlur: 10
        
    },
    {
        id:1,
        name: '场景模式',
        itemStyle:{normal:{color:'#96ff83'}},
        symbolSize:20,
        
    },
    {
        id:2,
        name:'实例',
        itemStyle:{normal:{color:'#ffa883'}},
        symbolSize:30,
    },
    
];
// var winWidth=document.body.clientWidth;
// var winHeight=document.body.clientHeight;

graph.nodes.forEach(function (node) {
    // node.x=parseInt(Math.random()*800);  //这里是最重要的如果数据中有返回节点x,y位置这里就不用设置，如果没有这里一定要设置node.x和node.y，不然无法定位节点 也实现不了拖拽了；
    // node.y=parseInt(Math.random()*800);
    node.x=node.y=null;
    node.draggable = true;
    
    node.category = node.attributes.modularity_class; //对类目进行分类 4种颜色是四种类型
    node.label={
        normal:{
            show:true
        }
    }
});
var option = {    //这里是option配置
    legend: [{    //图例组件
        data: categories.map(function (a) {
            return a.name;
        }),
        top:20,
        left:'center',         //这里是图例组件定位使用的，自定义
        itemGap:26,
        textStyle:{
            padding:[0,12]
        },
        backgroundColor:'#f5f5f5'
    }],
    animation:false,
    // animationDurationUpdate: 1500,
    // animationEasingUpdate: 'quinticInOut',
    backgroundColor:'', //透明背景
    series : [
        {
            
            type: 'graph',
            layout: 'force',           //因为节点的位置已经有了就不用在这里使用布局了
            // circular:{rotateLabel:true},
        
            data: graph.nodes,
            links: graph.links,
            categories: categories,   //节点分类的类目
            roam: true,   //添加缩放和移动
            draggable: false,   //注意这里设置为false，不然拖拽鼠标和节点有偏移
            label: {
                normal: {
                    position: 'bottom',
                    rich:{
                        bg:{
                            backgroundColor: '#f5f5f5'
                        }
                    }
                }
            },
        force:{
                repulsion:350
        }
        }
    ]
};
myChart.setOption(option);
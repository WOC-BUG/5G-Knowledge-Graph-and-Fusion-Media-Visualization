var myChart = echarts.init(document.getElementById('sun'));
var data = [{
    name: '通信行业',
    itemStyle: {
        color: '#da0d68'
    },
    children: [{
        name: ' 核心网总要求',
        value: 1,
        itemStyle: {
            color: '#975e6d'
        },
        children:[{
        name:'系统架构等',
        value: 1,
            itemStyle: {
                color: '#f99e1c'
            }
        },{
            name:'网络功能',
        value: 1,
            itemStyle: {
                color: '#f99e1c'
            }  
        },{
            name:'基于SA的测试',
        value: 1,
            itemStyle: {
                color: '#f99e1c'
            }   
        },{
            name:'5G无线网技术要求',
        value: 1,
            itemStyle: {
                color: '#f99e1c'
            }   
        }],
        
    }, {
        name: '接口技术和测试',
        itemStyle: {
            color: '#e0719c'
        },
        children: [{
            name: 'NG接口',
            value: 1,
            itemStyle: {
                color: '#f99e1c'
            }
        },{
            name: 'Xn/X2接口',
            value: 1,
            itemStyle: {
                color: '#f99e1c'
            }
        }]
    },{
        name:'波分复用无源光网络',
        itemStyle: {
            color: '#e0730c'
        },
        children:[{
            name: '公众电信网环境',
            value: 1,
            itemStyle: {
                color: '#f99e1c'
            }

        }]
    }]
}, 
 {
    name: 'Sour/\nFermented',
    itemStyle: {
        color: '#ebb40f'
    },
    children: [{
        name: 'Sour',
        itemStyle: {
            color: '#e1c315'
        },
        children: [{
            name: 'Sour Aromatics',
            value: 1,
            itemStyle: {
                color: '#9ea718'
            }
        }, {
            name: 'Acetic Acid',
            value: 1,
            itemStyle: {
                color: '#94a76f'
            }
        }, {
            name: 'Butyric Acid',
            value: 1,
            itemStyle: {
                color: '#d0b24f'
            }
        }, {
            name: 'Isovaleric Acid',
            value: 1,
            itemStyle: {
                color: '#8eb646'
            }
        }, {
            name: 'Citric Acid',
            value: 1,
            itemStyle: {
                color: '#faef07'
            }
        }, {
            name: 'Malic Acid',
            value: 1,
            itemStyle: {
                color: '#c1ba07'
            }
        }]
    }, {
        name: 'Alcohol/\nFremented',
        itemStyle: {
            color: '#b09733'
        },
        children: [{
            name: 'Winey',
            value: 1,
            itemStyle: {
                color: '#8f1c53'
            }
        }, {
            name: 'Whiskey',
            value: 1,
            itemStyle: {
                color: '#b34039'
            }
        }, {
            name: 'Fremented',
            value: 1,
            itemStyle: {
                color: '#ba9232'
            }
        }, {
            name: 'Overripe',
            value: 1,
            itemStyle: {
                color: '#8b6439'
            }
        }]
    }]
}, {
    name: 'Green/\nVegetative',
    itemStyle: {
        color: '#187a2f'
    },
    children: [{
        name: 'Olive Oil',
        value: 1,
        itemStyle: {
            color: '#a2b029'
        }
    }, {
        name: 'Raw',
        value: 1,
        itemStyle: {
            color: '#718933'
        }
    }, {
        name: 'Green/\nVegetative',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: 'Under-ripe',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: 'Peapod',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: 'Fresh',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        }, {
            name: 'Dark Green',
            value: 1,
            itemStyle: {
                color: '#038549'
            }
        }, {
            name: 'Vegetative',
            value: 1,
            itemStyle: {
                color: '#28b44b'
            }
        }, {
            name: 'Hay-like',
            value: 1,
            itemStyle: {
                color: '#a3a830'
            }
        }, {
            name: 'Herb-like',
            value: 1,
            itemStyle: {
                color: '#7ac141'
            }
        }]
    }, {
        name: 'Beany',
        value: 1,
        itemStyle: {
            color: '#5e9a80'
        }
    }]
},  {
    name: 'Roasted',
    itemStyle: {
        color: '#c94930'
    },
    children: [{
        name: 'Pipe Tobacco',
        value: 1,
        itemStyle: {
            color: '#caa465'
        }
    }, {
        name: 'Tobacco',
        value: 1,
        itemStyle: {
            color: '#dfbd7e'
        }
    }, {
        name: 'Burnt',
        itemStyle: {
            color: '#be8663'
        },
        children: [{
            name: 'Acrid',
            value: 1,
            itemStyle: {
                color: '#b9a449'
            }
        }, {
            name: 'Ashy',
            value: 1,
            itemStyle: {
                color: '#899893'
            }
        }, {
            name: 'Smoky',
            value: 1,
            itemStyle: {
                color: '#a1743b'
            }
        }, {
            name: 'Brown, Roast',
            value: 1,
            itemStyle: {
                color: '#894810'
            }
        }]
    }, {
        name: 'Cereal',
        itemStyle: {
            color: '#ddaf61'
        },
        children: [{
            name: 'Grain',
            value: 1,
            itemStyle: {
                color: '#b7906f'
            }
        }, {
            name: 'Malt',
            value: 1,
            itemStyle: {
                color: '#eb9d5f'
            }
        }]
    }]
}, {
    name: 'Nutty/\nCocoa',
    itemStyle: {
        color: '#a87b64'
    },
    children: [{
        name: 'Nutty',
        itemStyle: {
            color: '#c78869'
        },
        children: [ {
            name: 'Peanuts',
            value: 1,
            itemStyle: {
                color: '#d4ad12'
            }
        }, {
            name: 'Hazelnut',
            value: 1,
            itemStyle: {
                color: '#9d5433'
            }
        }, {
            name: 'Almond',
            value: 1,
            itemStyle: {
                color: '#c89f83'
            }
        }]
    }, {
        name: 'Cocoa',
        itemStyle: {
            color: '#bb764c'
        },
        children: [{
            name: 'Chocolate',
            value: 1,
            itemStyle: {
                color: '#692a19'
            }
        }, {
            name: 'Dark Chocolate',
            value: 1,
            itemStyle: {
                color: '#470604'
            }
        }]
    }]
}, {
    name: 'Sweet',
    itemStyle: {
        color: '#e65832'
    },
    children: [{
        name: 'Brown Sugar',
        itemStyle: {
            color: '#d45a59'
        },
        children: [{
            name: 'Molasses',
            value: 1,
            itemStyle: {
                color: '#310d0f'
            }
        }, {
            name: 'Maple Syrup',
            value: 1,
            itemStyle: {
                color: '#ae341f'
            }
        }, {
            name: 'Caramelized',
            value: 1,
            itemStyle: {
                color: '#d78823'
            }
        }, {
            name: 'Honey',
            value: 1,
            itemStyle: {
                color: '#da5c1f'
            }
        }]
    }, {
        name: 'Vanilla',
        value: 1,
        itemStyle: {
            color: '#f89a80'
        }
    }, {
        name: 'Vanillin',
        value: 1,
        itemStyle: {
            color: '#f37674'
        }
    }, {
        name: 'Overall Sweet',
        value: 1,
        itemStyle: {
            color: '#e75b68'
        }
    }, {
        name: 'Sweet Aromatics',
        value: 1,
        itemStyle: {
            color: '#d0545f'
        }
    }]
}];

option = {
    title: {
        text: '5G相关标准',
       
        textStyle: {
            fontSize: 34,
            align: 'center'
           
        },
       
    },
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '95%'],
        sort: null,
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
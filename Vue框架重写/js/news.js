var news=new Vue({
    el:"#news",
    data:{
        image:["./img/school.jpg","./img/logo.png","./img/sea.jpg"],
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        newsNumber:3,
        person:["【爱立信已斩获 91 个 5G 商用合同，包括支持中国移动】","【德国最大通信运营商：若排除华为则无法快速实现5G信号覆盖】","【韩国宣布5G普及率达到世界第一 领先第二8倍 】"],
        content:[
            "\u3000\u3000爱立信官网数据显示，目前爱立信已经斩获91个5G商用合同，其中爱立信已经与45家运营商客户达成可公示的商用5G合同，目前在18个国家和地区为32个已经正式运行的5G商用网络提供设备。而在爱立信官网展示的45个可公示的商用5G合同中，已经包括了来自中国的三大运营商之一的中国移动。 在上周爱立信发布2020年第一季度业绩报告时，爱立信总裁兼首席执行官鲍毅康（Borje Ekholm）表示：“考虑到战略合同的份额不断增加，其中包括中国的5G建设项目，我们预计这些合同中的较大份额将在第二季度影响盈利能力，而不是在全年平均分配。作为我们技术领先地位的进一步证明，爱立信从中国的一家运营商那里获得了更大的市场份额。而在中国部署5G的全部价值和对公司利润的影响，将在所有运营商做出市场份额决定后进行评估。” 截至目前，爱立信携手全球众多领先的运营商实现4大洲5G商用首发；自2015年以来，爱立信已发货超过500万5G就绪的射频单元。（ C114中国通信网）",
            "\u3000\u3000据德媒报道，德国最大通信运营商德国电信希望加强同华为的合作关系。德国电信董事会成员兼德国公司总经理迪尔克·韦斯纳当地时间2日表示，如果想要实现今年年底前新建两千座LTE基站的目标，就需要华为的参与。他强调，若排除华为，则德国电信无法快速解决5G信号覆盖问题。 综合德媒报道，德国联邦网络管理局顾问委员会召集德国电信、沃达丰、西班牙电信Telefonica等德国境内最大的几家通信运营商于本月4日举行一次“移动峰会”，讨论5G相关议题。在此之前，德国《商报》报道称，德国电信已经知会德国联邦内政部，表明其希望加强同华为的合作关系。 在2日出版的《法兰克福汇报》专访中，迪尔克·韦斯纳表示，在建设5G基站的过程中，德国电信与多家供应商建立合作，但要想实现今年年底前新建约两千座LTE基站的目标，“我们也需要华为”。 迪尔克·韦斯纳具体指出，由于各家5G供应商的技术目前尚不能兼容，因此“如果在一个区域安装了华为的天线，那么爱立信设备就无法在此通用，反之亦然”。他强调，倘若排除华为，“我们将无法快速地消除5G信号盲区”。 德国《商报》指出，德国电信主要竞争对手沃达丰和西班牙电信此前已明确表示，将在5G网络后续建设中继续采用华为设备。<br>\u3000\u3000“所有人都必须清楚的是，时间正在耗尽。”迪尔克·韦斯纳表示，其竞争对手正在全力以赴建设5G网络，“中国供应商也参与到了其中”。",
            "\u3000\u3000韩国科学与信息通信技术部日前发布了韩国5G报告，截至4月2日韩国5G用户总数达到了577万，仅次于中国，但韩国5G普及率达到了9.67%，是中国的14倍。韩国在去年4月份全球首发5G，商业运营的速度一直比较迅速，去年底就实现了500万5G用户，目前最新数据是577万，全国5G基站11.5万个，这两个数据都仅次于中国。作为对比，据工信部最新披露的数据，截至3月底，全国已建成5G基站19.8万个，套餐用户规模超过5000万。不过在5G普及率上，韩国是遥遥领先其他国家，现在已经有9.67%的渗透率，而中国的5G渗透率为0.69%，澳大利亚为1.3%，美国也只有0.63%，英国为0.56%。按照韩国媒体的话来说，韩国的5G取得如此成就跟运营商大力投资有关，2019年韩国三大运营商的资本开支达到了8.08万亿韩元，同比增长了60%，约合469亿人民币。2020上半年中，韩国运营商将进一步提升5G投资，资本支出从预订的2.7万亿增加到4万亿韩元，增长超过50%。此外，韩国运营商还将进一步提升5G网络覆盖，上半年内将新增2000多个室内5G基站，覆盖地铁、机场、百货商店等人群密集区域。",
        ]
    },
    methods:{        
        backIndex(){
            window.location.href="index.html";
        },
        onSubmit(){
            window.location.href="news.html";
        }
    }
})
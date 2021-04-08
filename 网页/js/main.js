var app=new Vue({
    el: '#app',
    data:{
        activeIndex:1,
        //"./img/view-min.jpg","./img/sea-min.jpg","./img/sky-min.jpg","./img/school-min.jpg"
        mainImg:["../img/5G洞察员3-min.png","../img/5G5-min.png","../img/5GUse-min.png","../img/5G6-min.png"],
        weixin:["https://mp.weixin.qq.com/s/bpg2Rrrd3XrVMiFtmKT5WQ","https://mp.weixin.qq.com/s?__biz=MzU1NTczMDc4NA==&mid=2247483725&idx=1&sn=a540295a19e23fadc963a952d6e1e943&chksm=fbce9342ccb91a5441b82dbc966e7167dbe15f84d658688e9c9f217623fb2b62c442f9b6eb71&scene=132#wechat_redirect","https://mp.weixin.qq.com/s/QwNJFVMkaoquoycGMa4nKg","https://mp.weixin.qq.com/s/AHP5aBtqPjt_HlArWnU4hg",],
        imgNumber:4,
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        scroll:'',
        isShow1:false,
        isShow2:false,
        isShow3:false,
        isShow4:false,
        isShow5:false,
    },
    methods: {
        menu() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.scroll);
            //body.offsetHeight ：body总高度。
            //body.offsetWidth ：body总宽度。
            console.log('高度：'+document.body.offsetHeight);
            console.log('宽度'+document.body.offsetWidth);
            this.isShow1=false;
            this.isShow2=false;
            this.isShow3=false;
            this.isShow4=false;
            this.isShow5=false;

            if(this.scroll>200)
                this.isShow1=true;
            if(this.scroll>1000)
                this.isShow2=true;
            if(this.scroll>1500)
                this.isShow3=true;
            if(this.scroll>2000)
                this.isShow4=true;
            if(this.scroll>2600)
                this.isShow5=true;
        },
        login(){
            window.location.href="login.html";
        },
        register(){
            window.location.href="register.html";
        },
      },
    mounted() {
        window.addEventListener('scroll', this.menu)
    },
})

var vedios=new Vue({
    el:"#vedios",
    data:{
        sum:4,
        count: 1,
        pos:25,
        scroll:'',
        vediosUrl:["./img/5G，从流量到价值.mp4","./img/周鸿祎：5G时代的安全挑战与应对.mp4","./img/5G，从流量到价值.mp4","./img/周鸿祎：5G时代的安全挑战与应对.mp4"]
    },
    methods:{
        onSubmit:function(){
            window.location.href="index.html";
        },
        load() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.scroll);
            if(this.scroll>this.pos&&this.count<this.sum)
            {
                this.count++;
                this.pos+=500;
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.load)
    },
})
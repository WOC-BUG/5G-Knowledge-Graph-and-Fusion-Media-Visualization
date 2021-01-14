var app=new Vue({
    el: '#app',
    data:{
        activeIndex:1,
        mainImg:["./img/view.jpg","./img/sea.jpg","./img/sky.jpg","./img/school.jpg"],
        imgNumber:4,
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        scroll:'',
        isShowImg:false,
        isShowVedio:false,
    },
    methods: {
        menu() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.scroll);
            this.isShowImg=false;
            this.isShowVedio=false;

            if(this.scroll>100)
                this.isShowImg=true;
            if(this.scroll>700)
                this.isShowVedio=true;
        }
      },
    mounted() {
        window.addEventListener('scroll', this.menu)
    },
})

var app=new Vue({
    el: '#app',
    data:{
        activeIndex:1,
        mainImg:["./img/view.jpg","./img/sea.jpg","./img/sky.jpg","./img/school.jpg"],
        imgNumber:4,
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        scroll:'',
        isShow1:false,
        isShow2:false,
        isShow3:false
    },
    methods: {
        menu() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.scroll);
            this.isShow1=false;
            this.isShow2=false;
            this.isShow3=false;

            if(this.scroll>100)
                this.isShow1=true;
            if(this.scroll>700)
                this.isShow2=true;
            if(this.scroll>1300)
                this.isShow3=true;
        }
      },
    mounted() {
        window.addEventListener('scroll', this.menu)
    },
})

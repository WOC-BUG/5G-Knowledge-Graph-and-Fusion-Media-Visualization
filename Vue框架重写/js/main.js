var app=new Vue({
    el: '#app',
    data:{
        activeIndex:1,
        //"./img/view.jpg","./img/sea.jpg","./img/sky.jpg","./img/school.jpg"
        mainImg:["./img/5G2.jpg","./img/5G3.jpg","./img/5G4.jpg","./img/5G5.jpg","./img/5G6.jpg"],
        imgNumber:5,
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        scroll:'',
        isShow1:false,
        isShow2:false,
        isShow3:false,
        isShow4:false,
    },
    methods: {
        menu() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.scroll);
            this.isShow1=false;
            this.isShow2=false;
            this.isShow3=false;
            this.isShow4=false;

            if(this.scroll>100)
                this.isShow1=true;
            if(this.scroll>700)
                this.isShow2=true;
            if(this.scroll>1200)
                this.isShow3=true;
            if(this.scroll>1800)
                this.isShow4=true;
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

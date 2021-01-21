var vedios=new Vue({
    el:"#vedios",
    data:{
        sum:19,
        count: 1,
        pos:5,
        scroll:'',
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        cloudUrl:["./img/P2.jpg","./img/B.jpg","./img/C.jpg","./img/D.jpg","./img/E.jpg","./img/F.jpg","./img/G.jpg","./img/H.jpg","./img/I.jpg","./img/I2.jpg","./img/J.jpg","./img/K.jpg","./img/L.jpg","./img/M.jpg","./img/N.jpg","./img/O.jpg","./img/O2.jpg","./img/P.jpg","./img/A.jpg"],
        pdfUrl:["./pdf/P2.pdf","./pdf/B.pdf","./pdf/C.pdf","./pdf/D.pdf","./pdf/E.pdf","./pdf/F.pdf","./pdf/G.pdf","./pdf/H.pdf","./pdf/I.pdf","./pdf/I2.pdf","./pdf/J.pdf","./pdf/K.pdf","./pdf/L.pdf","./pdf/M.pdf","./pdf/N.pdf","./pdf/O.pdf","./pdf/O2.pdf","./pdf/P.pdf","./pdf/A.pdf"],
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
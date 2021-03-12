var vedios=new Vue({
    el:"#vedios",
    data:{
        sum:19,
        count: 1,
        pos:5,
        scroll:'',
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        cloudUrl:["../img/P2-min.jpg","../img/B-min.jpg","../img/C-min.jpg","../img/D-min.jpg","../img/E-min.jpg","../img/F-min.jpg","../img/G-min.jpg","../img/H-min.jpg","../img/I-min.jpg","../img/I2-min.jpg","../img/J-min.jpg","../img/K-min.jpg","../img/L-min.jpg","../img/M-min.jpg","../img/N-min.jpg","../img/O-min.jpg","../img/O2-min.jpg","../img/P-min.jpg","../img/A-min.jpg"],
        pdfUrl:["../pdf/P2.pdf","../pdf/B.pdf","../pdf/C.pdf","../pdf/D.pdf","../pdf/E.pdf","../pdf/F.pdf","../pdf/G.pdf","../pdf/H.pdf","../pdf/I.pdf","../pdf/I2.pdf","../pdf/J.pdf","../pdf/K.pdf","../pdf/L.pdf","../pdf/M.pdf","../pdf/N.pdf","../pdf/O.pdf","../pdf/O2.pdf","../pdf/P.pdf","../pdf/A.pdf"],
        title:["5G广播技术方案","THE NEXT-GENERATION PROTOCOL STACK","INTEGRATION OF SENSING, COMMUNICATION AND COMPUTING TOWARD 6G","WIRELESS TECHNOLOGY TRENDS TOWARDS 6G","6G新天线技术","PRELIMINARY STUDY OF ADVANCED TECHNOLOGIES TOWARDS 6G ERA: QITS 2020","6G SERVICES AND REQUIREMENTS","空天地一体化通信系统","KEY TECHNOLOGIES OF 6G WBAN","ICDT INTEGRATED 6G NETWORK","面向云网融合服务的6G网络技术","以终端为中心的5G安全体系","5G毫米波技术","5G V2X应用场景第二阶段","NR V2X关键技术","5G广播技术应用","USE CASES OF 5G BROADCAST TECHNOLOGY","5G BROADCAST SOLUTION","DATA DRIVEN AND INTENT AWARE SMART WIRELESS NETWORK"]
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
                this.pos+=600;
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.load)
    },
})
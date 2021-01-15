var register=new Vue({
    el:"#register",
    data:{
        username:"",
        password:"",
        password2:"",
        email:"",
    },
    methods:{
        checkSubmit:function(){
            if(this.username==""||this.password==""||this.password2==""||this.email=="")
                alert("用户名/密码不能为空！");
            else if(this.password!=this.password2)
                alert("密码验证失败！");
            else                
                window.location.href="index.html";
        },
    }
})
var register=new Vue({
    el:"#form1",
    data:{
        username:"",
        password:"",
        password2:"",
        email:"",
    },
    methods:{
        onSubmit:function(){
            if(this.username=""||this.password==""||this.password2==""){
                alert("用户名/密码不能为空！");
            }
            else if(this.password!=this.password2)
                alert("密码输入错误！");
            else if(this.email=="")
                alert("邮箱不能为空！");
            else
                window.location.href="index.html";
        },
        clearForm:function(){
            this.username="";
            this.password="";
            this.password2="";
            this.email="";
        }
    }
})
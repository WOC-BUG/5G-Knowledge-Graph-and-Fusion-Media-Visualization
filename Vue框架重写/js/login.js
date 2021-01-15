var login=new Vue({
    el:"#login",
    data:{
        username:"",
        password:"",
    },
    methods:{
        onSubmit:function(){
            // alert(this.username);
            // alert(this.password);
            if(this.username=""||this.password==""){
                alert("用户名/密码不能为空！");
            }
            else
                window.location.href="index.html";
        }
    }
})
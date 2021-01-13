function checkup() {
    var pass1=document.getElementById("password1");
    var pass2=document.getElementById("password2");
    if(pass1.value=="")
    {
        // document.getElementById("tip").innerText="请输入密码";
        pass1.setCustomValidity("请输入密码");
    }
    else
    {
        pass1.setCustomValidity("");
        if(pass1.value!=pass2.value)
            //document.getElementById("tip").innerText="两次密码一致";
            pass2.setCustomValidity("密码不一致");
        else
        {
            pass2.setCustomValidity("");
            //setCustomValidity函数是表单中的，只有表单验证通过后才会触发，所以页面才会一起跳转
            if(window.confirm("确定要提交吗？"))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
function checkup2()
{
    if(window.confirm("确定要全部重设吗？"))
    {
        return true;
    }
    else
    {
        return false;
    }
}
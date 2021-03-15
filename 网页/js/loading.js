// 添加事件  
document.onreadystatechange = StateChangeFun;  
  
// 页面状态发生改变时调用的函数  
function StateChangeFun(){  
    if(document.readyState == "complete"){  
        document.forms[0].onsubmite = FormSubmitFun;  
        document.body.onresize = ReSetSizeFun;  
  
        loadingDiv.style.display = "none";  
          
    }else  
    {  
        ReSetSizeFun();  
    loadingDiv.style.display = "";  
  }  
}  
// 表单提交时调用  
function FormSubmitFun(){  
    ReSetSizeFun();  
    loadingDiv.style.display = "";  
 }  
 // 页面大小时调用  
function ReSetSizeFun(){  
    loadingDiv.style.top= document.documentElement.scrollTop + "px";  
    loadingDiv.style.left= document.documentElement.scrollLeft + "px";  
}
window.onload=function(){
    var Div  =  document.getElementById('div1');        //返回 ID 为div1的第一个对象的引用
    var Ul = document.getElementsByTagName('Ul')[0];
    var Li = Ul.getElementsByTagName('li');             //获取 Ul下的所有li
    Ul.innerHTML = Ul.innerHTML+Ul.innerHTML;           //Ul标签内的代码，变成两份接在一起
    Ul.style.width = Li[0].offsetWidth*Li.length+'px';  //Ul的宽度等于每个li的宽度乘以所有li的长度，+px表示单位为px
    var speed = 2;
    
    //主方法
    function move(){
        //如果左边横向滚动了长度一半之后,回到初始位置
        
        if(Ul.offsetLeft<-Ul.offsetWidth/speed){
            Ul.style.left = '0';
        }
        //如果右边横向滚动的距离大于0 就让他的位置回到一半
        if(Ul.offsetLeft>0){
            Ul.style.left = -Ul.offsetWidth/speed+'px';
        }
        //Ul.style.left = Ul.offsetLeft-2+'px';//进行左横向滚动
        Ul.style.left = Ul.offsetLeft+speed+'px';//进行右横向滚动
    }
    
    //调用方法
    var timer = setInterval(move,30)
    //鼠标指向的时候 暂停
    Div.onmouseover=function(){
        clearInterval(timer);
    }

    //鼠标离开之后 继续滚动
    Div.onmouseout=function(){
            timer = setInterval(move,30)
    }
}

function high(ImgControl){ 
    theobject=ImgControl;
    highlighting=setInterval("highlightit(theobject);",50);
} 
function low(ImgControl){ 
    clearInterval(highlighting);
    ImgControl.filters.alpha.opacity=40;
} 
function highlightit(ImgControl){ 
    if (ImgControl.filters.alpha.opacity<100) 
        ImgControl.filters.alpha.opacity+=10;
    else if (window.highlighting) 
        clearInterval(highlighting);
} 
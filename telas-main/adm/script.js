var button= document.getElementById("br");
var container10 =document.getElementById("container10");
var container11 =document.getElementById("container11");
var container12 =document.getElementById("container12");
var container13 =document.getElementById("container13");

button.addEventListener("click",function(){
    if(container10.style.display === "none") {
        container10.style.display = "block";
        container11.style.display = "none";
        container12.style.display = "none";
        container13.style.display = "none";
    } else{
        container10.style.display ="none";
    }
});

var button= document.getElementById("bb");

button.addEventListener("click",function(){
    if(container11.style.display === "none") {
        container11.style.display = "block";
        container10.style.display = "none";
        container12.style.display = "none";
        container13.style.display = "none";
    } else{
        container11.style.display ="none";
    }
});

var button= document.getElementById("bc");

button.addEventListener("click",function(){
    if(container12.style.display === "none") {
        container12.style.display = "block";
        container10.style.display = "none";
        container11.style.display = "none";
        container13.style.display = "none";
    } else{
        container12.style.display ="none";
    }
});

var button= document.getElementById("bf");

button.addEventListener("click",function(){
    if(container13.style.display === "none") {
        container13.style.display = "block";
        container10.style.display = "none";
        container11.style.display = "none";
        container12.style.display = "none";
    } else{
        container13.style.display ="none";
    }
});



//began...
var menu = document.getElementById("menu");
var close = document.getElementById("close");
var box = document.getElementById("box");
var body = document.body ;
menu.onclick = function(){
    body.style.overflowY= "hidden";
    box.classList.remove("reset") ;
    box.classList.add("act") ;
}
close.onclick = function(){
    body.style.overflowY= "scroll";
    box.classList.remove("act") ;
    box.classList.add("reset") ;
}
const $ = {
    start: document.createElement("button"),
    stop: document.createElement("button"),
    reset: document.createElement("button"),
    sec: document.createElement("span"),
    min: document.createElement("span"),
    hours: document.createElement("span"),
    colon1: document.createElement("span"),
    colon2: document.createElement("span"),
    main: document.createElementById("main")
}
const Timer = {
    s:0, 
    m:0,
    h:0,
    timer:null,
    start: function(){
        $.start.removeEventListener("click", Timer.start);
        $.stop.addEventListener("click", Timer.stop);
        $.reset.addEventListener("click", Timer.reset);
        console.log("Started");
    },
    stop: function() {
        clearInterval(Timer.int);
        $.start.addEventListener("click", Timer.start);
        console.log("Stopped");
    },
    reset: function(){
        $.reset.addEventListener("click", Timer.start)
        $.start.addEventListener("click", Timer.start)
        clearInterval(Timer.int)
        Timer.s = 0;
        Timer.m = 0;
        Timer.h = 0;
        $.hours.innerText = "00";
        $.min.innerText = "00";
        $.sec.innerText = "00";
        console.log("Reset");
    }
}
function init(){
    $.main.append($.start, $.stop, $.reset, $.hours, $.colon1, $.min, $colon2, $.sec)
    $.start.innerText = "Start";
    $.reset.innerText = "Start";
    $.colon1.innerText = ":";
    $.colon2.innerText = ":";
    
}



var btn1 = document.createElement("button");
btn1.innerText = "Start";
var btn2 = document.createElement("button");
btn2.innerText = "Stop";
var btn3 = document.createElement("button");
btn3.innerText = "Reset";

var t = null;

document.getElementById("main").append(btn1, btn2, btn3);


var i = 0;

btn1.addEventListener("click", function(){
    t = setInterval(function(){
        console.log(i)
        i++
    }, 1000)
})

btn2.addEventListener("click", function(){
    clearInterval(t);
})

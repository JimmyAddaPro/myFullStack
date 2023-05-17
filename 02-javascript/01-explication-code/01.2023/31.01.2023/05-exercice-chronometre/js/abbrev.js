const $ = {
      start:document.createElement("button"),
      stop:document.createElement("button"),
      reset:document.createElement("button"),
      sec:document.createElement("span"),
      min:document.createElement("span"),
      hours:document.createElement("span"),
      colon1:document.createElement("span"),
      colon2:document.createElement("span"),
      zoneA:document.createElement("div"),
      zoneB:document.createElement("div"),
      main:document.getElementById("main"),
    }
    const Timer = {
      s: 0,
      m: 0,
      h: 0,
      int: null,
      start: function(){
        theLogic();
        $.start.removeEventListener("click", Timer.start);
        $.stop.addEventListener("click", Timer.stop);
        $.reset.addEventListener("click", Timer.reset);
        console.log("Started");
        
      },
      stop: function(){
        clearInterval(Timer.int);
        $.stop.removeEventListener("click", Timer.stop);
        $.start.removeEventListener("click", Timer.start);
        $.start.addEventListener("click", Timer.start);
        console.log("Stopped");
      },
      reset: function(){
        $.start.addEventListener("click", Timer.start);
        clearInterval(Timer.int);
        Timer.s = 0;
        Timer.m = 0;
        Timer.h = 0;
        $.hours.innerText = "00";
        $.min.innerText = "00";
        $.sec.innerText = "00";
        $.reset.removeEventListener("click", Timer.reset);
        console.log("Reset");
      }  
    }
    function init(){
      $.zoneA.append($.hours, $.colon1, $.min, $.colon2, $.sec);
      $.zoneB.append($.start, $.stop, $.reset);
      $.main.append($.zoneA, $.zoneB);
      $.start.innerText = "Start"; 
      $.start.className = "start"; 
      $.stop.innerText = "Stop"; 
      $.stop.className = "stop"; 
      $.reset.innerText = "Reset"; 
      $.reset.className = "reset"; 
      $.hours.className = "hours"; 
      $.min.className = "min"; 
      $.sec.className = "sec"; 
      $.colon1.innerText = ":"; 
      $.colon1.className = "colon1";
      $.colon2.innerText = ":"; 
      $.colon2.className = "colon2";
      $.zoneA.id = "zoneA";
      $.zoneB.id = "zoneB";
      Timer.reset();
    }
    // Reprendre theLogic() pour que cela fonctionne
    function theLogic(){
      Timer.int = setInterval(function(){
        Timer.s ++;
        // $.sec.innerText = Timer.s < 10 ? "0" + Timer.s : Timer.s; 
        if(Timer.s < 10){
            $.sec.innerText = "0" + Timer.s;
        }else if(Timer.s == 60){
            $.sec.innerText = "00";
            Timer.s = 0;
            Timer.m ++;
            //$.min.innerText = Timer.m < 10 ? "0" + Timer.m : Timer.m;
            if(Timer.m < 10){
                $.min.innerText = "0" + Timer.m;
            }
            else if(Timer.m == 60){
                $.min.innerText = "00";
                Timer.m = 0;
                Timer.h ++;
            //   $.hours.innerText = Timer.h < 10 ? "0" + Timer.h : Timer.h;
              if(Timer.h < 10){
                $.hours.innerText = "0" + Timer.h;
              }
              else if(Timer.h == 60){
                $.hours.innerText = "00";
              }
              else{
                $.hours.innerText = Timer.h;
              }
            }
            else{
                $.min.innerText = Timer.m;
            }
        }else{
            $.sec.innerText = Timer.s;
        }
      }, 1000);
    }
    init();
    
function showtime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds(); 
    var d = date.getMilliseconds();

    var session="AM";
    if(h==0){
        h=12;
    }
     if(h>12){
        session="PM";
     }

     h=(h<10)? "0" + h:h;
     m=(m<10)? "0" + m:m;
     s=(s<10)? "0" + s:s;
     d=(d<10)? "0" + d:d;

     var time = h + ":" + m + ":" + s + ":" + d + " " + session;

     document.getElementById("MyClockDisplay").innerHtml = time;
     document.getElementById("MyClockDisplay").textContent= time;
         
    }

showtime();
setInterval(showtime,1000);



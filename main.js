let time,hours,min,sec,date,sun;
let h=document.querySelector(".hours");
let m=document.querySelector(".minutes");
let s=document.querySelector(".seconds");
let am =document.querySelector(".am");
let day=document.querySelector(".day");
let month=document.querySelector(".month");
let year=document.querySelector(".years");
let dayname=document.querySelector(".sunday");

time = new Date();
day.innerText=time.getDate();
month.innerText=time.getMonth()+1;
year.innerText=time.getFullYear();
setInterval(() => {
        time = new Date();
        hours=time.getHours();
        min=time.getMinutes();
        sec=time.getSeconds();
        h.innerText=`${hours}`;
        if(hours>12){
                am.innerText="PM";
        }else{
                am.innerText="AM";
        }
        m.innerText=`${min}`;
        s.innerText=`${sec}`;
        if(hours<10){h.innerText=`0${hours}`};
}, 1);
sun=time.getDay();
switch (sun) {
        case 0:
                dayname.innerText="Saturday";
                break;
        case 1:
                dayname.innerText="Sunday";
                break;        
        case 2:
                dayname.innerText="Monday";
                break;
        case 3:
                dayname.innerText="Tuesday";
                break;
        case 4:
                dayname.innerText="Wnesday";
                break;
        case 5:
                dayname.innerText="thursday";
                break;
        case 6:
                dayname.innerText="Friday";
                break;
        default:
        break;
}

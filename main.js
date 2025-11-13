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
console.log(sun);
console.log(sun)
switch (sun) {
        case 6:
                dayname.innerText="Saturday";
                break;
        case 0:
                dayname.innerText="Sunday";
                break;        
        case 1:
                dayname.innerText="Monday";
                break;
        case 2:
                dayname.innerText="Tuesday";
                break;
        case 3:
                dayname.innerText="Wnesday";
                break;
        case 4:
                dayname.innerText="thursday";
                break;
        case 5:
                dayname.innerText="Friday";
                break;
        default:
        break;
}

let btn =document.getElementById("btn");
let body =document.body;
let todark =document.querySelector(".button");


btn.addEventListener("click",()=>{
        if(body.classList.contains("light")){
                body.classList.replace("light","dark");
                btn.innerText="Switch To LightMode";
        }else{
                body.classList.replace("dark","light");
                btn.innerText="Switch To Darkmode";
        }
});
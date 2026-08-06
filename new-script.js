const CONFIG={
 countdown:15,
 returnUrl:'https://us1.teamdynamix.com/tdapp/app/form/start?c=ZjA3N2U5YzctMDcwOS00NWMxLThkNTAtYmRhYTY3ZGY2ZjMw&t=U1RQVlB3PT1OVFlSWFR5cFFXVDByeG1NVWNqeVBjRFpqNTQxMzQ0L3BYU0czTkhjVWNEUkpER1VzQUlKYk8ydFltaDVkN3hvcXBTcEgzaDNtajZJMisrQjlVMkoyckhQR0RPYmpOY1d4ZlB3QlVqK3ZQdTNTRlJsVFdacWgwZHQwYXltbHZ3OHlSZ1IraHVGZHdZcjRKN3BGa245dUE9PQ',
 fadeMs:400
};
let t=CONFIG.countdown;
const el=document.getElementById('countdown');
function go(){
 document.querySelector('.vuit-card').classList.add('fade-out');
 setTimeout(()=>location.href=CONFIG.returnUrl,CONFIG.fadeMs);
}
document.getElementById('returnBtn').addEventListener('click',go);
const timer=setInterval(()=>{
 t--;
 el.textContent=t;
 if(t<=0){clearInterval(timer);go();}
},1000);

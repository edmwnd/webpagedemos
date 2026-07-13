const CONFIG={
 countdown:15,
 returnUrl:'https://us1.teamdynamix.com/tdapp/app/form/start?c=ZjA3N2U5YzctMDcwOS00NWMxLThkNTAtYmRhYTY3ZGY2ZjMw&t=U1RQVlB3PT13VHRvYlluQUdpVmcxZHJyZjFOWTVIRHNGRnV6QXFzaldDOGc3NUE1bUdtdVRhNWFrVEJ4dFdGbGdqcWFCcWJ6U0RwdGZ1b3VDY1g1YnlUS1VlRzNTRTQzZGVmbU1JbE9pTlhZU0thQm0vVE9BU2hRbS9qa1VxMUVLblJ4QWxac2NYQmdEN05sTWUzRzZtSFVxZVNJZVE9PQ',
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

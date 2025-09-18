const circle = document.querySelector('.circle');
const label  = document.getElementById('inex');
const start  = document.getElementById('start');
const endBtn = document.getElementById('end');
const timer  = document.getElementById('time');
const timerstart = document.getElementById('startp');
const timerend = document.getElementById('endp');
const sounds = document.getElementById('Sounds');

function startfunc(){
  label.innerHTML = 'Inhale...';
  circle.style.transition = 'none';
  circle.style.transform = 'scale(1)';
  void circle.offsetWidth;

  circle.style.transition = 'transform 3s linear';
  circle.style.transform  = 'scale(1.4)';
  setTimeout(shrink, 4000);
}
function endfunc() {
  circle.style.transition = 'none';
  circle.style.transform  = 'scale(1)';
  label.textContent = '';
}
function shrink(){
  circle.style.transition = 'transform 3s linear';
  circle.style.transform  = 'scale(1)';
  label.innerHTML = 'Exhale...';
}
let state = false;
let soundtrack = document.getElementById('ambient');
function playsound() {
    
    if (state==false) {
        state=true;
        sounds.innerText = 'Stop Ambient Sounds';
        soundtrack.play();
    } 
    else if(state==true) {
        state=false;
        sounds.innerText = 'Play Ambient Sounds';
        soundtrack.pause();
    }
    
}

let totaltime = 30;
let timerHandle; 

function startTimer(t = totaltime){
  timer.innerText = t;
  if (t <= 0) return; 
  clearTimeout(timerHandle);
  timerHandle = setTimeout(() => startTimer(t - 1), 1000);
}

// events
start.addEventListener('click', startfunc);
endBtn.addEventListener('click', endfunc);
timerstart.addEventListener('click', () => startTimer()); 
timerend.addEventListener('click', () => clearTimeout(timerHandle));

sounds.addEventListener('click',playsound);
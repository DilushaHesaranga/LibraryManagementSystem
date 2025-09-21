const circle = document.querySelector('.circle');
const label  = document.getElementById('inex');
const start  = document.getElementById('start');
const endBtn = document.getElementById('end');
const timer  = document.getElementById('time');
const timerstart = document.getElementById('startp');
const timerend = document.getElementById('endp');
const sounds = document.getElementById('Sounds');

const DUR = 4000; 
let t, running = false, phase = 0;

function step() {
  if (!running) return;

  if (phase === 0) {
    label.textContent = 'Inhale...';
    circle.style.transition = `transform ${DUR/1000}s linear`;
    circle.style.transform  = 'scale(1.4)';
  } else if (phase === 1) { 
    label.textContent = 'Hold...';
    circle.style.transition = 'none';
  } else if (phase === 2) { 
    label.textContent = 'Exhale...';
    circle.style.transition = `transform ${DUR/1000}s linear`;
    circle.style.transform  = 'scale(1)';
  } else { 
    label.textContent = 'Hold...';
    circle.style.transition = 'none';
  }

  t = setTimeout(() => { phase = (phase + 1) % 4; step(); }, DUR);
}

function startfunc() {
  if (running) return;
  running = true;
  phase = 0;
  circle.style.transition = 'none';
  circle.style.transform  = 'scale(1)';
  step();
}

function endfunc() {
  running = false;
  clearTimeout(t);
  label.textContent = '';
  circle.style.transition = 'none';
  circle.style.transform  = 'scale(1)';
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
let completedSessions = parseInt(localStorage.getItem("completedSessions")) || 0;
let sessioncount = document.getElementById("sessionCount");

function startTimer(t = totaltime) {
  timer.innerText = t;

  if (t <= 0) {
    completedSessions++;
    localStorage.setItem("completedSessions", completedSessions);
    sessioncount.innerHTML = completedSessions;
    return;
  }

  clearTimeout(timerHandle);
  timerHandle = setTimeout(() => startTimer(t - 1), 1000);
  sessioncount.innerHTML = completedSessions;
}


start.addEventListener('click', startfunc);
endBtn.addEventListener('click', endfunc);
timerstart.addEventListener('click', () => startTimer()); 
timerend.addEventListener('click', () => clearTimeout(timerHandle));
sounds.addEventListener('click',playsound);
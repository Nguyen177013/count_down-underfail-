let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');
let hh_m = document.getElementById('hh-m');
let mm_m = document.getElementById('mm-m');
let ss_m = document.getElementById('ss-m');
let audio = document.getElementById('audio');
let day_end = '1/1/2023 00:00:00';
let time = document.getElementById('time');
let title = document.querySelector('#title h2');
const fireworkContainer = document.querySelector('body');
const fireworks = new Fireworks(fireworkContainer, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
})
audio.src = "music/Mogolovonio.mp3"
function countdown () {
    let responsive = window.matchMedia("(max-width: 700px)")
    let now = new Date(day_end).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;
    // let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor(distance % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));
    let s = Math.floor(distance % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / (1000));
   
   //to start counting
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    //to move strokDash
    if(h<=0 && m<=0 &&s <=32){
        time.style.display = "none";
        title.innerHTML = "happy new year 2023"
        if(audio.paused){
            audio.play();
            audio.currentTime = 32 - s;
        }
        audio.volume = .5;
    }
    if(responsive.matches){
        hh_m.style.strokeDashoffset = 314 - (314 * h) / 24;
        mm_m.style.strokeDashoffset = 314 - (314 * m) / 60;
        ss_m.style.strokeDashoffset = 314 - (314 * s) / 60;
        return;   
    }
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    if(distance<=0){
        fireworks.start();
        clearInterval(countInterval);
    }
}
let countInterval =setInterval(countdown, 1000);


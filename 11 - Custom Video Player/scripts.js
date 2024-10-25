// Get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");//the actual video element
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const ranges  = player.querySelectorAll(".player__slider");

//Build out functions
function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();  
    }
}

function updateBtn(){
    const icon = this.paused ?'►' : '❚ ❚';
    toggle.textContent = icon;    
}
function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate(){
   video[`${this.name}`] = this.value; 
}

// Hook up the event listener
video.addEventListener("click",togglePlay);
video.addEventListener("play",updateBtn);
video.addEventListener("pause",updateBtn);
toggle.addEventListener("click", togglePlay);
skipBtns.forEach(function(skiper){
    skiper.addEventListener("click",skip)
})
ranges.forEach(range =>{
    range.addEventListener("change", handleRangeUpdate)
    range.addEventListener("mousemove", handleRangeUpdate)
})
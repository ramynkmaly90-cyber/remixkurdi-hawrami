const songs = [
{
title:"Rahmat Azari - Gorani Hawrami Remix",
src:"music/Peshraw-Karim-Naska-Galawizh.mp3"
},
{
title:"Peshraw Karim - Naska Galawizh",
src:"music/Peshraw Karim Naska Galawizh.mp3"
}
];

const audio=document.getElementById("audio");
const title=document.getElementById("player-title");

const playBtn=document.getElementById("play");
const nextBtn=document.getElementById("next");
const prevBtn=document.getElementById("prev");

const progress=document.getElementById("progress");

const playButtons=document.querySelectorAll(".play-song");

let current=0;

function loadSong(index){

current=index;

audio.src=songs[current].src;

title.innerText=songs[current].title;

progress.value=0;

}

loadSong(0);

playButtons.forEach((btn,index)=>{

btn.addEventListener("click",()=>{

loadSong(index);

audio.play();

playBtn.innerHTML="⏸";

});

});

playBtn.addEventListener("click",()=>{

if(audio.paused){

audio.play();

playBtn.innerHTML="⏸";

}else{

audio.pause();

playBtn.innerHTML="▶";

}

});

nextBtn.addEventListener("click",()=>{

current++;

if(current>=songs.length){

current=0;

}

loadSong(current);

audio.play();

playBtn.innerHTML="⏸";

});

prevBtn.addEventListener("click",()=>{

current--;

if(current<0){

current=songs.length-1;

}

loadSong(current);

audio.play();

playBtn.innerHTML="⏸";

});

audio.addEventListener("timeupdate",()=>{

if(audio.duration){

progress.value=(audio.currentTime/audio.duration)*100;

}

});

progress.addEventListener("input",()=>{

if(audio.duration){

audio.currentTime=(progress.value/100)*audio.duration;

}

});

audio.addEventListener("ended",()=>{

nextBtn.click();

});

const player = {
    cover: document.getElementById("player-cover"),
    title: document.getElementById("player-title"),
    artist: document.getElementById("player-artist"),
    audio: document.getElementById("main-player"),
    play: document.getElementById("play-btn"),
    prev: document.getElementById("prev-btn"),
    next: document.getElementById("next-btn")
};

let currentSong = 0;

function loadPlayer(song){

    player.cover.src = song.cover;
    player.title.textContent = song.title;
    player.artist.textContent = song.artist;
    player.audio.src = song.audio;

}

function playSong(){

    player.audio.play();

    player.play.innerHTML = "⏸";

}

function pauseSong(){

    player.audio.pause();

    player.play.innerHTML = "▶";

}

player.play.addEventListener("click",()=>{

    if(player.audio.paused){

        playSong();

    }else{

        pauseSong();

    }

});

player.audio.addEventListener("ended",()=>{

    currentSong++;

    if(currentSong>=songs.length){

        currentSong=0;

    }

    loadPlayer(songs[currentSong]);

    playSong();

});

window.addEventListener("load",()=>{

    if(typeof songs!=="undefined"){

        loadPlayer(songs[0]);

    }

});
function playFromCard(id){

    const song = songs.find(item => item.id == id);

    if(!song) return;

    currentSong = songs.findIndex(item => item.id == id);

    loadPlayer(song);

    playSong();

}

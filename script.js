const songs = [
    {
        title: "Rahmat Azari Gorani Hawrami Remix",
        file: "music/Rahmat Azari Gorani Hawrami Remix.mp3"
    },
    {
        title: "Peshraw Karim Naska Galawizh",
        file: "music/Peshraw Karim Naska Galawizh.mp3"
    }
];


let currentSong = 0;

const audio = document.getElementById("audio-player");
const title = document.getElementById("song-title");
const button = document.getElementById("play-btn");


function loadSong() {

    audio.src = songs[currentSong].file;
    title.innerHTML = songs[currentSong].title;

}


function playPause() {

    if (audio.paused) {

        audio.play();
        button.innerHTML = "⏸";

    } else {

        audio.pause();
        button.innerHTML = "▶";

    }

}


loadSong();

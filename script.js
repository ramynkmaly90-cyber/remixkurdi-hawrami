const songs = [
{
title: "Rahmat Azari - Gorani Hawrami Remix",
artist: "Rahmat Azari",
cover: "covers/cover1.jpg",
audio: "music/Rahmat Azari Gorani Hawrami Remix.mp3"
},
{
title: "Peshraw Karim - Naska Galawizh",
artist: "Peshraw Karim",
cover: "covers/cover2.jpg",
audio: "music/Peshraw-Karim-Naska-Galawizh.mp3"
}
];

const songsContainer = document.getElementById("songs");

songs.forEach(song => {

songsContainer.innerHTML += `
<div class="col-lg-4 col-md-6">

<div class="song-card">

<img src="${song.cover}" class="song-cover">

<h3 class="song-title">${song.title}</h3>

<p class="song-artist">${song.artist}</p>

<audio controls style="width:100%;">
<source src="${song.audio}" type="audio/mpeg">
</audio>

<br><br>

<a href="${song.audio}" download class="btn-download">
⬇ دانلود
</a>

</div>

</div>
`;

});

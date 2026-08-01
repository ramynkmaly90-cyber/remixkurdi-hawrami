// REMIX KURDI HAWRAMI v1.0

const songsContainer = document.getElementById("songs");
const searchInput = document.getElementById("search");
const favoritesList = document.getElementById("favorites-list");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let songs = [];

async function loadSongs() {
    const response = await fetch("songs.json");
    songs = await response.json();

    showSongs(songs);
}

function showSongs(list) {

    songsContainer.innerHTML = "";

    list.forEach(song => {

        songsContainer.innerHTML += `

        <div class="col-lg-4 col-md-6">

            <div class="song-card">

                <img
                src="${song.cover}"
                class="song-cover"
                alt="${song.title}">

                <h3 class="song-title">
                ${song.title}
                </h3>

                <p class="song-artist">
                👤 ${song.artist}
                </p>

                <p>
                💿 ${song.album}
                </p>

                <p>
                🏷️ ${song.category}
                </p>

                <p>
                ⏱️ ${song.duration}
                </p>

                <div class="d-flex justify-content-between">

                    <a
                    href="${song.audio}"
                    download
                    class="btn-download">

                    ⬇ دانلود

                    </a>
<button
class="btn-favorite"
onclick="toggleFavorite(${song.id})">

${favorites.includes(song.id) ? "❤️" : "🤍"}

</button>
                    <button
class="btn-play"
onclick="playFromCard(${song.id})">

▶ پخش

</button>

                </div>

            </div>

        </div>

        `;

    });

}
// جستجوی زنده

searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase().trim();

    const filteredSongs = songs.filter(song => {

        return (
            song.title.toLowerCase().includes(value) ||
            song.artist.toLowerCase().includes(value) ||
            song.category.toLowerCase().includes(value)
        );

    });

    showSongs(filteredSongs);

});


// بارگذاری اطلاعات

loadSongs();


// اگر فایل پیدا نشد

window.addEventListener("error", () => {

    songsContainer.innerHTML = `

    <div class="col-12 text-center">

        <h2>
        ⚠️ خطا در بارگذاری آهنگ‌ها
        </h2>

        <p>
        فایل songs.json یا مسیر فایل‌ها را بررسی کنید.
        </p>

    </div>

    `;

});
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function toggleFavorite(id){

    if(favorites.includes(id)){

        favorites = favorites.filter(item => item !== id);

    }else{

        favorites.push(id);

    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    showSongs(songs);

}

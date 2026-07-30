const search = document.querySelector("input");

search.addEventListener("keyup", function () {
    let value = search.value.toLowerCase();
    let cards = document.querySelectorAll(".song-card");

    cards.forEach(card => {
        let title = card.querySelector("h2").textContent.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

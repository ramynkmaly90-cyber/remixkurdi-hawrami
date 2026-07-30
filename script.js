document.addEventListener("DOMContentLoaded", function () {

    console.log("REMIX KURDI HAWRAMI Website Loaded 🎵");


    const startButton = document.querySelector(".hero button");


    if (startButton) {

        startButton.addEventListener("click", function () {

            document.querySelector(".music").scrollIntoView({
                behavior: "smooth"
            });

        });

    }



    const buttons = document.querySelectorAll(".card button");


    buttons.forEach(function(button){

        button.addEventListener("click", function(){

            alert("🎧 به زودی پخش آنلاین آهنگ فعال می‌شود!");

        });

    });



});

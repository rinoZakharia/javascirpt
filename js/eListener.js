coba = () => {
    console.log("coba event listener");
    document.querySelector(".isi").innerHTML = "Belajar event listener";
}

// judul.addEventListener("click", () => {
//     console.log("coba event listener");
//     document.querySelector(".isi").innerHTML = "Belajar event listener";
// });

// judul.onclick = coba;

judul.onmouseover = () => {
    console.log("onmuseover");
}
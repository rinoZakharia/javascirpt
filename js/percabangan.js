if (true) {
    console.log("Dijalankan jika benar");
} else {
    console.log("Dijalankan jika salah");
}

let nilai = 60;
let lulus = 60;
let batasA = 100;
let batasB = 0;

if (nilai <= batasA && nilai >= batasB) {
    if (nilai >= lulus) {
        console.log("lulus");
    } else {
        console.log("tidak lulus");
    }
} else {
    console.log("nilai salah");
}
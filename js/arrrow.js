let fungsi = function () {
    console.log("Belajar arrow function");
}

fungsi();

let contoh = (nama) => {
    console.log(nama);
}

contoh("Joni");

let plus = (a, b) => {
    return a + b;
}

console.log(plus(2, 2));

let hasil = (a) => a * 2;

console.log(hasil(4));

let lagi = () => console.log("Coba lagi");
lagi();

let nilai = 6;
let uji = (nilai < 7) ? () => predikat = "gagal" : () => predikat = "lolos";
console.log(uji());
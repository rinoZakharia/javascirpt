// array = string,number,function,objek,campuran

let nilai = [
    { nama: "budi", ipa: 90, bahasa: 80, mat: 90 },
    { nama: "tejo", ipa: 70, bahasa: 90, mat: 80 },
    { nama: "sapa", ipa: 60, bahasa: 80, mat: 80 },
    { nama: "siti", ipa: 90, bahasa: 86, mat: 80 },
];

let nama = ["budi", "tejo", "sapa", "siti"];
nama.push("ani");
let mapel = ["ipa", "bahasa", "matematika"];

// console.log(nama.pop());
// console.log(nama.shift());
// nama.unshift("bobi", "roki");
// console.log(nama.splice(3, 4));
// console.log(nama.slice(0, 3));
// console.log(nama);

// console.log(nama.concat(mapel));
// nama.forEach((a) => {
//     console.log(a);
// });

// nilai.filter((a) => {
//     if (a.ipa > 80 && a.mat > 80) {
//         console.log(a.nama);
//     }
// });

// let siswa = nilai.map((a) => {
//     return a.nama;
// });

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

let hasil = nilai.reduce((a, b) => {
    return (a = a + b.ipa);
}, 0);

console.log(hasil);
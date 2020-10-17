let coba = function () {
    return "coba function";
}

let buah = [
    'apel',
    'mangga',
    'jeruk',
    10,
    coba(),
    (tes = () => "Hasil return arrow function")
];

console.log(buah);

for (let i in buah) {
    console.log(buah[i]);
}

console.log(buah[5]());
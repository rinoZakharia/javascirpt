const objek = {
    nama: "smk revit",
    telp: "0927384",
    buah: ['apel', 'jeruk', 'mangga'],
    coba: function () {
        return "coba function dalam objek";
    },
    kondisi: true
}

console.log(objek);
console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah[1]);
console.log(objek.coba());
console.log(objek.kondisi);
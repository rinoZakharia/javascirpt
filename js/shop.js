let tblproduk = [
    { idproduk: 1, idkategori: 2, produk: "Speaker", gambar: "produk/speaker.jpg", harga: 100000 },
    { idproduk: 2, idkategori: 1, produk: "SD Card", gambar: "produk/sdcard.jpg", harga: 200000 },
    { idproduk: 3, idkategori: 2, produk: "Kamera", gambar: "produk/kamera.jpg", harga: 550000 },
    { idproduk: 4, idkategori: 1, produk: "Laptop", gambar: "produk/laptop.jpg", harga: 100000 },
    { idproduk: 5, idkategori: 1, produk: "SSD", gambar: "produk/ssd.jpg", harga: 100000 },
];
let cart = [];

let tampil = tblproduk.map((kolom) => {
    return `<div style="text-align: center;">
        <div>
            <div class="product-top">
                <img src="${kolom.gambar}" alt="">
            </div>
            <div class="product-bottom">
                <h3>${kolom.produk}</h3>
                <h5>${kolom.harga}</h5>
                <div class="btnBeli"><button data-id="${kolom.idproduk}">Beli</button></div>
                
            </div>
        </div>
    </div>`;
});

document.querySelector(".produk").innerHTML = tampil;
let btnBeli = document.querySelectorAll(".btnBeli > button");

for (let index = 0; index < btnBeli.length; index++) {
    btnBeli[index].onclick = () => {
        // cart.push(btnBeli[index].dataset["id"]);
        tblproduk.filter(function (a) {
            if (a.idproduk == btnBeli[index].dataset["id"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    }
}

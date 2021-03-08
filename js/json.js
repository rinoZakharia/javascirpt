// let tblMenu = [
//     {
//         "idMenu": 1,
//         "idKategori": 1,
//         "menu": "Nasi Goreng",
//         "harga": 10000,
//         "warna": ["merah", "kuning", "hijau"],
//         "stok": true,
//         "ket": null
//     },
//     {
//         "idMenu": 2,
//         "idKategori": 1,
//         "menu": "Pecel",
//         "harga": 15000,
//         "warna": ["merah", "kuning"],
//         "stok": false,
//         "ket": null
//     },
// ]

// console.log(tblMenu[0].menu);

document.querySelector("#klik").addEventListener("click", () => {
    let url = "js/tblmenu.json"
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let output = `<h1>Data Menu</h1> <table>
            <th>Menu</th>
            <th>Harga</th>
            <th>Warna</th>`;
            json.forEach(element => {
                output +=
                    `<tr>
                        <td>${element.menu}</td>
                        <td>${element.harga}</td>
                        <td>${element.warna[0]}</td>
                    </tr>`
            });
            output += `</table>`;
            document.querySelector("#isi").innerHTML = output;
        })
});
let btn = document.querySelectorAll(".btn-angka > button");
let math = document.querySelectorAll(".btn-math > button");
let tampil = document.querySelector("#tampil");
let pilihan = null;
let x;
let y;

for (let index = 0; index < btn.length; index++) {
    btn[index].onclick = () => {
        if (tampil.value == "0") {
            tampil.value = btn[index].innerHTML;
        } else {
            tampil.value += btn[index].innerHTML;
        }
    }
}

math[0].onclick = () => {
    tampil.value = "0";
}

math[1].onclick = () => {
    pilihan = "tambah";
    x = tampil.value;
    tampil.value = "0";
}
math[2].onclick = () => {
    pilihan = "kurang";
    x = tampil.value;
    tampil.value = "0";
}
math[3].onclick = () => {
    pilihan = "kali";
    x = tampil.value;
    tampil.value = "0";
}
math[4].onclick = () => {
    pilihan = "bagi";
    x = tampil.value;
    tampil.value = "0";
}
math[5].onclick = () => {
    y = tampil.value;
    tampil.value = kalkulator(pilihan);
}

kalkulator = (pilihan) => {
    if (pilihan != null) {
        switch (pilihan) {
            case "tambah":
                hasil = parseFloat(x) + parseFloat(y);
                break;
            case "kurang":
                hasil = parseFloat(x) - parseFloat(y);
                break;
            case "kali":
                hasil = parseFloat(x) * parseFloat(y);
                break;
            case "bagi":
                hasil = parseFloat(x) / parseFloat(y);
                break;

            default:
                break;
        }
        return hasil;
    }
}
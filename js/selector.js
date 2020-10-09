const hari = 6;
let hasil;

switch (hari) {
    case 1:
        hasil = "minggu";
        break;
    case 2:
        hasil = "senin";
        break;
    case 3:
        hasil = "selasa";
        break;
    case 4:
        hasil = "rabu";
        break;
    case 5:
        hasil = "kamis";
        break;
    case 6:
        hasil = "jum'at";
        break;
    case 7:
        hasil = "sabtu";
        break;

    default:
        hasil = "hari tidak ada";
        break;
}

console.log(hasil);

const bulan = "april";
let bulann;

switch (bulan) {
    case "januari":
        bulann = 1;
        break;
    case "februari":
        bulann = 2;
        break;
    case "maret":
        bulann = 3;
        break;
    case "april":
        bulann = 4;
        break;

    default:
        bulann = "bulan belum dibuat";
        break;
}

console.log(bulann);
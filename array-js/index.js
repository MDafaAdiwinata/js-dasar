// Array
// Array berfungsi untuk menyimpan banyak nilai atau data dalam satu variable tunggal

// const hari = [
//     'senin',
//     'selasa',
//     'rabu',
//     'kamis',
//     'jumat',
//     'sabtu',
//     'minggu'
// ]
// console.log(hari);

// Memanipulasi Array
// 1 Menambah isi Array
// const laptop = [];
// laptop[0] = 'lenovo';
// laptop[1] = 'macbook';
// laptop[2] = 'asus tuf';

// 2 Menghapus Isi Array
// const warna = ["merah", "kuning", "hijau"];
// warna[0] = undefined;
// console.log(warna);

// 3 Menampilkan isi array dengan looping
// const hari = ["senin", "selasa", "rabu"];
// for ( let i = 0; i <= hari.length; i++) {
//     console.log("hari "+hari[i]);
// }

// Method pada Array
// 1 Join (menggabungkan semua elemen array menjadi satu string tunggal, supaya menjadi rapih)
// const hari = ["senin", "selasa", "rabu"];
// console.log(hari.join(' '))

// 2 Push (Menambahkan value array di akhir array)
// const hari = ["senin", "selasa", "rabu"];
// hari.push("kamis")
// console.log(hari.join(" "));

// 3 Pop (Menghapus isi array pada urutan terakhir)
// const hari = ["senin", "selasa", "rabu", "kamis"];
// hari.pop();
// console.log(hari.join(" "));

// 4  Unshift (Menambahkan Elemen array di urutan awal)
// const hari = ["senin", "selasa", "rabu", "kamis"];
// hari.unshift("Minggu");
// console.log(hari.join(" "));

// 5 Shift (Menghilangkan elemen di awal urutan array)
// const hari = ["senin", "selasa", "rabu", "kamis"];
// hari.shift();
// console.log(hari.join(" "));

// 6 Splice
// metode yang digunakan untuk mengubah array dengan cara menghapus, mengganti, atau menambahkan elemen secara langsung
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// const hari = ["senin", "selasa", "rabu", "kamis"];
// hari.splice(2, 2, "Adi", "Abdul");
// console.log(hari.join(" "));

// 7 Slice (Mengambil beberapa array untuk di jadikan array baru)
// slice(awal, akhir)
const hari = ["senin", "selasa", "rabu", "kamis"];
const newHari = hari.slice(1, 3);
console.log(newHari.join(" "));
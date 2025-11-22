// Juragan Angkot
// Pengelolaan Penumpang

let penumpang = [];

// Penumpang Naik = tambahPenumpang()
const tambahPenumpang = (namaPenumpang, penumpang) => {
  // Jika Angkot Kosong
  if (penumpang.length == 0) {
    // Tambah Penumpang di Awal aray
    penumpang.push(namaPenumpang);

    // Kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // Telusuri seluruh kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // jika kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebuts
        penumpang[i] = namaPenumpang;
        // Kembalikan isi array & keluar dari function
        return penumpang;
      } else if ( penumpang[i] === namaPenumpang ) {
        // Kasih alert
        console.log("nama penumpang sudah ada di dalam angkot");
        // Kembalikan isi array
        return penumpang;
      } else if ( i == penumpang.length - 1 ) {
        // Tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array
        return penumpang;
      }
    }
  }
};

// Penumpang Turun = hapusPenumpang()
const hapusPenumpang = (namaPenumpang, penumpang) => {
    if( penumpang.length == 0 ) {
        console.log("Angkot masih kosong");
        return penumpang;
    } else {
        for( let i = 0; i < penumpang.length; i++ ) {
            if ( penumpang[i] == namaPenumpang ) {
                penumpang[i] = undefined;
                return penumpang; 
            } else if ( i == penumpang.length - 1 ) {
                console.log(namaPenumpang + "tidak ada di dalam angkot");
                return penumpang;
            }
        }
    }
}
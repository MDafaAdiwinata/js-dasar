// Program Juragan Angkot dengan Object
// Pengelolaan Angkot (Sopir, Trayek, Kas, Penumpang, Penumpang Nai, Turun)

// Function Angkot
let Angkot = function(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push = namaPenumpang;
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if( this.penumpang.length === 0 ) {
            console.log("Angkot Masih Kosong");
            return false;
        }

        for ( let i = 0; i < this.penumpang.length; i++ ) {
            if ( this.penumpang[i] == namaPenumpang ) {
                this.penumpang[i] = undefined;
                this.kas += bayar;

                return this.penumpang;
            }
        }

    }

}

let angkot1 = new Angkot("Adi", ["rumah", "smk bi"], [], 0);
let angkot2 = new Angkot("Abdul", ["smk bi", "pamulang"], [], 0);
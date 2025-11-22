// Function

// Function Declaration
function tambah(a, b) {
    const penambahan = a + b;
    console.log(`hasil pertambahan nilai ${a} di tambah nilai ${b} adalah = ${penambahan}`)
}

// Function Ekspresi
const kali = function(a, b) {
    const perkalian = a * b;
    console.log(`hasil perkalian nilai ${a} di kali dengan nilai ${b} adalah = ${perkalian}`)
}

// Arrow Function 
const bagi = (a, b) => {
    const pembagian = a / b;
    console.log(`hasil pembagian nilai ${a} di bagi dengan nilai ${b} adalah = ${pembagian}`)
}

// Rekursif
// (teknik suatu fungsi dapat memanggil dirinya sendiri dalam sebuah fungsi/masalah)
const faktorial = (n) => {
    if ( n === 0 ) {
        return 1;
    } return n * faktorial(n - 1);
}
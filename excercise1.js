/*
Exercise 1

Buatlah sebuah object hewan yang berisikan:
ciri-ciri (atribute) :
nama: String
kaki: Number
warna: Array
spesies: String (mamalia/unggas/dll)
makanan: Array
keahliannya (method) :
terbang / loncat / berburu / dll

Tampilkan dengan console.log seperti ini, Contoh :
Nama: Kucing
Kaki :  4
Spesies: Mamalia
Warna: oren, putih, item
Makanan : Ikan, Ayam
Suara: Miaaaaw

*/


let hewan = {
    nama: "kucing",
    kaki: 4,
    warna: ["oren", "putih", "item"],
    spesies: "mamalia, unggas, reptil",
    makanan: ["ikan", "ayam", "tikus"],
    keahlian: ["terbang", "loncat", "berburu", "dll"]
};
console.log ("nama : " + hewan.nama);
console.log ("kaki : " + hewan.kaki);
console.log ("warna : " + hewan.warna);
console.log ("spesies : " + hewan.spesies);
console.log ("makanan : " + hewan.makanan);
console.log ("keahlian : " + hewan.keahlian.join(" / "))

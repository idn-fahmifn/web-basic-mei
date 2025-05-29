// output penulisan javascript

// mengeluarkan output ke console, kita perlu inspect element pada browser
// console.log("Hello World!");

// alert mengeluarkan pop up pada web
// alert("Hello World!");

// document.write mengeluarkan output ke dalam body HTML
// document.write("Hello World!");

// prompt mengeluarkan dialog untuk meminta input dari pengguna
// prompt("Masukkan nama Anda: ", "Nama Anda");





// mendeklarasikan variabel
// var, let, const 
// var sudah jarang digunakan, lebih baik gunakan let atau const


// let nama = "Fahmi Nuradi";
// const umur = 30;

// nama = "Asep"; 
// //vatiable nama bisa diubah karena menggunakan let

// console.log(nama);
// console.log(umur);

// console.log(typeof nama); // mengecek tipe data dari variabel
// console.log(typeof umur); // mengecek tipe data dari variabel



// tipe data primitif
// string, number, boolean, null, undefined, symbol

/**
 * ini adalah materi variabel
 * materinya lorem ipsum dolor sit amet, consectetur adipiscing elit.
 */

// string
// let nama = "asep";
// let alamat = 'jakarta';
// let hallo = `Hallo, selamat datang ${nama} kamu sekarang sedang di ${alamat}`; // menggunakan template literal

// console.log('Hallo, selamat datang', nama, 'Kamu sekarang sedang di', alamat);

// console.log(hallo);
// alert(hallo);

// // number
let umur = 30;
let berat = 71.3;
let suhu = -10;
let sisa = 10 % 3;
let nan = "saya"

console.log(typeof nan);
console.log(typeof umur);
console.log(typeof berat);
console.log(typeof suhu);
console.log(typeof sisa);

// // boolean

let benerGak = 1 > 3;

// console.log(typeof benerGak);


// undefined
// let tidakTerdefinisi;

// null != undefined; // null adalah nilai yang sengaja diberikan, sedangkan undefined adalah nilai yang tidak terdefinisi

// let pacar;
// console.log(pacar); // akan menghasilkan undefined karena pacar belum dideklarasikan

// // null
// let istri = null; // null adalah nilai yang sengaja diberikan, artinya tidak ada nilai yang diberikan
// console.log(typeof istri); // akan menghasilkan 'null' karena istri dideklarasikan dengan string 'null'



// // tipe data objek
// // objek adalah tipe data yang kompleks, yang berisi kumpulan nilai dalam bentuk pasangan key-value


// let mobil = 'Toyota Avanza';
// let motor = 'Honda CBR 150R';
// let rumah = 'PIK 2';

// let kenalan = `saya punya mobil ${mobil}, motornya ${motor} dan rumah saya di ${rumah}`;

// console.log(kenalan);


// // console.log('saya punya mobil mereknya', mobil + ' Motor saya adalah $motor ');
// console.log(`hallo mobil saya ${mobil}, saya juga punya motor ${motor} dan rumah saya saat ini tinggal di ${rumah} `);


// let harta = {
//     car: 'Toyota Supra',
//     bike: 'Honda CBR 250R',
//     house: 'PIM 2',
// }

// let kendaraan = {
//     car: 'Toyota Avanza',
//     bike: 'Honda CBR 150R',
//     house: 'PIK 2',

// }

// console.log(`${harta.car}`)




// let saya = {
//     nama : 'Fahmi Nuradi',
//     umur : 18,
//     alamat : 'jakarta barat',
//     adik : ['asep', 'putri', 'budi'],
//     rutinitas : {
//         pagi : 'work out',
//         siang : 'masak',
//         malam : 'tidur'
//     },
//     isNikah : false,

//     hai: function(){
//         // console.log('hallo, nama saya' + this.nama + 'saya umurnya ' + this.umur);
//         console.log(`Hallo nama saya ${this.nama} saya umurnya ${this.umur} `)
//     },
// }

// saya.hai();



// console.log(saya.nama);
// console.log(saya.rutinitas.siang);
// console.log(saya);
// console.log(saya.rutinitas.malam);
// console.log('Hallo saya punya adik 3, yang ke 3 adalah', saya.adik[2])


// fobject film mas naufal
// let film = {
//     name : "Gladiator",
//     year : 2000,
//     genre : ['War', 'History', 'Action'],
//     actor : {
//         name : "Russell Crowe",
//         age : 61,
//         state : "New Zealand",
//         married : true

//     }

// }

// console.log(film);
// console.log(film.year);
// console.log(film.actor.age);
// console.log(film.genre[1]);

// ` bactics
// ' sigle quotes
// " double quotes

// console.log('saya sedang nonton ' + film.name);
// console.log('saya suka nonton film ' +film.name + 'yang dirilis tahun ' + film.year + 'dan aktornya bernama ' + film.actor.name );

// template literal
// console.log(`saya sedang nonton ${film.name} yang dirilis tahun ${film.year} dan aktornya bernama ${film.actor.name}`);

// let makananmie = {
//     nama: "Indomie",
//     harga: 3500,
//     varian: ["mie kuah", "Mi Goreng", "Mi Cup"],
//     favorite: "Ayam Bawang",
//     bestSeller: {
//         rasa: "Ayam Bawang",
//         toppingTambah: "sosis",
//         kuah: "pedas",
//     },

//     mie: function () {
//         console.log(
//             `Mie favorit saya adalah ${this.favorite} dan ${this.bestSeller.rasa}.`
//         );
//     },

//     indomieenak: function () {
//         console.log(`Indomie dengan harga Rp.${this.harga} bikin saya ketagihan!`);
//     }
// }

// makananmie.mie();
// makananmie.indomieenak();

// let buku = {
//     judul : 'Jatuh',
//     author : 'Tere Liye',
//     halaman : 100,
//     genre : ['fantasy', 'drama', 'fiction', 'mystery'],
//     terbit : {
//         tahun : 2010,
//         penerbit : "gramedia",
//         isbn : 299123
//     }

// }
// console.log(`saya membaca buku ${buku.judul} karangan ${buku.author} yang jumlahnya ${buku.halaman} halaman. genrenya adalah ${buku.genre[0]}`);

// array pada javascript

// let mobil = ['Toyota Avanza', 'Honda Jazz', 'Suzuki Ertiga', 'Toyota Innova'];

// mobil[3] = 'Mitshubishi Xpander'; // mengubah nilai pada index ke-3

// console.log(`saya punya ${mobil.length} mobil, yaitu ${mobil[0]}, ${mobil[1]}, ${mobil[2]}, dan ${mobil[3]}`);

// operator aritmatika
//  + penjumlahan
//  - pengurangan
//  * perkalian
//  / pembagian
//  % sisa bagi
//  ** pangkat
//  ++ increment
//  -- decrement

// contoh penjumlahan 

// let satu = 10
// let dua = 5
// let hasi = satu % dua
// console.log(`Hasil penjumlahan ${satu} + ${dua} = ${hasi}`);

// let a = prompt('masukan angka pertama')
// let b = prompt('masukan angka kedua')
// alert(`Hasil penjumlahan ${a} + ${b} = ${Number(a) + Number(b)}`);

// mas fathin = menghitung luas segitiga
// mas adi = menghitung luas jajar genjang
// mas naufal = menghitung luas lingkaran

// let alas = prompt("Masukkan panjang alas jajargenjang: ");
// let tinggi = prompt("Masukkan tinggi jajargenjang: ");
// let luas = alas * tinggi;

// alert(`luas jajargenjang adalah ${alas} * ${tinggi} = ${luas}`);

// let a = prompt("Masukkan alas")
// let b = prompt("Masukkan tinggi")
// let luas = Number(a) + Number(b) / 2;

// alert(`Hasil hasil luasnya ${luas}`)

// let a = 10 
// let b = 10 
// let hasil = a + b / 2;
// console.log(`Hasilnya adalah ${hasil}`);

// aplikasi kalkulator sederhana


// menghitung  lingkaran

// const phi = 3.14;
// let jari = prompt('Masukan jaring jaring lingkaran')
// let luas = phi * jari * jari

// alert(`Luas lingkaran adalah = ${luas}`);

// operator penugasan
// let a = 10;
// a += 5 
// a -= 3
// a *= 2; // a = a * 2

// console.log(`Hasil penugasan a += 5 adalah ${a}`); // 15


// operator perbandingan
// > lebih besar dari
// < lebih kecil dari
// >= lebih besar dari atau sama dengan
// <= lebih kecil dari atau sama dengan
// == sama dengan
// === sama dengan (strict equality)
// != tidak sama dengan
// !== tidak sama dengan (strict inequality)

// let a = 10
// let b = 5
// let c = '10'
// let d  = 5


// console.log(a !== c) 

// oeprator logika
// && (AND) - true jika kedua operand true
// || (OR) - true jika salah satu operand true
// ! (NOT) - membalik nilai boolean

let dewasa = false;
let bawaMobil = true;
let punyaSim = false;

// console.log('Umurnya sudag cukup?', dewasa && bawaMobil); //true
// console.log('Boleh bawa mobi?', dewasa && bawaMobil && punyaSim); // false

// console.log('Boleh bawa mobil?', dewasa || punyaSim); //true

// console.log('kamu punya sim?', !punyaSim);

// let nama = prompt('Masukan Nama kamu');
// let nilai = prompt('Masukan Nilai kamu');

// hasil = (nilai >= 75) ? `Selamat ${nama}, kamu lulus!` : `Maaf ${nama}, kamu tidak lulus.`;
// alert(hasil) // Output: tergantung input nilai


// chalenges

let aku = {
    nama: 'Fahmi',
    dewasa: false,
    punyaTiket: false,
    punyaKTP: false,
}

// keluarkan output : 

// Fahmi Punya tiket? true
// Fahmi boleh nonton? true
// Fahmi boleh masuk? false

// let saya = {
//     nama : "Fathin",
//     dewasa : false,
//     punyatiket : false,
//     punyaktp : false
// }

// console.log(`Belum punya ktp?`, !saya.dewasa && !saya.punyaKTP );
// console.log(`Udah boleh masuk?`, !saya.dewasa || !saya.punyaTiket || !saya.punyaKTP);
// console.log(`nama anda siapa? ${saya.nama} udah punya tiket?`, saya.dewasa && saya.punyaTiket);
// console.log(`Boleh masuk?`, saya.dewasa && saya.punyaTiket && saya.punyaKTP);


// kondisi ? nilaibenar : nilaisalah

// let n = 70;
// menghitung kondisi kelulusan
// let lulus = (n > 75) ? 'Lulus' : 'Tidak Lulus';
// console.log(`Nilai kamu ${n}, kamu ${lulus}`);

// chalenges
// membuat status kelulusan berdasarkan nilai yang diinputkan di prompt


// let = nama = prompt('Masukan nama kamu');
// let = nilai = prompt('Masukan nilai kamu');

// let lulus = (nilai >= 75) ? `Hallo ${nama} Kamu lulus` : `Maaf ${nama} Kamu belum lulus`
// alert(lulus);

// let a = true
// let b = '10'

// hasil = a + b 
// console.log(hasil)


// kondisi if else

// undifined 1= true


let tanggal;
tanggal = 'merah';

if (tanggal == 'merah') {
    console.log("Selamat hari libur!");
} else {
    console.log("Hari ini bukan hari libur.");
}

// contoh lain
let nilai = 40;

if (nilai >= 75) { //kondisi pertama
    console.log('Lulus')
}
else if (nilai >= 60) { //kondisi kedua
    console.log('Remedial')
}
else  //jika tidak ada kondisi yang sesuai
{
    console.log('Tidak Lulus')
}


// switch case

// let hari = new Date().toLocaleString('id-ID', { weekday: 'long'  }).toLowerCase(); // mendapatkan hari dalam bahasa Indonesia
// let perasaan;  //undifined
// let baju;

// let jam = new Date().toLocaleTimeString(); // mendapatkan jam saat ini
// console.log(jam)

// switch (hari) {
//     case 'senin':
//         perasaan = 'Mager harus nunggu minggu';
//         baju = 'Pakai baju kemeja'
//         break;

//     case 'selasa':
//         perasaan = 'Masih mager, tapi sudah mulai semangat'
//         baju = 'Pakai baju kemeja'
//         break;

//     case 'rabu':
//         perasaan = 'udah ada hilal minggu'
//         baju = 'Pakai baju casual'

//         break;

//     case 'kamis':
//         perasaan = 'udah ada hilal minggu deket banget'
//         baju = 'Pakai baju batik'
//         break;

//     default:
//         perasaan = 'saya hanya suka hari minggu'
//         baju = 'Pakai baju polo'
// }

// console.log(`Hari ini adalah ${hari}, perasaan saya adalah ${perasaan}. saya harus pake baju ${baju}`);

// let angka1 = prompt('Masukan angka 1')
// let angka2 = prompt('Masukan angka 2')
// let operator = prompt('Masukan operator (+, -, *, /, %)');

// let hasil;

// switch (operator) {
//     case '+':
//         hasil = Number(angka1) + Number(angka2);
//         break;
//     case '-':
//         hasil = Number(angka1) - Number(angka2);
//         break;
//     case '*':
//         hasil = Number(angka1) * Number(angka2);
//         break;
//     case '/':
//         hasil = Number(angka1) / Number(angka2);
//         break;
//     case '%':
//         hasil = Number(angka1) % Number(angka2);
//         break;
//     default:
//         hasil = 'Gabisa dihitung';
// }

// alert(`Hasil dari ${angka1} ${operator} ${angka2} adalah ${hasil}`);

// looping 
// for, while, do while, for in, for of

// for(let i = 10; i <= 100; i++){
//     console.log('ini adalah looping', i )
// }

// for(let aku = 10; aku >=0; aku--){
//     console.log('saya akan datang pada ....', aku)
// }

let makanan = ['Nasi Goreng', 'Mie Goreng', 'Ayam Penyet', 'Sate Ayam', 'Soto Ayam', 'Bakso', 'Rendang', 'Gado-gado', 'Nasi Uduk', 'Nasi Kuning', 'Nasi Kucing'];

console.log(makanan.length);

for (let m = 0; m < makanan.length; m++){
    console.log('Saya kalau makan sukanya dengan', makanan[m])
}

// while loop
// let angka = 1;
// while( angka <= 10){
//     console.log('Angka saat ini adalah', angka);
//     angka++
// }

// while loop
// let saldo = 100000;
// let narik = 0;
// while(narik < saldo){
//     narik = prompt('Masukan jumlah uang yang ingin ditarik');
//     if(narik > saldo){
//         alert('Saldo tidak cukup');
//     } else {
//         saldo -= Number(narik);
//         alert(`Saldo Anda sekarang adalah ${saldo}`);
//     }
// }


// basic function
function hallo(){
    alert('hallo, selamat datang di pembelajaran javascript');
}

// function expression 
// di assign ke variable
let rumusSegitga = function(){
    let alas = prompt('Masukkan panjang alas segitiga: ');
    let tinggi = prompt('Masukkan tinggi segitiga: ');
    let luas = (alas * tinggi) / 2;
    alert(`Luas segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah ${luas}`);
};

// hallo();
// rumusSegitga();

// arrow function
// let rumusLingkaran = () => {
//     let jari = 10;
//     const phi = 3.14;

//     let luas = phi * jari * jari

//     console.log(luas)
// }
// rumusLingkaran();

// // function dengan parameter

// // basic function
// function sapa(ucapan, nama){
//     console.log(`Selamat ${ucapan}, ${nama}!`);
// }

// // arrow function
// let hello = (ucapan, nama) => { 
//     console.log(`selamat ${ucapan}, mr ${nama}`)
// }

// hello('pagi', 'Fahmi'); // output memanggil function dengan parameter ucapan dan nama
// sapa('pagi', 'Fathin');

// DOM

function tampilkanText(){
    alert('Hallo, ini adalah contoh DOM manipulation');
}

// memannggil elemen HTML dengan id hello
// document.getElementById('hello').innerText = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.';
// document.querySelector('.desc').innerText = 'saya sekarang sedang belajar javascript';

// let time = new Date().toLocaleTimeString(); // mendapatkan waktu saat ini
// document.querySelector('#jam').innerText = `Saat ini jam menunjukan pukul ${time}`;

// document.getElementById('button2').addEventListener('click', tampilkanText)




// document.getElementById('tampil').addEventListener('click', popUp); // menambahkan event listener pada elemen dengan id tampil, ketika diklik akan memanggil function popUp

// popUp();


function persegiPanjang(){
    let panjang = prompt('Masukkan panjang persegi panjang: ');
    let lebar = prompt('Masukkan lebar persegi panjang: ');
    let luas = panjang * lebar;
    // alert(`Luas persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${luas}`);
    document.getElementById('hasil').innerText = luas;
}


// persegiPanjang()
document.getElementById('popup').addEventListener('click', persegiPanjang); // menambahkan event listener pada elemen dengan id persegi, ketika diklik akan memanggil function persegiPanjang

function persegi(){
    let sisi = prompt('Masukkan panjang sisi persegi: ');
    let luas = sisi * sisi;
    // alert(`Luas persegi dengan sisi ${sisi} adalah ${luas}`);
    document.getElementById('result').innerText = luas;
}

document.getElementById('persegi').addEventListener('click', persegi); // menambahkan event listener pada elemen dengan id persegi, ketika diklik akan memanggil function persegi
























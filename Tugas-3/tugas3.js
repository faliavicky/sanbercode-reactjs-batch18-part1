// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
// jawaban soal 1
console.log(kataPertama,kataKedua.charAt(0).toUpperCase()+kataKedua.substr(1),kataKetiga,kataKeempat.toUpperCase());



//soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
//jawaban soal 2
var int1 = parseInt(kataPertama);
var int2 = parseInt(kataKedua);
var int3 = parseInt(kataKetiga);
var int4 = parseInt(kataKeempat);

console.log(int1+int2+int3+int4);



//soal 3
var kalimat = 'wah javascript itu keren sekali'; 
//jawaban soal 3
var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14); // do your own! 
var kataKetiga = kalimat.substring(15,18); // do your own! 
var kataKeempat = kalimat.substring(19,24);// do your own! 
var kataKelima = kalimat.substring(25,31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);



//soal 4
var nilai = 77;
//jawaban soal 4
if(nilai>=80){
    console.log('Indeks = A')
}
else if(nilai>=70 && nilai<80){
    console.log('Indeks = B')
}
else if(nilai>=60 && nilai<70){
    console.log('Indeks = C')
}
else if(nilai>=50 && nilai<60){
    console.log('Indeks = D')
}
else {
    console.log('Indeks = E')
}



//soal 5
var tanggal = 28;
var bulan = 11;
var tahun = 2000;
//jawaban soal 5
var strTgl = String(tanggal);
var strThn = String(tahun);

switch(bulan){
    case 1 : {
        console.log(strTgl + ' ' + 'Januari' + ' ' + strThn);
        break;
    }
    case 2 : {
        console.log(strTgl + ' ' + 'Februari' + ' ' + strThn);
        break;
    }
    case 3 : {
        console.log(strTgl + ' ' + 'Maret' + ' ' + strThn);
        break;
    }
    case 4 : {
        console.log(strTgl + ' ' + 'April' + ' ' + strThn);
        break;
    }
    case 5 : {
        console.log(strTgl + ' ' + 'Mei' + ' ' + strThn);
        break;
    }
    case 6 : {
        console.log(strTgl + ' ' + 'Juni' + ' ' + strThn);
        break;
    }
    case 7 : {
        console.log(strTgl + ' ' + 'Juli' + ' ' + strThn);
        break;
    }
    case 8 : {
        console.log(strTgl + ' ' + 'Agustus' + ' ' + strThn);
        break;
    }
    case 9 : {
        console.log(strTgl + ' ' + 'September' + ' ' + strThn);
        break;
    }
    case 10 : {
        console.log(strTgl + ' ' + 'Oktober' + ' ' + strThn);
        break;
    }
    case 11 : {
        console.log(strTgl + ' ' + 'November' + ' ' + strThn);
        break;
    }
    default : {
        console.log(strTgl + ' ' + 'Desember' + ' ' + strThn);
    }
}
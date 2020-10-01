// soal 1
//jawaban soal 1
var loop = ['looping pertama','loopping kedua'];

console.log(loop[0].toUpperCase());
var pertama=2;
while(pertama<=20){
    console.log(pertama + ' ' + '- I love Coding');
    pertama+=2;
}

console.log(loop[1].toUpperCase());
var kedua=20;
while(kedua>=2){
    console.log(kedua + ' ' + '- I will become a frontend developer');
    kedua-=2;
}



//soal 2
//jawaban soal 2
for(angka=1;angka<=20;angka++){
    if(angka%2==0){
        console.log(angka + ' ' + '- Berkualitas');
    }
    else if(angka%3==0){
        console.log(angka + ' ' + '- I Love Coding');
    }
    else {
        console.log(angka + ' ' + '- Santai');
    }
}


//soal 3
//jawaban soal 3
for (i=1 ; i<=7 ; i++){
    var c =' ';
    for (j=1 ; j<=i ; j++){
        c += '#'
    }
    console.log(c);
}



//soal 4
var kalimat="saya sangat senang belajar javascript";
//jawaban soal 4
var pisah= kalimat.split(" ");
console.log(pisah);



//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
//jawaban soal 5
daftarBuah.sort();
for(i=0; i<=4; i++){
    console.log(daftarBuah[i]);
}
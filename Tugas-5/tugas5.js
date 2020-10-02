// soal 1
function halo(){
    return "Halo Sanbers!";
}

// jawaban soal 1
console.log(halo())



// soal 2
// jawaban soal 2
function kalikan(num1, num2){
    return num1 * num2
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48



// soal 3
// jawaban soal 3
function introduce(name, age, address,hobby){
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby +"!"
}
 
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"



// soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

//jawaban soal 4
var objDaftarPeserta = {
    nama : "Asep",
    "jenis kelamin" : "laki-laki",
    hobi : "baca buku",
    "tahun lahir" : 1992
}



// soal 5
// jawaban soal 5
var arrBuah = [
    {nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000},
    {nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000},
    {nama: "Semangka", warna: "Hijau & Merah", "ada bijinya": "ada", harga: 10000},
    {nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000}
]

var arrBuahFilter = arrBuah.filter(function(item){
    return item.nama == "strawberry";
})

console.log(arrBuahFilter)



// soal 6
var dataFilm = []

//jawaban soal 6
  function tambahDataFilm(nama, durasi, genre, tahun){
      dataFilm.push({"Nama": nama, "Durasi": durasi, "Genre": genre, "Tahun": tahun})
  }
  tambahDataFilm("On Your Wedding Day", "1h 50m", "Romance, Comedy", 2018);
  tambahDataFilm("Maze Runner", "1h 53m", "Scifi, Action", 2014);
  tambahDataFilm("Harry Potter and the Deathly Hallows: Part 2", "2h 10m", "Adventure, Drama, Fantasy", 2011);

  console.log(dataFilm);
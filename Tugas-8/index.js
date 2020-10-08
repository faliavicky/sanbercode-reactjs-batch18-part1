// jawaban soal 1
// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
readBooks(10000,books[0],bukuSatu => {
    readBooks(bukuSatu, books[1],bukuDua => {
        readBooks(bukuDua, books[2], bukuTiga => {
            readBooks(bukuTiga, books[3], selesai => {
                console.log(selesai);
            })
        })
    })
})
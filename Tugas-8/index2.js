//jawaban soal 2
var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
  
// Lanjutkan code untuk menjalankan function readBooksPromise 
readBooksPromise(10000, books[0]).then(
    bukuSatu => {
        readBooksPromise(bukuSatu, books[1]).then(
            bukuDua => {
                readBooksPromise(bukuDua, books[2]).then(
                    function(bukuTiga){
                        readBooksPromise(bukuTiga, books[3]).then(
                            function(selesai){
                                console.log(selesai);
                            }
                        )
                    }
                )
            }
        )
    }
)
.catch(function(error){
    console.log(error.message);
});
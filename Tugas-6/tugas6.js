//soal 1
//jawaban soal 1

//menghitung luas lingkaran
const luasLingkaran = (r) => {
    let phi = 3.14;
    return phi * r * r;
}
//jari-jari lingkaran = r = 5
console.log(luasLingkaran(5));

//menghitung keliling lingkaran
const kelilingLingkaran = (r) => {
    let phi = 3.14;
    return 2 * phi * r;
}
//jari-jari lingkaran = r = 2
console.log(kelilingLingkaran(2));



//soal 2
let kalimat = "";
//jawaban soal 2
const tambahKalimat = (a) =>{
    console.log(a);
}
tambahKalimat("saya");
tambahKalimat("adalah");
tambahKalimat("seorang");
tambahKalimat("frontend");
tambahKalimat("developer");



//soal 3
//jawaban soal 3
const newFunction = literal = (firstName, lastName) =>{
    return {
        firstName : firstName,
        lastName : lastName,
        fullName : fullName = () => {
            console.log(firstName + " " + lastName)
            return 
        }
    }
}

newFunction("William", "Imoh").fullName() 



//soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
//jawaban soal 4
const {firstName,lastName,destination,occupation,spell} = newObject;
console.log(firstName, lastName, destination, occupation);



//soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
//jawaban soal 5
const combined = [...west,...east]
console.log(combined)
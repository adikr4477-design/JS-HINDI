//primitive
//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//const id = Symbol ('123')
//const anotherId = Symbole('123')

//console.log(id === anotherId);
//const bigNumber = 3473856234865237846286208602206n



//Refermce type  (non primitive)
//Array, Object, Function
// Javascript is dynamically datatype language
 


//************************************************************
//Stack(primitive), Heap(Nonprimitive)
let mySchoolName = "Aditya"
let anothername = mySchoolName
console.log(anothername);
let userOne = {
    email : "user@123",
    onlinepayment : "ybl@123" 
}
let userTwo = userOne
userTwo.email = "Aditya@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
//starting


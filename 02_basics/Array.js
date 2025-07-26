//ARRAY resizable. 

const myArr1=[0,1,2,3,4,5]
const myHeros=["Arjun","Karan","Duryodhan"]

const myArr2 = new Array(1,2,3,4) 




// console.log(myArr1[0]);

// *****************************Array Method ****************************

// myArr1.push(9)
// myArr1.pop()   // it will delete last element of the array 
myArr1.unshift(90)
myArr1.shift()

// console.log(myArr1.includes(3874));

// console.log(myArr1.innexof(4))
const  newArr = myArr1.join()  // Array into the strings with same value



// console.log(myArr1);
// console.log(newArr);

// slice and splice

console.log("A ", myArr1);
const myn1= myArr1.slice(1,3)
console.log(myn1);
console.log("B ", myArr1);

const myn2 = myArr1.splice(1,3)
console.log("C ", myArr1);






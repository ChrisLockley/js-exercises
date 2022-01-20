let sum = 0 
let foods = ["banana", "chicken", "bacon", "chocolate","oranges", "burritos"]
// food length = 6

//for (indexVariable; indexBoundaryCond; IndexIterator) {
    //statement
//}

for (let i = 0; i < foods.length; i +=1) {
    let food = foods[i];
 // for of loop
 // for (element of iterableObject)
    for (let char of food) {
        if (char === "a") {
            sum +=1;
        }
    }
    console.log(food);
}

/* for ((let i = 0; i < foods.length; i +=1)) {
    let food = foods[i];
    if (!food.includes("b")) {
        foods.splice(i, 1);
        i -= 1;
    }
    console.log(food);
}*/

const iterableObject = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let i = 0; i < iterableObject.length; i += 1) {
    const iterableElementObject = iterableObject[i];

    for (let j = 0; j < iterableElementObject.length; j += 1) {
        const element = iterableElementObject[0];
        console.log(element);
    }
    console.log("end of inner loop")
}
console.log("end of outer loop")

/*const factorial = (n) => {
    let product = 1;
    for (let i =1; i <= n; i += 1) {
        product *= i;
    }
    return product;
}
console.log(factorial(5))*/

/*const factorial = (n) => {
    let product = 1;
    while (n > 0) {
        product *= n;
        n -= 1;
    }
    return product;
}
console.log(factorial(5))*/

/*const countBySevens = (n) => {
    let product = [];
    for (let i = 0; i <= n; i += 7) {
        if (i !== 0) {
            product.push(i);
        }
    }
    return product;
}
console.log(countBySevens(21)) */

/*input: no input
output: array in integers

reslut: array
count variable power up to 1000000*/


const powersOfTwo = () => {
    let product = [];
    let power = 1;
    while (power < 1000000) {
        product.push(power);
        power *= 2;
    } 
    return product;
}
console.log(powersOfTwo());



let betterSum = (left, right) => {
    
}
betterSum(4, 7)

// sum of 4 + 5 + 6 + 7
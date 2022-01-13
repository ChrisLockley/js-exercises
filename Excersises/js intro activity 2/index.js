// console log favAnimal

function favAnimal() {
    return('foxes');
} 

let result = favAnimal("foxes");
console.log(result);

// create subtract and multiply function

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(subtract(2, 3));
console.log(multiply(2, 3)); 

// console log favourite food 

const favFood = () => {
    console.log(favFood(steak));
}

// greet joe mama

const greet = (firstName, lastName) => {
    return "hello " + firstName + " " + lastName;
}

console.log(greet("joe", "mom"));

// 1 create function called triplesum and add them together

const tripleSum = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

console.log(tripleSum(3, 2, 1))

// 2 create function and return your groceries

function groceries(quantity1, food, quantity2, drink) {
    return "I need " + quantity1 + " " + food + " " + "and " + quantity2 + " " + drink;
}

console.log(groceries(5, "steaks", 2, "cases"));

// 3 create function called calculate and ask to add

const calculation = (action) => {
    let phrase = "perform this action: " + action;
    return phrase;
}

let action = "add";
let result1 = calculation(action);
console.log(result1);

// lexical scope 

const scopeTest = () => {
    let weather = "sunny";
}

//console.log(weather);

let counter = 0;

const increase = () => {
    counter += 1;
}

increase();
console.log(counter);
increase();
console.log(counter);

if(1 < 2) {
    var flag = true;
}
console.log(flag)

// conditionals 

let outside = "weather";

if (outside === "rainy") {
    console.log("stay in");
} 
else if (outside === "cloudy") {
    console.log("sleep in");
}
else if (outside === "sunny") {
    console.log("go out");
}
else {
    console.log("sleep")
}

let num = 40;
if(num < 30) {
    console.log("small")
}
else if(num>= 30) {
    console.log("large")
}
else {
    console.log("was that a number?")
}

// == vs ===
if("40" == 40) {
    console.log(true);
}

if("40" === 40) {
    console.log("false")
}

const canDrive = (age) => {
    if(age >= 16) {
        return("can drive");
    }
    else {
        return("cant drive")
    }
}
console.log(canDrive(50))

// create a function called rockPaperScissors

/*const rockPaperScissors = (move) => {
    if("rock" === move) {
        return("player has chosen rock");
    }
    else if("paper" === move) {
        return("player has chosen paper");
    }
    else if("scissors" === move) {
        return("player has chosen scissors");
    }
    else {
        return("player has entered invalid move");
    }
}

console.log(rockPaperScissors("paper"));*/

const rockPaperScissors = (move) => {
    if(move === "rock") {
        return "rock";
    }
    else if(move === "scissors") {
        return "scissors";
    }
    else if(move === "paper") {
        return "paper";
    }
    else return "invalid option";
}
console.log(rockPaperScissors("rock"));

// mental health check

let mentalHealth = "good today";
let motivation = "strong";

if(mentalHealth === "bad" && motivation === "low") {
    console.log("selfcare");
}
else if(mentalHealth === "good" && motivation === "low") {
    console.log("smoke");
}
else if(mentalHealth === "good" && motivation === "strong") {
    console.log("slay");
}
else {
    console.log("sleep in");
}


// shirt size check

const selectShirtSize = (size) => {

    if(size >= 20 && size < 30) {
        return "Size S";
    }

    else if(size >= 30 && size < 40) {
        return "Size M";
    }

    else if(size >= 40 && size < 50) {
        return "Size L";
    }

    else {
        return "out of stock";
    }
}
console.log(selectShirtSize(24))
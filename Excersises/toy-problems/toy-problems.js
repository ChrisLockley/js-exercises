// fizzbuzz problem w/ array

let fizzBuzz = function(n) {
    let i = 1;
    let array = [];
    while (i <= n) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push("FizzBuzz");
        } else if (i % 3 === 0) {
            array.push("Fizz");
        } else if (i % 5 === 0) {
            array.push("Buzz");
        } else {
            array.push(i);
        }
        i += 1;
    }
    return array
}
console.log(fizzBuzz(100));

// reverse word

// reverse a word without using the built-in reverse method
// input: string
// output: string

let bruhMove = function(string) {
    let drow = "";
    while (string.length > 0) {
        //  last letter of string and concat to drow
        drow += string[string.length - 1];
        string = string.slice(0, string.length - 1); 
    }
    return drow;
}
console.log(bruhMove("bruh"));
 
// "bruh" | ""
// "bru"  | "h"
// "br"   | "hu"
// "b"    | "hur"
// ""     | "hurb"
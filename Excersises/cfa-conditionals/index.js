//1 write a condition that checks if num1 is greater than num 2 and 
//if it is return true else return false

const isGreater = (num1, num2) => {
  if (num1 >= num2) {
    return "true"
  } 
  else {
    return "false"
  }
}

console.log(isGreater(1, 1))

//2 write a condition that checks if age is greater or equal to 13 
//and less than or equal to 19 if it is then return true, else 
//return false

const isTeenager = (age) => {
  if (age >= 13 && age <= 19) {
    return "true";
  }
  else {
    return "false";
  }
}
console.log(isTeenager(15))

//3 write a function that checks season

const favoriteSeason = (season) => {
  if (season = "summer") {
    return "summer is your favorite season"
  }
  else if  (season = "spring") {
    return "spring is your favorite season"
  }
  else if (season = "winter") {
    return "winter is your favorite season"
  }
  else if  (season = "fall") {
    return "fall is your favorite season"
  }
  else {
    return "input is not a season, try again"
  }
}
console.log(favoriteSeason("winter"))
  

//4

const determineGrade = (grade) => {
  if (grade >85 && grade <= 100) {
    return "A"
  }
  else if (grade > 80 && grade <= 85) {
    return "A-"
  }
  else if (grade > 70 && grade <= 80) {
    return "B"
  }
  else if (grade > 60 && grade <= 70) {
    return "C"
  }
  else if (grade > 50 && grade <= 60) {
    return "D"
  }
  else if (grade > 40 && grade <= 50) {
    return "E"
  }
  else if (grade <= 35) {
    return 'candidate failed'
  }
  else {
    return 'invalid grade entered'
  }
}
console.log(determineGrade(70))

// groceryPicker exercise

const groceryPicker = (liquid, fruit) => {
  if (liquid === "orange juice" || fruit === "rasberries"){
    return "nice you have a snack";
  } 
  else {
    return "go grocery shopping";
  }
}

console.log(groceryPicker("coffee", "chips"));
console.log(groceryPicker("orange juice", "strawberries"));

// checkWeather function exercise

const checkWeather = (weather, temp) => {
  if ((weather === "sunny") && (temp === "warm")) {
    return "go outside";
  } 
  else if ((weather === "sunny") && (temp === "cold")) {
    return "get a coffee"
  } 
  else if ((weather === "cloudy") && (temp === "warm")) {
    return "take a walk"
  } 
  else if ((weather === "cloudy" || weather === "stormy") && (temp === "cold")) {
    return "stay in"
  } 
  else {
    return "valid"
  }
}

console.log(checkWeather("sunny", "warm"))
console.log(checkWeather("sunny", "cold"))
console.log(checkWeather("cloudy", "warm"))
console.log(checkWeather("cloudy", "cold"))

// OR

const tripPlanner = (airplanePrice, covidVaxStatus) => {
  if (airplanePrice < 100 || covidVaxStatus === "vaccinated") {
    return "go see the fam"
  }
  else if (airplanePrice >= 100 || covidVaxStatus === "vaccinated") {
    return "stay home"
  }
  else {
    return "wait and see"
  }
}
console.log(tripPlanner(70, "vaccinated"))
console.log(tripPlanner(100, "unvaccinated"))
console.log(tripPlanner(3000, "has covid"))

// ???

let bird = "hawk";
if(bird != "hawk"){
  console.log("does not equal");
}

// arrays

let games = ["halo", "zelda", "skyrim", "cod"];
console.log(games[1]);

let index = 2;
console.log(games[index]);

games[0] = "mario kart";
console.log(games);

console.log(games. length);

games.push("halo");
console.log(games);

games.pop();
console.log(games);

// create an array

let drugs = ["weed", "nic", "lean", "liq", "zans"]
console.log(drugs[2]);
console.log(games. length);

drugs.push("oxi")
console.log(drugs)
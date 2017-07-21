// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'leo';
let name2 = name;
console.log(name, name2);
name = 'yibi';
console.log(name, name2);

// Array
const players = ['Leo', 'Yibi', 'Tom', 'Poppy'];
const team = players;
console.log(players, team);
team[3] = 'Tommy'; //The original array will be changed
console.log(players, team);

// Copy array
const team2 = players.slice(); //Copy the original array and paste to team2
team2[3] = 'Lux';
console.log(players, team2);
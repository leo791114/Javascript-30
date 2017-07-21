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
// Copy array - slice()
const team2 = players.slice(); //Copy the original array and paste to team2
team2[3] = 'Lux';
console.log(players, team2);

// Copy array - concat()
const team3 = [].concat(players); //Method two
console.log(team3, players);

// Copy array - ES6 spread --> take every items out of your iterable and put it into the containing
const team4 = [...players];
team4[3] = 'Yee Hee';
console.log(players, team4);

// Copy array - Array.from()
const team5 = Array.from(players);
team5[3] = 'cool';
console.log(players, team5);


// Objects
const person = {
    name: 'Leo Liou',
    age: 25
};

// Objects - reference
const captain = person;
captain.number = 99;
console.log(person, captain);

// Copy -- Object.assign()
const captain2 = Object.assign({}, person, { num: 100 });
console.log(person, captain2);

// Copy -- ES6 spread
// const captain3 = {...person};

// 1 level constraint - this is only 1 level deep - both for Arrays and Objects
// Lodash has a cloneDeep method, but you should think twice before using it.

const leo = {
    name: 'Leo',
    age: '25',
    social: {
        twitter: '@leoliou',
        facebook: 'leoliou'
    }
};

console.log(leo);
const dev = Object.assign({}, leo);
dev.age = '100';
dev.social.twitter = '@hiMan';
console.log(leo, dev); // leo's social.twitter will be changed simultaneously

// Another way to solve 1 level problem.
const dev2 = JSON.parse(JSON.stringify(leo));
dev2.social.twitter = '@coolman';
console.log(leo, dev2);

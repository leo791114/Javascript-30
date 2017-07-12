const dogs = [{
        name: 'Snickers',
        age: 2
    },
    {
        name: 'hugo',
        age: 8
    }
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
var test = 'test'
console.log('Hello I am a %s string!', 'test');
console.log(`Hello I am ${test} string!`); //ES6 back-ticks

// Styled --> use %c at the very front position to add css style
console.log('%c test', 'font-size: 20px; background: #7ae16f; text-shadow: 2px 2px 0 #954edc;');

// Warning!
console.warn('Oh! Warning');

// Error
console.error('Shit, errors!');

// Info
console.info('Crocodiles eat three to four people per year');

// Testing
console.assert(1 === 1, 'That is wrong');
console.assert(1 === 2, 'That is wrong');
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), "Don't have that class");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})

// counting

console.count('Leo');
console.count('Yibi');
console.count('Leo');
console.count('Yibi');
console.count('Leo');
console.count('Yibi');
console.count('Yibi');
console.count('Leo');
console.count('Yibi');
console.count('Yibi');
console.count('Leo');

// Timing
console.time('Fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('Fetching data');
        console.log(data);
    });

// Table
console.table(dogs);
const inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];

const people = ['Beck, Glenn', 'Cecker, Carl', 'Aeckett, Samuel', 'Beddoes, Mick', 'Deecher, Henry'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// Method one:
function filterByYear(inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true; // keep it
    }
    // we can just ignore return false, and just return the one we want
}
const fifteen = inventors.filter(filterByYear);

// Method two: 
const fifteen_two = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);
console.table(fifteen_two);

// Array.prototype.map() --> map() always return the same amount of items as we give
// 2. Give us an array of the inventor first and last names

// Method one: 
const fullName = inventors.map(function (inventor) {
    return `${inventor.first} ${inventor.last}`;
});

// Method two:

const fullName_two = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

console.log(fullName);
console.log(fullName_two)

// Array.prototype.sort()
// 3. Sort the inventors by birthday, oldest to youngest

// Method one:
function sortByBirthday(a, b) {
    if (a.year < b.year) {
        return -1;
    } else if (a.year > b.year) {
        return 1;
    } else {
        return 0;
    }
}
const ordered = inventors.sort(sortByBirthday);

// Method two:

const ordered_two = inventors.sort((a, b) => a.year > b.year ? 1 : a.year < b.year ? -1 : 0);
console.table(ordered);
console.table(ordered_two);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

// Method one:
const years = inventors.reduce(function (totalAge, inventor) {
    return totalAge + (inventor.passed - inventor.year);
}, 0);

// Method two:
const years_two = inventors.reduce((totalAge, inventor) => {
    return totalAge + (inventor.passed - inventor.year);
}, 0);

console.log(years);
console.log(years_two);

// 5. Sort the inventors by years lived

function sortByAge(a, b) {
    const preInventorAge = a.passed - a.year;
    const nextInventorAge = b.passed - b.year;
    return preInventorAge > nextInventorAge ? 1 : preInventorAge < nextInventorAge ? -1 : 0;
}

const oldest = inventors.sort(sortByAge);
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links_two = [...category.querySelectorAll('a')]; //... ES6 spread/rest operator
// const links = Array.from(category.querySelectorAll('a'));
// .querySelector could work on any DOM element. It's not necessary to be document element.
// const de = links
//     .map(link => link.testContent)
//     .filter(streetName => streetName.includes('de'));

// 7. sort Excerise
// Sort the people alphabetically by last name

function sortByLastName(lastOne, nextOne) {
    const firstArr = lastOne.split(', ');
    const nextArr = nextOne.split(', ');
    return firstArr[0] > nextArr[0] ? 1 : -1;
}
const alpha = people.sort(sortByLastName);
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function (obj, item) {
    console.log(item);
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log(transportation);
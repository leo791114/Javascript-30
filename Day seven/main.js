const people = [{
        name: 'Wes',
        year: 1988
    },
    {
        name: 'Kait',
        year: 1986
    },
    {
        name: 'Irv',
        year: 1970
    },
    {
        name: 'Lux',
        year: 2015
    },
];
const comments = [{
        text: 'Love this!',
        id: 523423
    },
    {
        text: 'Super good',
        id: 823423
    },
    {
        text: 'You are the best',
        id: 2039842
    },
    {
        text: 'Ramen is my fav food ever',
        id: 123523
    },
    {
        text: 'Nice Nice Nice!',
        id: 542328
    }
];

// Some and Every checks
// Array.prototype.some() --> at leat one item fullfill the requirement
// Method one:
const isAdult1 = people.some(function (person) {
    const currentYear = (new Date()).getFullYear();
    if (currentYear - person.year >= 19) {
        return true;
    }
});

// Method two:
const isAdult2 = people.some(person => (new Date()).getFullYear() - person.year >= 19);
console.log(isAdult1);
console.log(isAdult2);

// Array.prototype.every() --> check whether every item passed the test or not
const allAdults = people.every(person => (new Date()).getFullYear() - person.year >= 19);
console.log(allAdults);

// Array.prototype.find() --> returns the value of the 'first' element in the array that satisfies the testing function
// Find is like filter, but instead returns just the one you are looking for
// ex: Find comment with the ID of 823423

const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex() --> Find the first element that satisfies the testing function. Otherwise -1 is return.
// Find the comment with this ID
// Delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id == 823423);
console.log(index);

// Method one for deleting 
// If use newComments = comments, both of them are referencing the same computer memory address 
const newComments = comments.slice(0);
newComments.splice(index, 1);
console.table(newComments);

// Method two for deleting
const newComments2 = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];
console.table(newComments2);
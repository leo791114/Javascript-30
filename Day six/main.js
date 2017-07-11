const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const cities1 = [];
const cities2 = [];

// const prom = fetch(endpoint);
// console.log(prom);
// const blob = prom.then(blob => blob.json());
// console.log(blob);
// const data1 = blob.then(data => cities1.push(...data));
// console.log(data1);
// console.log(cities1);
const data = fetch(endpoint).then(blob => blob.json())
    .then(data => cities2.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched 
        const matches = new RegExp(wordToMatch, 'gi');
        return place.city.match(matches) || place.state.match(matches);
    });
}

function displayMatches() {
    console.log(this.value);
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);
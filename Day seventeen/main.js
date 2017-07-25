const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsList = document.querySelector('#bands');
console.log(bandsList);

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// bands.sort((a, b) => {
//     if (strip(a) < strip(b)) {
//         return -1;
//     } else if (strip(a) > strip(b)) {
//         return 1;
//     }
//     return 0;
// });

// bandsList.innerHTML = bands.map(band => {
//     return `
//     <li>${band}</li>
//     `;
// }).join('');

const sortedBands = bands.sort((a, b) => strip(a) < strip(b) ? -1 : strip(a) > strip(b) ? 1 : 0);
bandsList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
console.log(sortedBands);
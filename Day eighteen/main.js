const timeNodes = [...document.querySelectorAll('[data-time]')];
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeNode => {
        const [mins, secs] = timeNode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, vidseconds) => total + vidseconds);
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);

// Method two: use single reduce function
const seconds2 = timeNodes.reduce(function (total, timeNode) {
    const [mins2, secs2] = timeNode.dataset.time.split(':').map(parseFloat);
    return total + ((mins2 * 60) + secs2);
}, 0);
console.log(seconds2);
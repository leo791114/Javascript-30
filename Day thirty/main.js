const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('.player_info');
const recordButton = document.querySelector('.record');
const recordList = document.querySelector('.showRecords')
const player = document.querySelector('[name=player]');
const records = JSON.parse(localStorage.getItem('Records')) || [];
let lastHole;
let timeUp = false;
let recordShowed = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        console.log("Ah nah that's the same one bud");
        return randomHole(holes);
    }
    // console.log(idx);
    // console.log(hole);
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    // console.log(time, hole);
    hole.classList.add('up');
    setTimeout(function () {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame(e) {
    e.preventDefault();
    // console.log(e);
    scoreBoard.textContent = 0;
    timeUp = false;
    peep();
    setTimeout(function () {
        timeUp = true;
        addRecord();
        score = 0;
    }, 2000);
}

function bonk(e) {
    // console.log(e);
    if (!e.isTrusted) return; //Cheater!
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

function addRecord() {
    // console.log(player.value);
    const playerName = player.value;
    const record = {
        Name: playerName,
        Score: score
    };
    records.push(record);
    // console.log(record);
    // console.log(records);
    console.log(records);
    populateRecordList(records, recordList);
    console.log(records);
    localStorage.setItem('Records', JSON.stringify(records));
    startButton.reset();
}

function populateRecordList(records = [], recordList) {
    sortList(records);
    recordList.innerHTML = records.map((record, i) => {
        return `
        <li>${record.Name} : ${record.Score}</li>
        `
    }).join('');
}

function sortList(recordList) {
    recordList.sort((a, b) => {
        if (a.Score > b.Score) {
            return -1;
        } else if (a.Score < b.Score) {
            return 1;
        } else {
            return 0;
        }
    });
}

moles.forEach(mole => mole.addEventListener('click', bonk));

startButton.addEventListener('submit', startGame);
recordButton.addEventListener('click', () => {
    if (!recordShowed) {
        recordList.classList.add('show');
        recordShowed = !recordShowed;
    } else {
        recordList.classList.remove('show');
        recordShowed = !recordShowed;
    }
})

document.addEventListener('DOMContentLoaded', populateRecordList(records, recordList));

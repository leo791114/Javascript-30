// let shiftPressed = false;
// const inbox = document.querySelector('.inbox');
// const inputCheckBox = [...document.querySelectorAll('input[type="checkbox"]')];
// console.log(inputCheckBox);

// function findCheckedBox() {
//     let checkedIndex = inputCheckBox.findIndex(checkbox => checkbox.checked == true);
//     console.log(checkedIndex);
// }

// inbox.addEventListener('change', findCheckedBox)
const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkBoxes);

let lastChecked;

function handleCheck(e) {
    // Check if they had the shift key down
    // And check that they are checking it
    // The shiftKey property returns a Boolean value that indicates whether or not the "SHIFT" key was pressed when the mouse event was triggered.
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkBoxes.forEach(checkbox => {
            // This is where our sausage gets made
            // loop over every sigle checkbox
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log(checkbox);
                console.log(inBetween);
            }
            if (inBetween) {
                checkbox.checked = true;
            }
            console.log(checkbox);
        });
    }

    lastChecked = this;
    // console.log(lastChecked);
    // console.log(e);
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// BUGs: hold on shift first and it will select all the items
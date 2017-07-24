const addItems = document.querySelector('.add-items');
const itemLists = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
console.log(items);

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;

    const item = {
        // text: text,
        text, //ES6 short hand property;
        done: false
    };
    items.push(item);
    console.table(items);
    populateList(items, itemLists);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}


// Create the actual HTML
function populateList(inputs = [], inputList) {
    inputList.innerHTML = inputs.map((input, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${input.done ? 'checked' : ''}/>
                <label for="item${i}">${input.text}</label>
            </li>
        `;
    }).join('');
}


// Event delegation --> Listen to something higher, and then, inside of it, we check if it's the actual thing we want.
function toggleDone(e) {
    if (!e.target.matches('input')) return; //Skip this unless it's an input
    const eventTarget = e.target;
    const targetIndex = eventTarget.dataset.index;
    console.log(eventTarget);
    console.log(eventTarget.dataset.index);
    console.log(items[targetIndex]);
    console.log(items[targetIndex].done);
    items[targetIndex].done = !items[targetIndex].done;
    console.log(items[targetIndex].done);
    localStorage.setItem('items', JSON.stringify(items));

}


addItems.addEventListener('submit', addItem);
itemLists.addEventListener('click', toggleDone);
populateList(items, itemLists);

// const checkBoxes = document.querySelectorAll('input');
// checkBoxes.forEach(input => input.addEventListener('click', () => alert('hi')));
// console.log(checkBoxes);
// The above doesn't work because whole list items are create after the defining of checkBoxes.



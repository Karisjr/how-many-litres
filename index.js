//1) Create a variable 'count' which will stater as '0'
//3)change the count-el in the HTML to reflect the new count
let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let restEl = document.getElementById("reset-el")

//2) listen for 'onClicks' on the increment button - this is created within the HTML document on the button element
function increment() {
    //2a)increment the count variable when the button is clicked (console log this)
    count += 1
    //3a)
    countEl.textContent = count
}

//4) Now repeat but for decrement
function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Amount from previous day: "
}

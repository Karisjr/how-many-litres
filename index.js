//1) Create a variable 'count' which will stater as '0'
//3)change the count-el in the HTML to reflect the new count
let count = 1;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let decrementEl = document.getElementById("decrement-btn")

//2) listen for 'onClicks' on the increment button - this is created within the HTML document on the button element
function increment() {
    //2a)increment the count variable when the button is clicked (console log this)
    count += 1
    //3a)
    countEl.textContent = count
//We do not want this count to go under 0
    if (count > 1) {
        decrementEl.disabled = false
    } 
}

//4) Now repeat but for decrement
function decrement() {
    //We do not want this count to go under 0
    count -= 1
    countEl.textContent = count

    if (count <= 1) {
        decrementEl.disabled = true;
        return
    }
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

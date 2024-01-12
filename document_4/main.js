console.log(document.getElementsByTagName('h1')[0].innerHTML = "new text")

let color_button = document.getElementById('color-button')
console.log(color_button)

function color_change() {
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if(header_text == 'new text'){
        document.getElementsByTagName('h1')[0].className = 'color-change'
    } else {
        header_text = 'something else'
    }
}

// creating an event listening - changing the text color via click
color_button.addEventListener('click', color_change)

// adding a new button in JS
let button = document.createElement('button')
let button_display = document.createElement('h2')
// add inner text to the button
button.innerHTML = 'i am alive'
document.body.append(button)

button.addEventListener('click', function() {
    button_display.innerHTML = 'more js info here..'
    document.body.append(button_display)
})

// grab copied text -- then place into a clipboard
const source = document.querySelector('div.source');
source.addEventListener('copy', ( event ) => {
    console.log(ClipboardEvent)
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase())
    event.preventDefault();
})

// grabbing form data from a submit event
const form = document.querySelector('#testDataForm')

// add event listening for submit event
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let query_first = document.querySelector('#first-name')
    let query_last = document.querySelector('#last-name')
    let first_name = event.path[0][0].value;
    let last_name = event.path[0][1].value;
    console.log(event)
    console.log(first_name, last_name)
    console.log(`this came from the query selector ${query_first.value}, ${query_last.value}`)
})
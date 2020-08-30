let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
screenValue = '';

for (items of buttons) {
    items.addEventListener('click', (e) => {
        // console.log(e.target);
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == 'C') {
            screen.value = '';
            screenValue='';
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value=screenValue; 
        }
    })
}

// buttons[0].addEventListener('click', (e) => {
//     // console.log(e.target);
//     buttonText = e.target.innerText;
//     console.log(buttonText);
// })
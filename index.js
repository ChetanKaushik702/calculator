var operator = null;
var result = NaN;
const input = document.getElementById('input');
const res = document.getElementById('result');
var keys = "";


function keyDown(event) {
    let key = getClass(event);
    if (key != null) {
        console.log(key);
        keys = document.getElementsByClassName(key);
        console.log(keys[0]);
        keys[0].classList.add('keyDown');
        setTimeout(removeTransition, 100);
        console.log(keys[0].classList);
    }
    if (event.key === "=" || event.key == 'Enter') {
        if (operator == null) {
            res.textContent = result;
        } else {
            const str = input.textContent.split(operator);
            if (str.length == 2) {
                let operand1 = str[0];
                let operand2 = str[1];
                switch (operator) {
                    case '+':
                        result = parseFloat(operand1) + parseFloat(operand2);
                        break;
                    case '-':
                        result = parseFloat(operand1) - parseFloat(operand2);
                        break;
                    case '*':
                        result = parseFloat(operand1) * parseFloat(operand2);
                        break;
                    case '/':
                        result = parseFloat(operand1) / parseFloat(operand2);
                        break;
                }

                res.textContent = result;
            } else {
                res.textContent = result;
            }

        }
    } else {
        if ( (event.key >= 0 && event.key <= 9) ) {
            input.textContent += event.key ;
        }
        else if (event.key == '-' || event.key == '+' || event.key == '*' || event.key == '/') {
            input.textContent += event.key ;
            operator = event.key;
        }
        else if (event.key == 'C' || event.key == 'c') {
            input.textContent = "";
            res.textContent = "";
        }
    }
}

function click() {
    if (this.textContent === "=") {
        if (operator == null) {
            res.textContent = result;
        } else {
            const str = input.textContent.split(operator);
            if (str.length == 2) {
                let operand1 = str[0];
                let operand2 = str[1];
                switch (operator) {
                    case '+':
                        result = parseFloat(operand1) + parseFloat(operand2);
                        break;
                    case '-':
                        result = parseFloat(operand1) - parseFloat(operand2);
                        break;
                    case '*':
                        result = parseFloat(operand1) * parseFloat(operand2);
                        break;
                    case '/':
                        result = parseFloat(operand1) / parseFloat(operand2);
                        break;
                }

                res.textContent = result;
            } else {
                res.textContent = result;
            }

        }
    } else {
        if ( (this.textContent >= 0 && this.textContent <= 9) ) {
            input.textContent += this.textContent ;
        }
        else if (this.textContent == '-' || this.textContent == '+' || this.textContent == '*' || this.textContent == '/') {
            input.textContent += this.textContent ;
            operator = this.textContent;
        }
        else if (this.textContent == 'C') {
            input.textContent = "";
            res.textContent = "";
        }
    }
}

function removeTransition() {
    keys[0].classList.remove('keyDown');
}

function getClass(event) {
    const key = event.key;
    let val = null;
    switch (key) {
        case '1':
            val = 'one';
            break;
        case '2':
            val = 'two';
            break;
        case '3':
            val = 'three';
            break;
        case '4':
            val = 'four';
            break;
        case '5':
            val = 'five';
            break;
        case '6':
            val = 'six';
            break;
        case '7':
            val = 'seven';
            break;
        case '8':
            val = 'eight';
            break;
        case '9':
            val = 'nine';
            break;
        case '0':
            val = 'zero';
            break;
        case '-':
            val = 'minus';
            break;
        case '+':
            val = 'plus';
            break;
        case '*':
            val = 'star';
            break;     
        case '/':
            val = 'divide';
            break;
        case '=':
            val = 'equal';
            break;  
        case 'C':
        case 'c':
            val = 'clear';
            break; 
    }
    return val;
}

var elements = Array.from(document.querySelectorAll(".wrapper div"));
elements.forEach(element => element.addEventListener('click', click));
window.addEventListener('keydown', keyDown); 
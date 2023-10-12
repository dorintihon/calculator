function add(number1, number2){
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    
    // Perform addition
    return num1 + num2;
}

function substract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

function operate(operator, number1, number2){
   if(operator === "+"){
    return add(number1,number2);
   }else if (operator === "-"){
    return substract(number1,number2);
   } else if (operator === "*"){
    return multiply(number1,number2);
   }else if (operator === "/"){
    return divide(number1,number2);
   }else {
    return number1
   }
}

var screen = document.createElement('div');
screen.className = 'screen';

var display = document.createElement('input');
display.className = 'display';
display.type = 'text';
display.style.width = "280px";
display.style.height = "50px";
display.style.fontSize = "24px";
display.style.textAlign = "right";
display.readOnly = true;


var buttons = document.createElement('div');
buttons.className = 'buttons_container'

buttons.style.display = 'grid';
    buttons.style.border = '1px solid green';
    buttons.style.width = '200px'
    buttons.style.height = '200px'
    buttons.style.gridTemplateRows = `repeat(${3}, 1fr)`;
    buttons.style.gridTemplateColumns = `repeat(${3}, 1fr)`;

    let storedValue = '';

for (let i = 9; i >= 0; i--) {
    var button = document.createElement('button');
    button.className = 'numberButton';
    button.textContent = i;

    // Add event listener to change color on mouseover
    button.addEventListener('click', function() {
        if (display.value === 'Nothing to solve'){
            display.value = '';
        }
        display.value += i;
        storedValue += i; // Update storedValue
        console.log(storedValue);
        
    });

    buttons.appendChild(button);
}
var equals = document.createElement('button');
equals.textContent = '='
var clear = document.createElement('button');
clear.textContent = 'C'
clear.addEventListener('click', function(){
    display.value = '';
    storedValue = '';
})

var operators = document.createElement('div');

    operators.style.width = '200px'
    operators.style.height = '50px'
var operator = ["+", '-', '*', '/']
const regex = /([+\-*/])/; 

for (var i = 0; i < operator.length; i++){
    var opButton = document.createElement('button');
    opButton.className = 'opButton';
    opButton.textContent = operator[i];
    opButton.style.height = '50px';
   

    (function(operatorValue) {
        opButton.addEventListener('click', function() {
            // If storedValue already contains an operator
            if (regex.test(storedValue)) {
                let storedArray = storedValue.split(regex);
                let result = operate(storedArray[1], parseFloat(storedArray[0]), parseFloat(storedArray[2]));
                display.value = result + operatorValue;
                storedValue = result + operatorValue;
            } else {
                display.value += operatorValue;
                storedValue += operatorValue; // Update storedValue
            }
            console.log(storedValue);
        });    
    })(operator[i]);

    operators.appendChild(opButton);
}

equals.addEventListener('click', function(){
    if(display.value === '' || display.value === 'Nothing to solve'){
        display.value = 'Nothing to solve'
    }else{
    let storedArray = storedValue.split(regex);
    console.log(storedValue);
    console.log(storedArray);
    storedValue = operate(storedArray[1], storedArray[0], storedArray[2])
    display.value = storedValue;
    }

})

operators.appendChild(equals);
operators.appendChild(clear);

screen.appendChild(display);

document.body.appendChild(screen);
document.body.appendChild(operators);
document.body.appendChild(buttons);
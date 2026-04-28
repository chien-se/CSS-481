let display = document.getElementById('display');
let result = 0;
let operator = null;
let waitingForNewValue = false;

function appendNumber(num) {
  if (waitingForNewValue) {
    display.value = num;
    waitingForNewValue = false;
  } else {
    display.value += num;
  }
}

function appendOperator(op) {
  const currentValue = parseFloat(display.value);

  if (operator !== null) {
    result = performCalculation(result, currentValue, operator);
    display.value = result;
  } else {
    result = currentValue;
  }

  operator = op;
  waitingForNewValue = true;
}

function appendDecimal() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = '';
  result = 0;
  operator = null;
  waitingForNewValue = false;
}

function calculate() {
  if (operator === null) return;

  const currentValue = parseFloat(display.value);
  result = performCalculation(result, currentValue, operator);
  display.value = result;
  operator = null;
  waitingForNewValue = true;
}

function performCalculation(firstNumber, secondNumber, op) {
  switch (op) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
    default:
      return secondNumber;
  }
}

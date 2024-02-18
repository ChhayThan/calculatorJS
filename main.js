const display = document.querySelector("#display");
const btn = document.querySelectorAll("button");
let firstNum = "";
let operator = "";
let secondNum = "";

btn.forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target;
    if (button.innerText == "AC") {
      clearAll();
      return;
    } else if (target.classList.contains("numberKeys")) {
      if (button.innerText == ".") {
        if (display.value.includes(".")) {
          return;
        }
      }
      display.value += button.innerText;
    } else if (button.innerText == "+/-") {
      let currentNum = display.value;
      display.value = sign(currentNum);
    } else if (button.innerText == "%") {
      let currentNum = display.value;
      display.value = percentage(currentNum);
    }

    if (target.classList.contains("operatorKeys") && button.innerText !== "=") {
      firstNum = display.value;
      display.value = "";
      if (button.innerText == "x") {
        operator = "*";
      } else {
        operator = button.innerText;
      }
    }

    if (button.innerText == "=") {
      secondNum = display.value;
      //console.log(firstNum, operator, secondNum);
      display.value = evaluate(firstNum, operator, secondNum);
    }
  });
});

function clearAll() {
  display.value = "";
  displayValue = "";
  firstNum = "";
  secondNum = "";
  operator = "";
}

function evaluate(firstNum, operator, secondNum) {
  if (firstNum == "" || operator == "" || secondNum == "") {
    return "ERROR";
  }
  let result = 0;
  let firstNumber = Number(firstNum);
  let secondNumber = Number(secondNum);

  if (operator == "÷") {
    if (secondNum == 0) {
      return "Bruh";
    }
    result = firstNumber / secondNumber;
  } else if (operator == "*") {
    result = firstNumber * secondNumber;
  } else if (operator == "-") {
    result = firstNumber - secondNumber;
  } else if (operator == "+") {
    result = firstNumber + secondNumber;
  }

  if (result.toString().includes(".")) {
    let splitResult = result.toString().split(".");
    let decimal = splitResult[1];

    if (decimal.toString().length > 6) {
      return result.toFixed(5);
    }
  }
  return result;
}

function sign(currentNum) {
  let result = "-";
  if (currentNum == "") {
    return currentNum;
  }
  if (currentNum.includes("-")) {
    result = currentNum.slice(1);
  } else {
    result += currentNum;
  }
  return result;
}

function percentage(currentNum) {
  return currentNum / 100;
}

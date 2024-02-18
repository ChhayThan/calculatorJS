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
      console.log(firstNum, operator, secondNum);
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
  if (operator == "÷") {
    result = firstNum / secondNum;
  } else if (operator == "*") {
    result = firstNum * secondNum;
  } else if (operator == "-") {
    result = firstNum - secondNum;
  } else if (operator == "+") {
    result = firstNum + secondNum;
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

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
    }

    if (target.classList.contains("operatorKeys") && button.innerText !== "=") {
      firstNum = display.value;
      display.value = "";
      if ((button.innerText = "x")) {
        operator = "*";
      } else {
        operator = button.innerText;
      }
      //console.log(firstNum, operator);
    }

    if (button.innerText == "=") {
      secondNum = display.value;
      display.value = eval(`${firstNum} ${operator} ${secondNum}`);
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

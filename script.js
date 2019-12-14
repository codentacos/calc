let num = document.querySelectorAll(".num");
let display = document.querySelector("#input");
let operator = document.querySelectorAll(".operator");
let equalOp = document.querySelector("#equals");
let result = 0;
let currentNum = "";
let lastNum = "";
let currentOperator = "";

init();

function init() {
  clickNum();
  operatorClick();
  calculate();
}

function clickNum() {
  //add function to all num class buttons
  for (let i = 0; i < num.length; i++) {
    //get number data on click
    num[i].addEventListener("click", function() {
      //update currentNum with clicked numbers
      currentNum += this.value;
      currentNum = Number(currentNum);
      updateDisplay(currentNum);
    });
  }
}

function updateDisplay(v) {
  //update input to display clicked numbers
  display.value = v;
}

function calculate() {
  equalOp.addEventListener("click", function() {
    if (result === 0) {
      result = eval(lastNum + currentOperator + currentNum);
    } else {
      result = eval(result + currentOperator + currentNum);
    }
    updateDisplay(result);
    clearNum();
  });
}

function operatorClick() {
  // set currentOperator based on clicked operator
  for (let i = 0; i < operator.length; i++) {
    //   result = Number(currentNum);

    operator[i].addEventListener("click", function() {
      // checks for clicked operator
      if (this.value === "+") {
        currentOperator = "+";
        lastNum = currentNum;
        currentNum = "";
      }

      if (this.value === "-") {
        currentOperator = "-";
        lastNum = currentNum;
        currentNum = "";
      }

      if (this.value === "*") {
        currentOperator = "*";
        lastNum = currentNum;
        currentNum = "";
      }

      if (this.value === "/") {
        currentOperator = "/";
        lastNum = currentNum;
        currentNum = "";
      }

      if (this.value === "c") {
        //clears calculator
        currentOperator = "c";
        currentNum = "";
        result = 0;
        clearNum();
        updateDisplay(0);
      }
    });
  }
}

function clearNum() {
  lastNum = "";
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");

const inputHistory = document.getElementById("input-history");
const inputResult = document.getElementById("input-result");
inputResult.value = "0";

const btnAdd = document.getElementById("btn-add");
const btnMinus = document.getElementById("btn-minus");
const btnDvid = document.getElementById("btn-devid");
const btnMulti = document.getElementById("btn-multi");
const btnCE = document.getElementById("btn-ce");
const btnC = document.getElementById("btn-c");
const btnBack = document.getElementById("btn-back");
const btnSign = document.getElementById("btn-sign");
const btnFloat = document.getElementById("btn-float");
const btnEqual = document.getElementById("btn-equal");

let mustReset = false;
let currentResult = 0;
let operand = "";

btn1.addEventListener("click", function () {
  appendNumber(1);
});
btn2.addEventListener("click", function () {
  appendNumber(2);
});
btn3.addEventListener("click", function () {
  appendNumber(3);
});
btn4.addEventListener("click", function () {
  appendNumber(4);
});
btn5.addEventListener("click", function () {
  appendNumber(5);
});
btn6.addEventListener("click", function () {
  appendNumber(6);
});
btn7.addEventListener("click", function () {
  appendNumber(7);
});
btn8.addEventListener("click", function () {
  appendNumber(8);
});
btn9.addEventListener("click", function () {
  appendNumber(9);
});
btn0.addEventListener("click", function () {
  appendNumber(0);
});

btnCE.addEventListener("click", function () {
  inputResult.value = "0";
});
btnC.addEventListener("click", function () {
  inputResult.value = "0";
  inputHistory.value = "";
  currentResult = 0;
  mustReset = false;
});

btnEqual.addEventListener("click", function () {
  processEqual();
});

btnAdd.addEventListener("click", function () {
  doOperand("+");
});
btnMinus.addEventListener("click", function () {
  doOperand("-");
});
btnDvid.addEventListener("click", function () {
  doOperand("/");
});
btnMulti.addEventListener("click", function () {
  doOperand("*");
});

btnBack.addEventListener("click", function () {
  oneLetterBack();
});

btnFloat.addEventListener("click", function () {
  addPoint();
});

function appendNumber(number) {
  let oldValue;
  if (Boolean(mustReset)) {
    oldValue = "0";
    mustReset = false;
  } else {
    oldValue = inputResult.value.toString();
  }
  if (oldValue.lenght > 15) {
    return;
  } else {
    if (oldValue === "0") {
      if (number === "0") {
        inputResult.value = "0";
      } else {
        inputResult.value = number;
      }
    } else {
      inputResult.value = oldValue + number;
    }
  }
}

function doOperand(nextOperand) {
  let result = inputResult.value;
  let oldHistory = inputHistory.value;
  inputHistory.value = oldHistory + " " + result + " " + nextOperand;
  compute(result);
  inputResult.value = currentResult;
  operand = nextOperand;
  mustReset = true;
}
function compute(number) {
  if (operand === "+") {
    currentResult += parseInt(number);
  }
  if (operand === "-") {
    currentResult -= parseInt(number);
  }
  if (operand === "/") {
    currentResult /= parseInt(number);
  }
  if (operand === "*") {
    currentResult *= parseInt(number);
  }
  if (operand === "") {
    currentResult = parseInt(number);
  }
}
function processEqual() {
  let result = inputResult.value;
  compute(result);
  inputResult.value = currentResult;
  operand = "";
  mustReset = true;
  inputHistory.value = "";
}
function oneLetterBack() {
  let old = inputResult.value.toString();
  let newValue = old.substring(0, old.length - 1);
  inputResult.value = newValue;
}

function addPoint() {
  if (Boolean(mustReset)) {
    inputResult.value = "0";
    mustReset = false;
  }
  let oldvalue = inputResult.value.toString();
  if (oldvalue.includes(".")) {
    return;
  }
  if (oldvalue.lenght > 15) {
    return;
  }
  inputResult.value = oldvalue + ".";
}

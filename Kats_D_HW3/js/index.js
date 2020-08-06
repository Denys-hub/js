// задание 1

let number = Number(prompt("Enter a Number"));
if (number > 10) {
  alert("Big");
} else if (number < 10) {
  alert("Smole");
} else {
  number = 10;
  alert("Equally");
}

// задание 2

let number1 = Number(prompt("How old are you?"));
if (number1 > 18) {
  alert("Hello big boy");
} else if (number1 < 18) {
  alert("Access is denied");
} else {
  number1 = 18;
  alert("Hello big boy");
}

// Задание 3

let firstNumber = Number(prompt("Enter a number 1"));
let secondNumber = Number(prompt("Enter a number 2"));
let thirdNumber = Number(prompt("It's last  a number 3 "));
if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  alert(firstNumber);
}
if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  alert(secondNumber);
}
if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
  alert(thirdNumber);
}
// Задание 4

const c = "test";
const p = "password";
let a = prompt("Please enter your login");
if (a === c) {
  let b = prompt("Please enter your password");
  if (b === p) {
    alert("Ypaaaaaa");
  } else {
    alert("Паррль не верен");
  }
} else {
  alert("Нет такого пользователя");
}

// Задание 5

const t = "pasword";
let v = prompt("Please enter your password");
if (t === v) {
  let m = prompt("Please enter new password");
  let ter = prompt("Please repic new password");
  if (m === ter && m !== t && ter !== t) {
    alert("Password creat");
  } else {
    alert("Password  dont created");
  }
} else {
  alert("Нет такого пользователя");
}

// Задание 6
const us = "usd";
const eu = "eur";
let wer = prompt("Please select a currency 'usd or eur'");
if (wer === us) {
  let wer1 = prompt("Enter the amount'usd'");
  alert(wer1 * 27.67);
}
if (wer === eu) {
  let wer2 = prompt("Enter the amount'eur'");
  alert(wer2 * 31);
}

// Задание *

const top1 = Number(prompt("Введите первое число"));
const top2 = Number(prompt("Введите второе число"));
const top3 = Number(prompt("Результат"));
if (top3 === top1 * top2) {
  alert(top3 === top1 * top2);
} else {
  alert(top1 * top2);
}

// Задание **

let userCho = prompt("Выберите камень1 , ножници2 или бумага3");
let computerChoice = Math.random();
if (computerChoice < 0.33) {
  computerChoice = "камень1";
} else if (computerChoice <= 0.66) {
  computerChoice = "бумага3";
} else {
  computerChoice = "ножници2";
}
let choice1 = userCho;
let choice2 = computerChoice;
alert("Компьтер : " + choice2);

let compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    return "Ничья";
  } else if (choice1 === "камень1") {
    if (choice2 === "ножници2") {
      return "камень wins";
    } else {
      return "бумага wins";
    }
  } else if (choice1 === "бумага3") {
    if (choice2 === "камень1") {
      return "бумага wins";
    } else {
      return "ножници wins";
    }
  } else if (choice1 === "ножници2") {
    if (choice2 === "бумага3") {
      return "ножници wins";
    } else {
      return "камень wins";
    }
  }
};
alert(compare(choice1, choice2));

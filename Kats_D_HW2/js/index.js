//  Задание 1

console.log(1 == 2)

console.log(1 != 2)

console.log(1 == 1)

console.log(1 != 1)

console.log("text" == 5)

console.log("text" != 5)

console.log("text" == "Text")

console.log("text" == "text")

console.log(true == "true")

console.log(true == false)

console.log(false == 0)

console.log("" == false)

console.log("" !== false)

console.log(undefined === null)

console.log(undefined == null)

console.log(17 === true)

console.log("17" === true)

console.log({} === {})

// задание 2
let NumberOne = Number(prompt("Enter a number"))
console.log(NumberOne % 2 == 0)

// задание 3
let NumberTwo = Number(prompt("Enter a number"))
console.log(NumberTwo % 2 == 1)

// задание 4
let n = 10
console.log(n += 10)
console.log(n -= 5)
console.log(n *= 2)
console.log(n /= 4)

// задание 5
let a = "100"
console.log(typeof Number(a))
console.log(typeof(a / 5))
console.log(typeof +a)

// задание 6
let b = 10
let c = 5
let square1 = (b + c) * (b - c)
let square2 = b ** 2 - c ** 2
console.log(square1,square2)


// *1
let firstNumber = Number(prompt("Enter a number 1")) + 10
let secondNumber = Number(prompt("Enter a number 2")) + 10
let thirdNumber = Number(prompt("It's last  a number 3 ")) + 10
alert(firstNumber + secondNumber + thirdNumber)

// *2
let sideA = Number(prompt("First side"))
let sideB = Number(prompt("Second side"))
let sideC = Number(prompt("Last side"))
alert((sideA + sideB) > sideC && (sideB + sideC) > sideC && (sideA + sideC) > sideB)

// *3
let x = 10
let y = 5
let q = (x + y) ** 3
let z = x ** 3 + (3 * (x ** 2) * y) + (3 * x * (y ** 2)) + y ** 3
console.log(q,z)
console.log(q === z)
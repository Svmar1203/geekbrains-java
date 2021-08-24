/**
 * Функция складывает параметры.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

let a = 3;
let b = 5;

function addition(a, b) {
    return a + b;
}



/**
 * Функция вычитает из параметра a параметр b.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function subtraction(a, b) {
    return a - b;
}

/**
 * Функция делит параметр a на b.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function division(a, b) {
    return a / b;
}

/**
 * Функция умножает параметр a на b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function multiplication(a, b) {
    return a * b;
}

/**
 * Функция получает 2 числа и делает сложение, вычитание, умножение, деление.
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation, операция может быть "+", "-", "/", "*"
 * @returns {number}
 * throw {Error}, выбрасывает ошибку, если функции не существует.
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена");
    }
}

console.log(mathOperation(3, 5, "+"));
console.log(mathOperation(3, 5, "-"));
console.log(mathOperation(3, 5, "/"));
console.log(mathOperation(3, 5, "*"));
console.log(mathOperation(3, 5, "lorem"));




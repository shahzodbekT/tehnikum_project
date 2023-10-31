let firstNum = Number(prompt("Введите первое число"))
let symbol = prompt("Введите действие (+ - * /)")
let secondNum = Number(prompt("Введите второе число"))

if (symbol=="+" || symbol=="-" || symbol=="*" || symbol=="/") {
    if (symbol=="+") {
        alert(firstNum + secondNum)
    }
    if (symbol=="-") {
        alert(firstNum - secondNum)
    }
    if (symbol=="*") {
        alert(firstNum * secondNum)
    }
    if (symbol=="/") {
        alert(firstNum / secondNum)
    }
}
else {
    alert("Извините, походу вы сделали что-то не так")
}
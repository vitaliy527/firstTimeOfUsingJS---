let waHtSh = 6;
let wayShtSp = 3;
let waySptP = 11;
console.log("Общий маршрут займет: " + (waHtSh + wayShtSp + waySptP) + " минут");
console.log("Дойдя от дома ло магазина до конца пути останется " + (wayShtSp + waySptP) + " минут");
console.log("Дойля от магазина до спортзала до конца пути останется " + waySptP + " минут");
console.log("Дойдя от спортзала до парка ваш путь закончится")
console.log("500" + 500);

//Домашка:D

let filmName = "Человек-чебурек: Месть пельменей";
let time = "15:30";
let cinema = "Pro100Kino";
console.log("Кинотеатр " + cinema + ". Билет на сеанс " + filmName + " в " + time + " забронирован");

console.log("Я загадал число от 1 до 10. Попробуй угадать его!");

let secretNumber = Math.floor(Math.random() * 10) + 1;
let attemps = 3;
while(attemps > 0){
    let userNumber = Number(prompt("Введите число: "));
    if (userNumber > secretNumber) {
        console.log("Загаданное число меньше!");
        attemps--;
        console.log("У вас осталось " + attemps + " попытки");
    }
    else if (userNumber < secretNumber) {
        console.log("Загаданное число больше!");
        attemps--;
        console.log("У вас осталось " + attemps + " попытки");
    }
    else{
        console.log("ВЫ угадали!");
        break;
    }
}

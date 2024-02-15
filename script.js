function gameNumber(){
    console.log("Я загадал число от 1 до 10. Попробуй угадать его!");
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let attemps = 3;
    while(attemps > 0){
        let userNumber = Number(prompt("Введите число: "));
        if (userNumber > secretNumber) {
            console.log("Загаданное число меньше!");
            attemps--;
            if (attemps > 0){
            console.log("У вас осталось " + attemps + " попытки");  
            }
            else{
                console.log("Вы проиграли!");
                isGameAcctive = false;
            }
        }
        else if (userNumber < secretNumber) {
            console.log("Загаданное число больше!");
            attemps--;
            if (attemps > 0){
                console.log("У вас осталось " + attemps + " попытки");  
            }
            else{
                console.log("Вы проиграли!");
                isGameAcctive = false;
            }
        }
        else{
            console.log("Вы угадали и победили!");
            isGameAcctive = false;
            break;
        }
    }
    repeatGame();
}

function repeatGame(){
    let repeatGame = prompt("Хотите повторить?(Y/N)")
    if (repeatGame === "y" || repeatGame === "Y"){
        gameNumber();
    }
}
gameNumber();

 




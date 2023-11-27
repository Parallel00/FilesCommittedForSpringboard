// Timer Practice
// Ethan Bailey-Mcneill
// November 10, 2023

function countDown(number) {
    let input = setInterval(function () {
        number--;
        if (number <= 0) {
            clearInterval(input);
            console.log("Ignition!");
        } else {
            console.log(input);
        }
    }, 1000)
}

function randomGame() {
    let randomnum;
    let tries = 0;
    let timer = setInterval(function () {
        randomnum = Math.random();
        tries++
        if (randomnum > .75) {
            clearInterval(timer);
            console.log("Number of tries:" + tries);
        }
    }, 1000)
}

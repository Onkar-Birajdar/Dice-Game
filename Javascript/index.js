function randNum() {
    var randInt = Math.floor(Math.random() * 6+1);
    return randInt;
}
function changeHeading(randInt1, randInt2) {
    if (randInt1 > randInt2) {
        document.querySelector("h1").innerHTML = "🚩    Player 1 Wins!";
    } else if (randInt1 < randInt2) {
        document.querySelector("h1").innerHTML= "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
function rollDice() {
    var randInt1 = randNum();
    var randInt2 = randNum();
    var src1 = "/images/dice" + randInt1 + ".png";
    var src2 = "/images/dice" + randInt2 + ".png";
    document.querySelector(".img_1").setAttribute("src", src1);
    document.querySelector(".img_2").setAttribute("src", src2);
    changeHeading(randInt1, randInt2);
    document.querySelector(".img_1").setAttribute("alt", randNum());
    document.querySelector(".img_2").setAttribute("alt", randNum());
}
// document.querySelector(".btn").addEventListener("click", rollDice);
rollDice();
document.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) window.location.reload();
});

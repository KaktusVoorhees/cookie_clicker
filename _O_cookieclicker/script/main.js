let runes = 0;
let generating = 0;
let multiplier = 1;
let price1 = 50;
let price2 = 100;
let price3 = 500;
let price4 = 1000;
let price5 = 2000;
let price6 = 4000;

function getRunes() {
    runes += multiplier;
    updateInnerHTML();
}

function autoRunes() {
    runes += generating;
    setTimeout(autoRunes, 1000)
    updateInnerHTML()
}

function updateInnerHTML() {
    document.getElementById("genInner").innerHTML = generating;
    document.getElementById("mulInner").innerHTML = multiplier;
    document.getElementById("rune-count").innerHTML = runes;
    document.getElementById("rune-count").innerHTML = runes;
    document.getElementById("price1").innerHTML = price1;
    document.getElementById("price2").innerHTML = price2;
    document.getElementById("price3").innerHTML = price3;
    document.getElementById("price4").innerHTML = price4;
    document.getElementById("price5").innerHTML = price5;
    document.getElementById("price6").innerHTML = price6;
}

function buyItem1() {
    if (runes >= price1) {
        runes -= price1;
        generating++;
        multiplier++;
        price1 += 50;
    }
    updateInnerHTML();
}

function buyItem2() {
    if (runes >= price2) {
        runes -= price2;
        generating += 10;
        multiplier += 10;
        price2 += 100;
    }
    updateInnerHTML();
}

function buyItem3() {
    if (runes >= price3) {
        runes -= price3;
        generating += 25;
        multiplier += 25;
        price3 += 500;
    }
    updateInnerHTML();
}

function buyItem4() {
    if (runes >= price4) {
        runes -= price4;
        generating += 50;
        multiplier += 50;
        price4 += 1000;
    }
    updateInnerHTML();
}

function buyItem5() {
    if (runes >= price5) {
        runes -= price5;
        generating += 100;
        multiplier += 100;
        price5 += 2000;
    }
    updateInnerHTML();
}

function buyItem6() {
    if (runes >= price6) {
        runes -= price6;
        generating += 200;
        multiplier += 200;
        price6 += 4000;
    }
    updateInnerHTML();
}
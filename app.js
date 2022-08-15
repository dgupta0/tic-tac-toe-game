const p1Input = document.getElementById("p1-val")
const p2Input = document.getElementById("p2-val");
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")
const b5 = document.getElementById("b5")
const b6 = document.getElementById("b6")
const b7 = document.getElementById("b7")
const b8 = document.getElementById("b8")
const b9 = document.getElementById("b9")
const r1 = document.getElementById("r1")
const btnClass = document.getElementsByClassName("btn")
console.log(btnClass)
const announce = document.getElementById("announce")
const reset = document.getElementById("reset")

let p1Val = p1Input.value;
let p2Val = p2Input.value;
let p1Selected = false;
let p2Selected = false;

p1Input.addEventListener("change", function () {
    p1Val = p1Input.value;
    if (p1Val === "O") {
        p1Selected = true;
        p2Input.selectedIndex = 2
        p2Val = p2Input.value
        p1Input.disabled = true;
        p2Input.disabled = true;

    } else if (p1Val === "X") {
        p1Selected = true;
        p2Input.selectedIndex = 1
        p2Val = p2Input.value
        p1Input.disabled = true;
        p2Input.disabled = true;
    }
})
p2Input.addEventListener("change", function () {
    p2Val = p2Input.value
    if (p2Val === "O") {
        p2Selected = true;
        p1Input.selectedIndex = 1
        p1Val = p1Input.value
        p1Input.disabled = true;
        p2Input.disabled = true;

    } else if (p2Val === "X") {
        p2Selected = true;
        p1Input.selectedIndex = 2
        p1Val = p1Input.value
        p1Input.disabled = true;
        p2Input.disabled = true;
    }

})
b1.addEventListener("click", function () {
    whoseTurn(b1)
})
b2.addEventListener("click", function () {
    whoseTurn(b2)
})
b3.addEventListener("click", function () {
    whoseTurn(b3)
})
b4.addEventListener("click", function () {
    whoseTurn(b4)
})
b5.addEventListener("click", function () {
    whoseTurn(b5)
})
b6.addEventListener("click", function () {
    whoseTurn(b6)
})
b7.addEventListener("click", function () {
    whoseTurn(b7)
})
b8.addEventListener("click", function () {
    whoseTurn(b8)
})
b9.addEventListener("click", function () {
    whoseTurn(b9)
})

function whoseTurn(btn) {
    if (p1Selected) {
        btn.innerText = p1Val;
        btn.disabled = true;
        btn.style.color = "black";
        p1Selected = false;
        p2Selected = true;
        hasWon(p1Val)

    } else if (p2Selected) {
        btn.innerText = p2Val;
        btn.disabled = true;
        btn.style.color = "black";
        p2Selected = false;
        p1Selected = true;
        hasWon(p2Val)
    }
}

function hasWon(playerVal) {
    let winningValues = playerVal + playerVal + playerVal;
    let allBtnDisabled = 0;
    if (b1.innerText + b2.innerText + b3.innerText === winningValues ||
        b4.innerText + b5.innerText + b6.innerText === winningValues ||
        b7.innerText + b8.innerText + b9.innerText === winningValues ||
        b1.innerText + b4.innerText + b7.innerText === winningValues ||
        b2.innerText + b5.innerText + b8.innerText === winningValues ||
        b3.innerText + b6.innerText + b9.innerText === winningValues ||
        b1.innerText + b5.innerText + b9.innerText === winningValues ||
        b3.innerText + b5.innerText + b7.innerText === winningValues) {
        if (playerVal === p1Val) {
            for (let i = 0; i < btnClass.length; i++) {
                btnClass[i].disabled = true;
            }
            announce.innerText = "Player One Wins! 🥳"
        } else if (playerVal === p2Val) {
            for (let i = 0; i < btnClass.length; i++) {
                btnClass[i].disabled = true;
            }
            announce.innerText = "Player Two Wins! 🥳"
        }
    }
    else {
        for (let i = 0; i < btnClass.length; i++) {
            if (btnClass[i].disabled === true) {
                allBtnDisabled += 1
            }
        } if (allBtnDisabled === 9) {
            announce.innerText = "It's a draw!!"
        }
    }
}
reset.addEventListener("click", function () {
    p1Input.disabled = false;
    p2Input.disabled = false;
    p1Input.selectedIndex = 0
    p2Input.selectedIndex = 0
    p1Selected = false;
    p2Selected = false;
    announce.innerText = ""
    p1Val = p1Input.value;
    p2Val = p2Input.value;
    for (let i = 0; i < btnClass.length; i++) {
        btnClass[i].disabled = false;
        btnClass[i].innerText = "";
    }
})

console.log(p1Val)
console.log(p2Val)

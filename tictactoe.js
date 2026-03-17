let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const wincon = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        
        check();
    });
});

const showWinner = (val1)=> {
    msg.innerText = `Congratulation!!!! Player ${val1}`;
    msgContainer.classList.remove("hide");
    disable();
};

const showDraw = () => {
    msg.innerText = "It's a draw! Play again?";
    msgContainer.classList.remove("hide");
    disable();
};

const disable = () => {
    for ( let b of boxes) {
        b.disabled = true;
    }
};

const check = () => {
    for(let win of wincon) {
        let val1 = boxes[win[0]].innerText;
        let val2 = boxes[win[1]].innerText;
        let val3 = boxes[win[2]].innerText;
         
        if(val1!="" && val2!="" && val3!="") {
            if(val1 === val2 && val2 === val3) {
                showWinner(val1);
            }
        }
    }

    // Check for draw
    let isDraw = true;
    for(let box of boxes) {
        if(box.innerText === "") {
            isDraw = false;
            break;
        }
    }
    if(isDraw) {
        showDraw();
    }
};

const resetGame = ()=> {
    turnO = true;
    enable();
    msgContainer.classList.add("hide");
}

const enable = () => {
    for ( let b of boxes) {
        b.disabled = false;
        b.innerText="";
    }
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click", resetGame);


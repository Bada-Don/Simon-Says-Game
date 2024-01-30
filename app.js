let glowSeq = [];
let userSeq = [];
let levelInfo = document.querySelector('h3');
let start = 'Press any key to start !!!';
let over = `Game Over!!! Press any key to continue.`
let btns = document.getElementsByClassName('box');
let glowBtn = 0;  // Corrected variable name
let gameStart = false;
let currLevel = 0;

document.addEventListener('keypress', function (event) {
    if (!gameStart) {
        gameStart = true;
        levelUp();
        console.log("Game has started");
    }
});

function flashBtn() {
    console.log("The btn flashes");
    let randIdx = Math.floor(Math.random() * 4);
    let btn = btns[randIdx];

    btn.style.backgroundColor = "white";
    setTimeout(() => {
        btn.style.backgroundColor = "";
    }, 250);

    glowSeq.push(`${randIdx}`);
    glowBtn = randIdx;  // Corrected variable assignment
    console.log(glowSeq);
}
function blink() {
    if ((levelInfo.textContent === start) || (levelInfo.textContent === over)) {
        if (levelInfo.classList.contains('hidden')) {
            levelInfo.classList.remove('hidden');
        } else {
            levelInfo.classList.add('hidden');
        }
    }
}


function levelUp() {
    userSeq = [];
    currLevel++;
    levelInfo.textContent = `Level ${currLevel}`;
    levelInfo.classList.remove('hidden');
    flashBtn();
}


setInterval(blink, 1000);



if (currLevel === 1) {
    document.addEventListener('click', function (event) {
        if (event === glowBtn) {
            console.log("Correct click!");
            levelUp();
        }
    });
}
function btnPress() {
    let btn = this;
    let btnId = btn.getAttribute("id");
    userSeq.push(btnId);
    console.log(userSeq);
    chkAnswer(currLevel - 1);

}
let allBtns = document.querySelectorAll(".box");
for (btn of allBtns) {
    btn.addEventListener('click', btnPress);
}

function chkAnswer(idx) {
    if (userSeq[idx] === glowSeq[idx]) {
        if (userSeq.length === glowSeq.length) {
            levelUp();
        }
    }
    else {
        console.log("Wrong Click!");
        levelInfo.innerText = over;
    }
}

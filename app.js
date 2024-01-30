let glowSeq = [];
let userSeq = [];
let levelInfo = document.querySelector('h3');
let start = 'Press any key to start !!!';
let over = `Game Over!!! Press any key to continue.`
let btns = document.getElementsByClassName('box');
let glowBtn = 0;  // Corrected variable name
let gameStart = false;
let currLevel = 0;
let score = document.querySelector('h4');
let instruct = document.getElementById('instruct');
let reset = document.getElementById(`reset`);
document.addEventListener('keypress', function () {
    if (!gameStart) {
        gameStart = true;
        levelUp();
        console.log("Game has started");
        instruct.innerHTML = `<h5>Game has started !!!</h5>`;
        instruct.style.top = '50%'
    }
});

function blink() {
    if ((levelInfo.textContent === start) || (levelInfo.textContent === over)) {
        if (levelInfo.classList.contains('hidden')) {
            levelInfo.classList.remove('hidden');
        } else {
            levelInfo.classList.add('hidden');
        }
    }
}

setInterval(blink, 1000);

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
function levelUp() {
    userSeq = [];
    currLevel++;
    levelInfo.textContent = `Level ${currLevel}`;
    levelInfo.classList.remove('hidden');
    flashBtn();
}
function chkAnswer(idx) {
    score.innerText = `Your Score is: ${currLevel}`;
    if (userSeq[idx] === glowSeq[idx]) {
        if (userSeq.length === glowSeq.length) {
            setTimeout(levelUp(), 500);
            instruct.innerHTML = `<h5>Correct Click !!!</h5>`;
        }
    }
    else {
        console.log("Wrong Click!");
        instruct.innerHTML = `<h5>Wrong Click !!!</h5>`;
        levelInfo.innerText = over;
        document.body.style.backgroundColor = 'red';
        setTimeout(() => {
            document.body.style.backgroundColor = '';
        }, 250);
        setTimeout(() => {
            document.body.style.backgroundColor = 'red';
        }, 500);
        setTimeout(() => {
            document.body.style.backgroundColor = '';
        }, 750);
    }
}
function btnPress() {
    let btn = this;
    let btnId = btn.getAttribute("id");
    userSeq.push(btnId);
    console.log(userSeq);
    chkAnswer(userSeq.length - 1);

}
let allBtns = document.querySelectorAll(".box");
for (btn of allBtns) {
    btn.addEventListener('click', btnPress);
}

reset.addEventListener('click', () => {
    levelInfo.innerText = start;
    instruct.innerHTML = `<h5>Instructions</h5>
                          <div class="intructP">
                            <p>
                               1. Press any key to start the game.<br />
                               2. Click the button which flashes.<br />
                               3. Keep clicking the same color as it flashes until all buttons light up.<br />
                               4. If you click a different color, you will lose a life and have to restart from zero.
                            </p>
                         </div>`
    currLevel = 0;
    glowSeq = [];
    userSeq = [];
    score.innerText = `Your Score is: 0`;
    instruct.style.top = '34%';
    gameStart = false;
});
let levelInfo = document.querySelector('h3');

let start = 'Press any key to start !!!';

let btns = document.getElementsByClassName('box');

let glowSeq = [];
let userSeq = [];

let gameStart = false;
let currLevel = 0;

function blink() {
    if (levelInfo.textContent === start) {
        if (levelInfo.classList.contains('hidden')) {
            levelInfo.classList.remove('hidden');
        }
        else {
            levelInfo.classList.add('hidden');
        }
    }
}

function levelUp() {
    currLevel++
}

function flashBtn(btn) {
    if (btn = btns[0]) {
        btn.classList.add(`flash0`);
        setTimeout(() => {
            btn.classList.remove(`flash0`);
        }, 1000)
    }
    else if (btn = btns[1]) {
        btn.classList.add(`flash1`);
        setTimeout(() => {
            btn.classList.remove(`flash1`);
        }, 1000)
    }
    else if (btn = btns[2]) {
        btn.classList.add(`flash2`);
        setTimeout(() => {
            btn.classList.remove(`flash2`);
        }, 1000)
    }
    else if (btn = btns[3]) {
        btn.classList.add(`flash3`);
        setTimeout(() => {
            btn.classList.remove(`flash3`);
        }, 1000)
    }
}

setInterval(blink, 1000);
if (levelInfo.textContent === start) {
    document.addEventListener('keypress', function (event) {
        levelUp();
        levelInfo.textContent = `Level ${currLevel}`;
        levelInfo.classList.remove('hidden');
        flashBtn(btns[0]);
    });
}

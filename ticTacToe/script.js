let currentPlayer = "X";
let arr = Array(9).fill(null);
const msg = document.getElementById('msg')
const cells = document.querySelectorAll('.col');

function disableGrid() {
    cells.forEach(i => {
        i.classList.add('disabled');
        i.removeAttribute('onclick');
    })
}

function checkWinner() {
    if (
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
        msg.innerText = `Winner is ${currentPlayer}`;
        disableGrid();
        return;
    }
    if (!arr.some((e) => e === null)) {
        msg.innerText = `Match Draw!!`;
        return;
    }
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] !== null) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
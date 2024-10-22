const board = document.getElementById('board');

// Shaxmat taxtasini yaratish
for (let i = 0; i < 64; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
}

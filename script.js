class Minesweeper {
    constructor() {
        this.board = Array(9).fill('')

        this.isGameOver = false;

        this.cells = [];

        this.boardEl = document.querySelector('.board-shell');
        this.resetBtn = document.querySelector('#reset');

        this.init();
    }

    init = () => {
        this.boardEl.innerHTML = '';
        this.cells = [];

        this.board.map((_, index) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            cell.addEventListener('click', () => this.handleMove(index));
            this.boardEl.appendChild(cell);
            this.cells.push(cell);
        });

        this.resetBtn.addEventListener('click', this.resetGame);
    };

    handleMove = () => {

    }

    resetGame = (AQUIVAALGO) => {
    }
}
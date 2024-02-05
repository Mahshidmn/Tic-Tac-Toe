
/*----- state variables -----*/
const state = {
    board: null,
    player: 'x'
};


/*----- cached elements  -----*/
const squares = document.querySelectorAll('.square');

/*----- event listeners -----*/
squares.forEach(function(square) {
    square.addEventListener('click', placeTile);
});


/*----- functions -----*/
init();

function init() {
    state.board = {
        'top-left': null, 'top-center': null, 'top-right': null,
        'center-left': null, 'center-center': null, 'center-right': null,
        'bottom-left': null, 'bottom-center': null, 'bottom-right': null,
    };
    state.player = 'x';
    render();
        
    }


function render() {
    for (let id in state.board) {
        document.getElementById(id).innerText = state.board[id];
    }
}

function placeTile() {
    const id = this.id;
    //console.log('the click tile was', this);
    if (state.board[id]) return;
    state.board[id] = state.player;
    state.player = state.player === 'x' ? 'o' : 'x';    

    render();
}

//Todo: add a reset button that clears the content of the page
const game = new Game ();

const startButton = document.querySelector('#begin-game');

// startButton.addEventListener('click', function(){
//     game.startGame();

//     this.style.display = 'none'; //this refers to startButton
//     document.querySelector('#play-area').style.opacity = '1';
// });

//Rewritten with arrow function
startButton.addEventListener('click', () => { //startGame() relies on the context of the game object; so can't just use 'startGame' as simple callback, need anonymous function here
    game.startGame(); 

    startButton.style.display = 'none';
    document.querySelector('#play-area').style.opacity = '1';
});

/** 
 * Listen for keyboard presses
 */

document.addEventListener('keydown', function(event){
    //console.log(event.key); //outputs a string naming the pressed key 
    game.handleKeydown(event);
});

// const board = new Board ();
// console.log(board);
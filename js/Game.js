//What should be objects? 

//The game pieces, red vs. yellow as separate objects
//The user interacts by moving them with arrows and dropping them in a column
//Their position on the x axis will change one unit based on user input, left vs. right
//Should the playing table be an object?
//When player hits enter, the current piece falls to the bottom of the grid (Y position of 0)
//Then automatically switches color to next turn?
//If this were React, state would be the position and color of the current piece

//Winning: Could we number each circle on the grid and use conditionals to determine winner? T/F for if there is a row with the same color?
//Not sure how I would do that.

//CLASSES: GAME, PLAYER, BOARD, SPACES, TOKEN

class Game {
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;

    }
    
    //Returns active player
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    //Creates two player objects in an array
    createPlayers(){
        let playerOne = new Player("Player1", 1, "#e15258", true);
        let playerTwo = new Player("Player2", 2, "#e59a13");
        const players = [playerOne, playerTwo];
        return players;
    }

    /** 
    * Initializes game. 
    */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;

    }

    /**
 * Branches code, depending on what key player presses
 * @param   {Object}    e - Keydown event object
 */

handleKeydown(e) {
    if (this.ready) {
        if (e.key === "ArrowLeft") {
            this.activePlayer.activeToken.moveLeft();
        } 
        else if (e.key === "ArrowRight") {
            this.activePlayer.activeToken.moveRight(this.board.columns);
        } 
        else if (e.key === "ArrowDown") {
            this.playToken();
        }
    }
}

playToken() {
    let spaces = this.board.spaces;
    let activeToken = this.activePlayer.activeToken;
    let targetColumn = spaces[activeToken.columnLocation];
    let targetSpace = null;
    
    for (let space of targetColumn) {
        if (space.token === null) {
            targetSpace = space;
        }

    }

    if (targetSpace !== null) {
        const game = this;
        game.ready = false;
        activeToken.drop(targetSpace, function() {
            game.updateGameState(activeToken, targetSpace);
        });
    }
}



/** 
 * Checks if there a winner on the board after each token drop.
 * @param   {Object}    Targeted space for dropped token.
 * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
 */

checkForWin(target){
    const owner = target.token.owner;
    let win = false;

    // vertical
    for (let x = 0; x < this.board.columns; x++ ){
        for (let y = 0; y < this.board.rows - 3; y++){
            if (this.board.spaces[x][y].owner === owner && 
                this.board.spaces[x][y+1].owner === owner && 
                this.board.spaces[x][y+2].owner === owner && 
                this.board.spaces[x][y+3].owner === owner) {
                    win = true;
            }           
        }
    }

    // horizontal
    for (let x = 0; x < this.board.columns - 3; x++ ){
        for (let y = 0; y < this.board.rows; y++){
            if (this.board.spaces[x][y].owner === owner && 
                this.board.spaces[x+1][y].owner === owner && 
                this.board.spaces[x+2][y].owner === owner && 
                this.board.spaces[x+3][y].owner === owner) {
                    win = true;
            }           
        }
    }

    // diagonal
    for (let x = 3; x < this.board.columns; x++ ){
        for (let y = 0; y < this.board.rows - 3; y++){
            if (this.board.spaces[x][y].owner === owner && 
                this.board.spaces[x-1][y+1].owner === owner && 
                this.board.spaces[x-2][y+2].owner === owner && 
                this.board.spaces[x-3][y+3].owner === owner) {
                    win = true;
            }           
        }
    }

    // diagonal
    for (let x = 3; x < this.board.columns; x++ ){
        for (let y = 3; y < this.board.rows; y++){
            if (this.board.spaces[x][y].owner === owner && 
                this.board.spaces[x-1][y-1].owner === owner && 
                this.board.spaces[x-2][y-2].owner === owner && 
                this.board.spaces[x-3][y-3].owner === owner) {
                    win = true;
            }           
        }
    }

    return win;
}

/** 
 * Updates game state after token is dropped. 
 * @param   {Object}  token  -  The token that's being dropped.
 * @param   {Object}  target -  Targeted space for dropped token.
 */

updateGameState (token, target) {
    target.mark(token);

    if (!this.checkForWin(target)) { //if it's not a win
        this.switchPlayers();

        if (this.activePlayer.checkTokens()) { //Do they have tokens? 
            this.activePlayer.activeToken.drawHTMLToken(); //if it's true, then draw some more tokens
            this.ready = true;
        } else {
            this.gameOver('No more Tokens!');
        }
    } else {
        this.gameOver(`${target.owner.name} wins!`);
    }
   
}


/** 
 * Switches active player. 
 */

switchPlayers() {
    for (let player of this.players) {
       player.active = player.active === true ? false : true;
    }
}


/** 
 * Displays game over message.
 * @param {string} message - Game over message.      
 */

gameOver(message) {
    document.getElementById("game-over").style.display = "block";
    document.getElementById("game-over").textContent = message;
}


    
}
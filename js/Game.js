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

    
}
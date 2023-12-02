//possible properties: color, id matching player id, position?, status: played t/f
class Token {
    constructor(index, owner) {
        this.owner = owner; 
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }
    

    drawHTMLToken () {
        const token = document.createElement('div');
        document.querySelector('#game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color; //accessing the color property in Player object
        
    }

     /** 
     /*Gets associated htmlToken. Returns the specific 'div' element created above.
     * @return  {element}   Html element associated with token object.
     */
     get htmlToken() {
        return document.getElementById(this.id);
    }
    
    /** 
     * Gets left offset of html element.
     * @return  {number}   Left offset of token object's htmlToken.
     */
    get offsetLeft () {
        return this.htmlToken.offsetLeft;

    }

    moveLeft() {
        if (this.columLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation -= 1;
        }

    }

    moveRight(columns) { //Numbered column -- example, 6, 7 
        if (this.columnLocation < columns - 1) { //checking that it's column location is not less than 0, our starting point
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocacation += 1;
        }


    }

    
}
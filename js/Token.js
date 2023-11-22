//possible properties: color, id matching player id, position?, status: played t/f
class Token {
    constructor(index, owner) {
        this.owner = this.owner; 
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
    
    /** 
     * Gets associated htmlToken.
     * @return  {element}   Html element associated with token object.
     */
    get htmlToken() {
        return document.getElementById(this.id);
    }


    drawHTMLToken () {
        const token = document.createElement('div');
        document.querySelector('#game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color; //accessing the color property in Player object
        
    }

    
}
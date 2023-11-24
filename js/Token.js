//possible properties: color, id matching player id, position?, status: played t/f
class Token {
    constructor(index, owner) {
        this.owner = owner; 
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
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

    
}
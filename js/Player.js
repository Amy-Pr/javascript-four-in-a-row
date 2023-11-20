class Player {

    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active; //to track turns
        this.tokens = this.createTokens(21);
    }

/**
  * Creates token objects for player
  * @param   {integer}   num - Number of token objects to be created
  * @return  {array}     tokens - an array of new token objects
  */
    createTokens(num) { //Don't need keyword "function" when this method is inside a class
        const tokens = [];
        for (i = 1; i < num; i++) {
            let token = new Token (i, this); //The loop index and the owning player object is passed to the Token constructor (first two arguments)
            tokens.push(token);
        }

        return tokens;
    }
 
}


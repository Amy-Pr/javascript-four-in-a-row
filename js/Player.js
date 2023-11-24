class Player {

    constructor(name, id, color, active = false) { //last one is called a "default parameter"
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
        for (let i = 1; i < num; i++) {
            let token = new Token (i, this); //The loop index and the owning player object is passed to the Token constructor (first two arguments)
            tokens.push(token);
        }

        return tokens;
    }

    //gets all tokens that haven't been dropped.
    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped);
    }

    //gets the active token by returning the first oken in the array of unused tokens
    get activeToken () {
        return this.unusedTokens[0];
    }
 
}


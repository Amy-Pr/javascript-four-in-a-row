class Board {
    constructor() { //Don't need arguments; we are statically setting the board size.
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();

    }

/** 
 * Generates 2D array of spaces. (An array whose elements are also arrays)
 * @return  {Array}     An array of space objects 
 */

createSpaces() {
    const spaces = [];

        for (x = 0; x < this.columns; x++) {
            const column = []; //Holds an array of individual space objects within the column; (we are traveling on the x-axis)

            for (y = 0; y < this.rows; y++) { //moving along the y axis
                const space = new Space(x, y);
                column.push(space);
            }
        
            spaces.push(column);

        }

        return spaces;
    }



}



    

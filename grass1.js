


class Grass {
  constructor(x, y) {
    this.x = x 
    this.y = y 
    this.multiply = 0;
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  mul() {
    this.multiply++;
    var newCell = random(this.chooseCell(0));
    // console.log(newCell, this.multiply);
    if (this.multiply >= 3 && newCell) {
      var newGrass = new Grass(newCell[0], newCell[1]);
      grassArr.push(newGrass);
      matrix[newCell[1]][newCell[0]] = 1;
      this.multiply = 0; 
    }
  } 

  chooseCell(character) { // empty cells array [[1,2], [2,4]]
    let found = [] //
    for (let i in this.directions) {
      let x = this.directions[i][0]
      let y = this.directions[i][1]
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) { //
          found.push(this.directions[i])
        }
      }
    }
    return found
  }
}



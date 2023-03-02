
class ClickKerpar {
  constructor(x, y) {
    this.x = x 
    this.y = y
    this.energy = 8;
    this.directions = [];
  }

  mul() {
    if (this.energy >= 10) {
      var newCell = random(this.chooseCell(0)); //newCell-1 datark harevan
      if (newCell) { //[3,4]
        var newGrassEater = new GrassEater(newCell[0], newCell[1]);
        grassEaterArr.push(newGrassEater);
        matrix[newCell[1]][newCell[0]] = 7;
        this.energy = 5

      }
    }
  }
  move() {
    if (this.energy > -100000) {
      this.getNewCoordinates();
      this.energy--;
      let emptyCells = this.chooseCell(0)
      let oneEmptyCell = random(emptyCells)
      if (oneEmptyCell) {
        matrix[this.y][this.x] = 0
        let newX = oneEmptyCell[0]
        let newY = oneEmptyCell[1]
        matrix[newY][newX] = 7
        this.y = newY
        this.x = newX
      }
    }
    else {
      this.die();
    }
  }
  eat() {
    this.getNewCoordinates()
    let grasses = this.chooseCell(1)
    let oneGrass = random(grasses) 
    if (oneGrass) {
      this.energy++;
      matrix[this.y][this.x] = 0;
      let oneGrassX = oneGrass[0];
      let oneGrassY = oneGrass[1];
      matrix[oneGrassY][oneGrassX] = 7;

      this.y = oneGrassY;
      this.x = oneGrassX;
      for (var i in grassArr) {
        if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y) {
          grassArr.splice(i, 1);//[[1,2],[2,3]]
          break;
        }
      }
    } else {
      this.move()
    }    
}  
die() {
  matrix[this.y][this.x] = 0;
  for (var i in clickArr) {
    if (this.x == clickArr[i].x && this.y == clickArr[i].y) {
      clickArr.splice(i, 1);//[[1,2],[2,3]]
      break;
    }
  }
}
}

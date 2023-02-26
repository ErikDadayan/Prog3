class Clicker {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.energy = 8;
      this.directions = [];
    }
    chooseCell(character) {
      this.getNewCoordinates();
      var found = [];
      for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
          if (matrix[y][x] == character) {
            found.push(this.directions[i]);
          }
        }
      }
      return found;
    }
  
    getNewCoordinates() {
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
  

  
    eat() {
      var grasses = this.chooseCell(1);
      var oneGrass = random(grasses);
      if (oneGrass) {
        this.energy++;
        matrix[this.y][this.x] = 0;
        var oneGrassX = oneGrass[0];
        var oneGrassY = oneGrass[1];
        matrix[oneGrassY][oneGrassX] = 7;
        this.y = oneGrassY;
        this.x = oneGrassX;
  
        for (var i in grassArr) {
          //jnjum enq grassArr-ic
          if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y){
  
            grassArr.splice(i, 1);
  
            break;
          }
            //gtnuma xotin zangvaci mejic
  
        }
      } else {
        this.move();
      }
    }
  
    move() {
        if (this.energy > 0) {
          var emptyCells = this.chooseCell(0);
          var oneEmptyCell = random(emptyCells);
          this.energy--;
          if (oneEmptyCell) {
            var neighbX = oneEmptyCell[0];
            var neighbY = oneEmptyCell[1];
            matrix[this.y][this.x] = 0;
            matrix[neighbY][neighbX] = 7;
            this.x = neighbX;
            this.y = neighbY;
    
          }
        } 
        else {
          this.die();
        }
      }
  
    die() {
  
  
      matrix[this.y][this.x] = 0;
      for (var i in clickArr) {
        if (this.x == clickArr[i].x && this.y == clickArr[i].y) {
            clickArr.splice(i, 1);
          break;
        }
      }
    }
  } 
  function mouseClicked() {

    matrix[Math.floor(mouseY/120)][Math.floor(mouseX/120)]=7 

    
  } 

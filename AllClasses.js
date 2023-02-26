
class AllClasses{
    constructor(x,y){
      this.x = x 
      this.y = y
    } 
  
    
  
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
          if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
            grassEaterArr.splice(i, 1);//[[1,2],[2,3]]
            break;
          }
        }
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
          [this.x + 1, this.y + 1]
        ];
      }
      move() {
        if (this.energy > 0) {
          this.energy--;
          var emptyCells = this.chooseCell(0)
          var oneEmptyCell = random(emptyCells);
          if (oneEmptyCell) {
            matrix[this.y][this.x] = 0;
            var newX = oneEmptyCell[0];
            var newY = oneEmptyCell[1];
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;
          }
        } else {
          this.die();
    
        }
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
  }
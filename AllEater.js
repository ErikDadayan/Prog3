class Predator extends AllClasses{
    constructor(x, y) {
        super(x,y)
        this.energy = 8;
        this.direction = [];
    }

  
 
    mul() {
        if (this.energy >= 12) {
            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var pred2 = new Predator(newCell[0], newCell[1]);
                predArr.push(pred2);
                matrix[newCell[1]][newCell[0]] = 3;
                this.energy = 5

            }
        }
    }
    eat() {
        let grasses = this.chooseCell(2);
        let oneGrass = random(grasses);
        if (oneGrass) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let GrassnewX = oneGrass[0]
            let GrassnewY = oneGrass[1]
            matrix[GrassnewY][GrassnewX] = 3
            this.x = GrassnewX
            this.y = GrassnewY
            for (var i in grassEaterArr) {
                if (GrassnewX == grassEaterArr[i].x && GrassnewY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }


            }
        }
        else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in predArr) {
            if (this.x == predArr[i].x && this.y == predArr[i].y) {
                predArr.splice(i, 1);
                break

            }

        }
    }

}



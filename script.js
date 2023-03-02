

var matrix = []
var side = 120;
var grassArr = [];
var grassEaterArr = []
var predArr = []
var kaytakArr = []
var chariqArr = []
var bariqArr = []
var clickArr = []


function setup() {
    function matrixGenerator(size, countGrass, countGrassEater, predatorCount, kaytakCount, chariqCount, bariqCount, clickCout) {
        for (let i = 0; i < size; i++) {
            matrix.push([])
            for (let j = 0; j < size; j++) {
                matrix[i].push(0)
            }

        }
        for (let k = 0; k < countGrass; k++) {
            let x = Math.floor(random(size))
            let y = Math.floor(random(size))
            if (matrix[y][x] == 0) {
                matrix[y][x] = 1
            }
            else {
                k--
            }


        }
        for (let k = 0; k < countGrassEater; k++) {
            let x = Math.floor(random(size))
            let y = Math.floor(random(size))
            if (matrix[y][x] == 0) {
                matrix[y][x] = 2
            }
            else {
                k--
            }
        }
        for (let k = 0; k < predatorCount; k++) {
            let x = Math.floor(random(size))
            let y = Math.floor(random(size))
            if (matrix[y][x] == 0) {
                matrix[y][x] = 3
            }
            else {
                k--
            }
            for (let k = 0; k < kaytakCount; k++) {
                let x = Math.floor(random(size))
                let y = Math.floor(random(size))
                if (matrix[y][x] == 0) {
                    matrix[y][x] = 4

                }
                else {
                    k--
                }



            }

            for (let k = 0; k < chariqCount; k++) {
                let x = Math.floor(random(size))
                let y = Math.floor(random(size))
                if (matrix[y][x] == 0) {
                    matrix[y][x] = 5

                }
                else {
                    k--
                }



            }
            for (let k = 0; k < bariqCount; k++) {
                let x = Math.floor(random(size))
                let y = Math.floor(random(size))
                if (matrix[y][x] == 0) {
                    matrix[y][x] = 6

                }
                else {
                    k--
                }



            } 
            for (let k = 0; k < clickCout; k++) {
                let x = Math.floor(random(size))
                let y = Math.floor(random(size))
                if (matrix[y][x] == 0) {
                    matrix[y][x] = 7

                }
                else {
                    k--
                }



            }

         


        }
    }

    matrixGenerator(30, 80, 4, 3, 10, 4, 4 )
    var fast = +prompt("what speed do you want? (write only a number)") 
    frameRate(fast)
    if(fast == ""){
       alert("not a number")
    }

    
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                let pred1 = new Predator(x, y)
                predArr.push(pred1)
            }
            else if (matrix[y][x] == 4) {
                let kay = new Kaytak(x, y)
                kaytakArr.push(kay)
            }
            else if (matrix[y][x] == 5) {
                let char = new Chariq(x, y)
                chariqArr.push(char)
            }
            else if (matrix[y][x] == 6) {
                let bari = new Bariq(x, y)
                bariqArr.push(bari)
            }
            else if (matrix[y][x] == 7) { 
                let click = new ClickKerpar(x, y) 
        
                clickArr.push(click) 
                
                
            }

        }
    }


}

// function draw() {

//     for (var y = 0; y < matrix.length; y++) {

//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("green");
//                 rect(x * side, y * side, side, side);
//             }

//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 2) {
//                 fill("yellow");
//                 rect(x * side, y * side, side, side);
//             }
//         }


//     }

function draw() {
    background(204);
    var a1 = "summer"
    var b = "winter"
    // if(frameCount == 50)
    //     alert(a) 
    //     else if(frameCount == 100) 
    //     alert(b)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix.length; x++) {
            if (matrix[y][x] == 1) {
                fill('green');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill('#acacac')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 2) {
                fill('yellow')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 3) {
                fill('red')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 4) {
                fill('cyan')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 5) {
                fill('black')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 6) {
                fill('white')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 7) {
                fill('brown')
                rect(x * side, y * side, side, side)
            }

        }
    }




    for (var i = 0; i < grassArr.length; i++) {
        grassArr[i].mul();
    }

    for (var i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].mul()
    }
    for (var i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat()

    }
    for (var i = 0; i < predArr.length; i++) {
        predArr[i].mul()

    }
    for (var i = 0; i < predArr.length; i++) {
        predArr[i].eat()

    }
    for (var i = 0; i < kaytakArr.length; i++) {
        kaytakArr[i].eat()

    }
    for (var i = 0; i < clickArr.length; i++) {
        clickArr[i].eat()

    }
    for (var i = 0; i < clickArr.length; i++) {
        clickArr[i].mul()
    }

    // for (var i = 0; i < chariqArr.length; i++) { 
    //     chariqArr[i].move() 


    // } 
    // for (var i = 0; i < bariqArr.length; i++) { 
    //     bariqArr[i].eat() 


    // }  
    // for (var i = 0; i < bariqArr.length; i++) { 
    //     bariqArr[i].mul() 

    // } 
    setTimeout(function () {
        for (var i = 0; i < chariqArr.length; i++) {
            chariqArr[i].eat()

        }
    }, 27000)

    setTimeout(function () {
        for (var i = 0; i < bariqArr.length; i++) {
            bariqArr[i].eat()
        }
    }, 43000)


let a = document.querySelector(".load")
setTimeout(() => {
    return a
}, 3000);

}


function mouseClicked () {     
  
    let y = Math.floor(mouseY/side)
    let x = Math.floor(mouseX/120)
    let newObj = new ClickKerpar(x,y)
    clickArr.push(newObj)
  } 



  





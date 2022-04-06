const can = document.getElementById("can1");
const can2 = document.getElementById("can2");
const Flower = can.getContext("2d");
const Tower = can2.getContext("2d");
can.width = window.innerWidth;
can.height = window.innerHeight;
can2.width = window.innerWidth;
can2.height = window.innerHeight;

function fib() {

    const container = document.getElementById("fibContainer");
    const paragraph = document.createElement("p");

    const fibNum= parseInt(document.getElementById("inputFib").value);

    console.log(fibNum);

    const seq = [0, 1];
    const numberToShow = [];

    if (fibNum < 2) {
        numberToShow.push(fibNum)  
    }
    else{
        for (i = 2; i <= fibNum; i++) {
            seq[i] = seq[i - 2] + seq[i - 1];
            numberToShow.push(seq[fibNum])
        }
    }

    paragraph.innerText = numberToShow.join("");
    container.appendChild(paragraph);

    let graphnum = 0;
    let scale = 7;

    function drawFlower(){
        let angle = graphnum * seq[fibNum];
        let radius = scale * Math.sqrt(graphnum);
        let positionx = radius * Math.sin(angle) + can.width/2;
        let positiony = radius * Math.cos(angle) + can.height/2;
        Flower.fillStyle = "black";
        Flower.strokeStyle = "white";
        Flower.lineWidth = 2,
        Flower.beginPath();
        Flower.arc(positionx, positiony, 2, 0, Math.PI * 2)
        Flower.closePath();
        Flower.fill();
        Flower.stroke();

        graphnum++;
    }
    
    function animate(){
        drawFlower();
        if (graphnum > 3000) return
        requestAnimationFrame(animate);
    }
    animate();
};

function fac() {
    const facNum= parseInt(document.getElementById("inputFac").value);

    console.log(facNum);

    const numberToShow = [];

    if (facNum < 2) {
        numberToShow.push("Error");
    }
    else if (facNum === 0){
        numberToShow.push("1");
        
        function drawTower1(){
            Tower.fillStyle = "black";
            Tower.strokeStyle = "white";
            Tower.lineWidth = 2,
            Tower.beginPath();
            Tower.rect(20, 0, 50, 400);
            Tower.stroke();
        }

        drawTower1();
    
        function drawTower2(){
            Tower.fillStyle = "black";
            Tower.strokeStyle = "white";
            Tower.lineWidth = 2,
            Tower.beginPath();
            Tower.rect(40, 0, 50, 400);
            Tower.stroke();
        }

        drawTower2();
    }
    else {
        let factorial = 1;
        let prevfact = 0;
        for (i = 1; i <= facNum; i++) {
            factorial *= i;
            prevfact = factorial/(facNum - 1);
            function drawTower1(){
                Tower.fillStyle = "black";
                Tower.strokeStyle = "white";
                Tower.lineWidth = 2,
                Tower.beginPath();
                Tower.rect(100, 100, 50, 400);
                Tower.stroke();
            }

            drawTower1();
        
            function drawTower2(){
                let proportion = (prevfact/factorial)*400
                Tower.fillStyle = "black";
                Tower.strokeStyle = "white";
                Tower.lineWidth = 2,
                Tower.beginPath();
                Tower.rect(500, 100, 50, proportion);
                Tower.stroke();
            }

            drawTower2();
        }
        numberToShow.push(prevfact)
        numberToShow.push(factorial)
    }


    const container = document.getElementById("facContainer");
    const paragraph=document.createElement("p");
    paragraph.innerText=numberToShow;
    container.appendChild(paragraph);
};
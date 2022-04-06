function fib() {
    const fibNum= parseInt(document.getElementById("inputFib").value);

    console.log(fibNum);

    const seq = [0, 1];
    const numberToShow = [];

    for (i = 2; i <= fibNum; i++) {
        seq[i] = seq[i - 2] + seq[i - 1];
        numberToShow.push(seq[fibNum])
    }

    const container = document.getElementById("fibContainer");
    const paragraph=document.createElement("p");
    paragraph.innerText=numberToShow.join("");
    container.appendChild(paragraph);
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
    }
    else {
        let factorial = 1;
        for (i = 1; i <= facNum; i++) {
            factorial *= i;
        }
        numberToShow.push(factorial)
    }

    const container = document.getElementById("facContainer");
    const paragraph=document.createElement("p");
    paragraph.innerText=numberToShow.join("");
    container.appendChild(paragraph);
};
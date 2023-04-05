var age = 70;
var divShow = document.getElementById("showUp");
// console.log(divShow);

var calc = 2+2;
// console.log(calc);
divShow.innerHTML = calc;
divShow.style.color = "red";
divShow.style.backgroundColor = "yellow";
// console.log(age);

// console.log(inputShow);

function showGrade () {
    var inputShow = document.getElementById("input");
    
    var showInputAgain = inputShow.value;
    // var divShow = document.getElementById("showUp");
    
    if (inputShow == 45) {
        console.log("pass");
        // divShow = "Pass"
    }

    // inputShow.value = "";
}
var numeros = document.getElementById("num");
var priNum = "";
var secNum = "";
var lastOp = "";
var subTotal = 0;
function carga (numeros) {
    if (lastOp == "") {
priNum = priNum + numeros;  
        console.log(priNum);
    }
    else {
        secNum = secNum + numeros;
        console.log (secNum);
     } 
}
function suma () {
    if (lastOp == ""){
        lastOp = "sum";
    } 
    else {
        calculate()
        
    }
}
function resta () {
if (lastOp == ""){
        lastOp = "resta";
    } 
    else {
        calculate()
        
    }
}
function mult () {
    if (lastOp == ""){
        lastOp = "mult";
    } 
    else {
        calculate() 
    }
}
function div () {
    if (lastOp == ""){
        lastOp = "div";
    } 
    else {
        calculate()
}
}
function calculate () {
    switch (lastOp) {
        case "sum":
            priNum = parseFloat(priNum) + parseFloat(secNum);
            lastOp = "";
            secNum = "";
            break;
        case "resta":
            priNum = parseFloat (priNum) - parseFloat (secNum);
            lastOp = "";
            secNum = "";
            break;
            case "mult":
            priNum = parseFloat(priNum) * parseFloat(secNum);
            lastOp = "";
            secNum = "";
            case "div" :
            priNum = parseFloat(priNum) / parseFloat(secNum);
            lastOp = "";
            secNum = "";
    }
}
function resultado () {
var res = document.getElementById("resultado");
calculate();
res.value = priNum;
}
function asd () {
    var res = document.getElementById("resultado");
    res.value = "";
}
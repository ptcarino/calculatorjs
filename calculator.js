// Website is live at http://ptcarino.ddns.net/calculatorjs

var memory = 0;


function add() {
    var num1 = parseFloat(document.getElementById("operand1").value);
    var num2 = parseFloat(document.getElementById("operand2").value);

    var result = num1 + num2;

    if(isNaN(result)) {
        alert("Invalid inputs!");
        document.getElementById("operand1").value = "";
        document.getElementById("operand2").value = "";
        document.getElementById("result").value = "";
    }
    else {
        document.getElementById("result").value = result;
        memory = result;
    }

    document.getElementById("memory").value = memory;

    console.log("(Add) Result is: " + result);
}

function subtract() {
    var num1 = parseFloat(document.getElementById("operand1").value);
    var num2 = parseFloat(document.getElementById("operand2").value);

    var result = num1 - num2;

    if(isNaN(result)) {
        alert("Invalid inputs!");
        document.getElementById("operand1").value = "";
        document.getElementById("operand2").value = "";
        document.getElementById("result").value = "";
    }
    else {
        document.getElementById("result").value = result;
        memory = result;
    }

    document.getElementById("memory").value = memory;

    console.log("(Subtract) Result is: " + result);
}

function multiply() {
    var num1 = parseFloat(document.getElementById("operand1").value);
    var num2 = parseFloat(document.getElementById("operand2").value);

    var result = num1 * num2;

    if(isNaN(result)) {
        alert("Invalid inputs!");
        document.getElementById("operand1").value = "";
        document.getElementById("operand2").value = "";
        document.getElementById("result").value = "";
    }
    else {
        document.getElementById("result").value = result;
        memory = result;
    }

    document.getElementById("memory").value = memory;

    console.log("(Multiply) Result is: " + result);
}

function divide() {
    var num1 = parseFloat(document.getElementById("operand1").value);
    var num2 = parseFloat(document.getElementById("operand2").value);

    var result = num1 / num2;

    if(isNaN(result)) {
        alert("Invalid inputs!");
        document.getElementById("operand1").value = "";
        document.getElementById("operand2").value = "";
        document.getElementById("result").value = "";
    }
    else {
        document.getElementById("result").value = result;
        memory = result;
    }

    document.getElementById("memory").value = memory;

    console.log("(Divide) Result is: " + result);
}

function modulo() {
    var num1 = parseFloat(document.getElementById("operand1").value);
    var num2 = parseFloat(document.getElementById("operand2").value);

    var result = num1 % num2;

    if(isNaN(result)) {
        alert("Invalid inputs!");
        document.getElementById("operand1").value = "";
        document.getElementById("operand2").value = "";
        document.getElementById("result").value = "";
    }
    else {
        document.getElementById("result").value = result;
        memory = result;
    }

    document.getElementById("memory").value = memory;

    console.log("(Modulo) Result is: " + result);
}

function exponent() {
    var num1 = parseFloat(document.getElementById("operand1").value);
    var num2 = parseFloat(document.getElementById("operand2").value);

    var result = Math.pow(num1,num2);

    if(isNaN(result)) {
        alert("Invalid inputs!");
        document.getElementById("operand1").value = "";
        document.getElementById("operand2").value = "";
        document.getElementById("result").value = "";
    }
    else {
        document.getElementById("result").value = result;
        memory = result;
    }

    document.getElementById("memory").value = memory;

    console.log("(Exponent) Result is: " + result);
}

function memoryplus() {
    var tmpmem = parseFloat(memory);
    var memnum1 = parseFloat(document.getElementById("operand1").value);
    var result = tmpmem + memnum1;

    if(isNaN(result)) {
        alert("Invalid inputs!");
        document.getElementById("operand1").value = "";
        document.getElementById("operand2").value = "";
        document.getElementById("result").value = "";
    }
    else {
        document.getElementById("memory").value = result;
    }

    console.log("(Memory+) Result is: " + result);
}

function memoryminus() {
    var tmpmem = parseFloat(memory);
    var memnum1 = parseFloat(document.getElementById("operand1").value);
    var result = tmpmem - memnum1;

    if(isNaN(result)) {
        alert("Invalid inputs!");
        document.getElementById("operand1").value = "";
        document.getElementById("operand2").value = "";
        document.getElementById("result").value = "";
    }
    else {
        document.getElementById("memory").value = result;
    }

    console.log("(Memory-) Result is: " + result);
}

function memoryclr() {
    memory = 0;
    document.getElementById("memory").value = memory;
}

function play() {
    var bgm = document.getElementById("bgm");
    bgm.play();
}

function stop() {
    var bgm = document.getElementById("bgm");
    bgm.pause();
}
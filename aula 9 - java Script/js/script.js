//alert("hello world")

function Mudar(){
    document.getElementById("x").innerText = "texto inserido por js";
}

function Tabuada(){
    resp = "";
    for (i=0; i < 11 ; i++){
        resp += (1 + " * " + i + " = " + (1 * i) +"\n");
        console.log(resp);
    }
    document.getElementById("Tabuada").innerText = resp;
}   


function calcular(){
    nMax = document.getElementById("num");
    nMult = document.getElementById("num2");
    resp = "";
    nMax ++
    if (nMax.value <= 100 && nMax.value > 0){
        for (i=1; i < nMax ; i++){
            resp += (nMult.value + " * " + i + " = " + (nMult.value * i) +"\n");
            console.log(resp);
        }
        document.getElementById("outraTabuada").innerText = resp;
    }
    else{
        nMax.value = "";
        document.getElementById("outraTabuada").innerText = "rá ti fude troxa";
    }
}
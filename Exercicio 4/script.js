function calcular() {

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("operacao").value;
    let res;

    if (op == "+") {
        res = n1 + n2;
    }

    else if (op == "-") {
        res = n1 - n2;
    }

    else if (op == "*") {
        res = n1 * n2;
    }

    else if (op == "/") {
        res = n1 / n2;
    }

    document.getElementById("resultado").innerHTML =
    "Resultado: " + res;
}
let nome = prompt("Digite seu nome:");
let altura = parseFloat(prompt("Digite sua altura em centímetros:"));
let peso = parseFloat(prompt("Digite seu peso em kg:"));

altura = altura / 100;

let imc = peso / (altura * altura);

let classificacao = "";

if (imc < 16) {
    classificacao = "Baixo peso muito grave";
}
else if (imc < 17) {
    classificacao = "Baixo peso grave";
}
else if (imc < 18.5) {
    classificacao = "Baixo peso";
}
else if (imc < 25) {
    classificacao = "Peso normal";
}
else if (imc < 30) {
    classificacao = "Sobrepeso";
}
else if (imc < 35) {
    classificacao = "Obesidade grau I";
}
else if (imc < 40) {
    classificacao = "Obesidade grau II";
}
else {
    classificacao = "Obesidade grau III";
}

document.getElementById("resultado").innerHTML =
nome + " possui índice de massa corporal igual a " +
imc.toFixed(2) +
", sendo classificado como: " +
classificacao + ".";
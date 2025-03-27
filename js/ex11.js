function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura * altura);
    document.getElementById("resultadoIMC").textContent = "IMC: " + imc.toFixed(2);
}

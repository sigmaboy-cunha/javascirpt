function verificarParOuImpar() {
    let numero = document.getElementById("numero").value;
    let resultado = numero % 2 === 0 ? "Par" : "Ímpar";
    document.getElementById("resultadoParOuImpar").textContent = resultado;
}
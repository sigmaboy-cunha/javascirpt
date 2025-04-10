function calcularMedia() {
    let notas = [
        Number(document.getElementById("nota1").value),
        Number(document.getElementById("nota2").value),
        Number(document.getElementById("nota3").value),
        Number(document.getElementById("nota4").value)
    ];
    let media = notas.reduce((a, b) => a + b, 0) / notas.length;
    document.getElementById("resultadoMedia").textContent = "Média: " + media.toFixed(2);
}

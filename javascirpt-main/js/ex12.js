function verificarIdade() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let classificacao = idade < 2 ? "Bebê" : idade < 12 ? "Criança" : idade < 18 ? "Adolescente" : idade < 60 ? "Adulto" : "Melhor Idade";
    document.getElementById("resultadoIdade").textContent = nome + " é " + classificacao;
}
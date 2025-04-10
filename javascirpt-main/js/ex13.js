function mostrarDia() {
    let dia = document.getElementById("dia").value;
    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    document.getElementById("resultado").textContent = dias[dia - 1] || "Dia inválido!";
}

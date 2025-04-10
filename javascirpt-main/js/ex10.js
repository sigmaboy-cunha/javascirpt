function converterCelsiusParaFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultadoConversao").textContent = "Fahrenheit: " + fahrenheit.toFixed(2);
}

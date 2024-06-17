function calcular() {
    var radio = parseInt(document.getElementById("radio").value);

    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, introduce un número válido y positivo.");
        return;
    }

    var longitud = 2 * Math.PI * radio;
    var area = Math.PI * radio * radio;
    var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

    document.getElementById("longitud").innerHTML = "Longitud de la circunferencia: " + longitud.toFixed(2);
    document.getElementById("area").innerHTML = "Área del círculo: " + area.toFixed(2);
    document.getElementById("volumen").innerHTML = "Volumen de la esfera: " + volumen.toFixed(2);
}
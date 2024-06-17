var meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function mostrarMes() {
    var numeroMes = parseInt(document.getElementById("numeroMes").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
        resultado.innerHTML = "Por favor, selecciona un número de mes válido.";
        return;
    }

    var nombreMes = meses[numeroMes - 1];
    resultado.innerHTML = "El mes seleccionado es: "+nombreMes;
}

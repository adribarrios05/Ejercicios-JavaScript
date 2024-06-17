const meses = {
    "Enero": "January",
    "Febrero": "February",
    "Marzo": "March",
    "Abril": "April",
    "Mayo": "May",
    "Junio": "June",
    "Julio": "July",
    "Agosto": "August",
    "Septiembre": "September",
    "Octubre": "October",
    "Noviembre": "November",
    "Diciembre": "December"
};

function traducirMes() {
    var mesEspanol = document.getElementById("mesEspanol").value;
    var resultado = document.getElementById("resultado");

    if (!meses[mesEspanol]) {
        resultado.innerHTML = "Por favor, selecciona un mes válido.";
        return;
    }

    var mesIngles = meses[mesEspanol];
    resultado.innerHTML = "El mes "+mesEspanol+" en inglés es: "+mesIngles;
}


function cambiarTema(tema) {
    document.body.className = tema;
}

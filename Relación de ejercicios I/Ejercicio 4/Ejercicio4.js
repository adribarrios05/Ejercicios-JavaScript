function calcularLetraDNI() {
    
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var dni = document.getElementById("dni").value;
    var resultado = document.getElementById("resultado");

    if (/^\d{7,8}$/.test(dni)) {
        var numeroDNI = parseInt(dni);
        var letra = letras[numeroDNI % 23];
        resultado.innerHTML = `La letra correspondiente a tu DNI es: `+letra;
    } else {
        resultado.innerHTML = "Por favor, introduce un número de 7 u 8 dígitos.";
    }
}
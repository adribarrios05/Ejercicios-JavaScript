function comprobarCadena() {
    var cadena = document.getElementById("cadena").value;
    var resultado = document.getElementById("resultado");

    if (!/[a-zA-Z]/.test(cadena)) {
        resultado.innerHTML = "La cadena debe contener al menos una letra.";
        return;
    }

    if (cadena === cadena.toUpperCase() && /[A-Z]/.test(cadena)) {
        resultado.innerHTML = "La cadena está en mayúsculas.";
    } else if (cadena === cadena.toLowerCase() && /[a-z]/.test(cadena)) {
        resultado.innerHTML = "La cadena está en minúsculas.";
    } else {
        resultado.innerHTML = "La cadena no está ni en mayúsculas ni en minúsculas.";
    }
}
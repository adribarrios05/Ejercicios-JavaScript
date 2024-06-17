function comprobarPalindromo() {
    var cadena = document.getElementById("cadena").value;
    var resultado = document.getElementById("resultado");

    if (cadena === "") {
        resultado.innerHTML = "Por favor, introduce una cadena de caracteres.";
        return;
    }

    var cadenaSinEspacios = cadena.replace(/\s/, "").toLowerCase();
    var cadenaInvertida = cadenaSinEspacios.split("").reverse().join("");

    if (cadenaSinEspacios === cadenaInvertida) {
        resultado.innerHTML = "La cadena "+cadena+" es un palíndromo.";
    } else {
        var palindromo = cadena + cadena.split("").reverse().join("");
        resultado.innerHTML = "La cadena "+cadena+" no es un palíndromo.<br> El palíndromo generado es: "+palindromo+".";
    }
}

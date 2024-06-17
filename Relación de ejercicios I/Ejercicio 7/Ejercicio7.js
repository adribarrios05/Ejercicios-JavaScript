function calcularDivision() {
    var dividendo = parseInt(document.getElementById("dividendo").value);
    var divisor = parseInt(document.getElementById("divisor").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(dividendo) || isNaN(divisor) || dividendo <= 0 || divisor <= 0) {
        resultado.innerHTML = "Por favor, introduce números enteros positivos.";
        return;
    }

    var a = dividendo;
    var b = divisor;
    var cociente = 0;

    while (a >= b) {
        a -= b;
        cociente++;
    }

    var resto = a;

    resultado.innerHTML = "Cociente: "+cociente+"<br>Resto: "+resto;
}

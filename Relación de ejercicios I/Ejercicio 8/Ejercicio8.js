function calcularMCD() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
        resultado.innerHTML = "Por favor, introduce números enteros positivos.";
        return;
    }

    while (numero2) {
        var temp = numero2;
        numero2 = numero1 % numero2;
        numero1 = temp;
    }

    resultado.innerHTML = "El MCD es: "+numero1;
}

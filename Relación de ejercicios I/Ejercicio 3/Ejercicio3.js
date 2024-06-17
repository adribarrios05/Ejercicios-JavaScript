function determinarTriangulo() {
    
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        resultado.innerHTML = "Por favor, ingrese valores numéricos positivos para todos los lados.";
        return;
    }

    if (lado1 === lado2 && lado2 === lado3) {
        resultado.innerHTML = "El triángulo es equilátero.";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        resultado.innerHTML = "El triángulo es isósceles.";
    } else {
        resultado.innerHTML = "El triángulo es escaleno.";
    }
}
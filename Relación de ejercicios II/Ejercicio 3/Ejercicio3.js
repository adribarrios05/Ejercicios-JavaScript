document.addEventListener(
    function() {
    const calcularBtn = document.getElementById("calcularBtn");
    const volverBtn = document.getElementById("volverBtn");
    const oscuroBtn = document.getElementById("oscuroBtn");
    const claroBtn = document.getElementById("claroBtn");

    calcularBtn.addEventListener("click", calcular);
    volverBtn.addEventListener("click", function() {
        window.location.href = 'index.html';
    });
    oscuroBtn.addEventListener("click", function() {
        cambiarTema('oscuro');
    });
    claroBtn.addEventListener("click", function() {
        cambiarTema('claro');
    });
});

function calcular() {
    var radio = parseInt(document.getElementById("radio").value);
    var resultadosLista = document.getElementById("resultadosLista");

    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, introduce un número válido y positivo.");
        return;
    }

    var longitud = 2 * Math.PI * radio;
    var area = Math.PI * radio * radio;
    var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

    var resultadoItem = document.createElement("li");
    resultadoItem.innerHTML = 
        "<p>Radio: "+radio+"</p>"+
        "<p>Longitud de la circunferencia: "+longitud.toFixed(2)+"</p>"+
        "<p>Área del círculo: "+area.toFixed(2)+"</p>"+
        "<p>Volumen de la esfera: "+volumen.toFixed(2)+"</p>"
    ;

    resultadosLista.appendChild(resultadoItem);
}

function cambiarTema(tema) {
    document.body.className = tema;
}

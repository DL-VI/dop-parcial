//desplegable
function mostrarDefinicion(definicionId) {

    var definicion = document.getElementById(definicionId);

    if (definicion.className === "esconder") {

        definicion.className = "visible";
    } else {
        definicion.className = "esconder";  
    }
}   

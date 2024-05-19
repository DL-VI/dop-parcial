// Función para mostrar la cuenta regresiva
const mostrarCuentaRegresiva = () => {
    
    let fechaActual = new Date();
    let fechaInicioJuegos = new Date('2024-07-23T00:00:00');
    let diferenciaTiempo = fechaInicioJuegos - fechaActual;

    // Calcular los días restantes
    let dias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
    // Calcular las horas restantes
    let horas = Math.floor((diferenciaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Calcular los minutos restantes
    let minutos = Math.floor((diferenciaTiempo % (1000 * 60 * 60)) / (1000 * 60));
    // Calcular los segundos restantes
    let segundos = Math.floor((diferenciaTiempo % (1000 * 60)) / 1000);
    // Actualizar el elemento HTML con el ID 'hora' para mostrar la cuenta regresiva
    document.getElementById('hora').innerHTML = `${dias}: ${horas}: ${minutos}: ${segundos}`;
}

// Llamar a la función mostrarCuentaRegresiva cada segundo (1000 milisegundos)
setInterval(mostrarCuentaRegresiva, 1000);


//boton vovler arriba

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {

    // Selecciona el botón
    let btnVolverArriba = document.getElementById("btnArriba");
    // Agrega un evento de clic al botón
    btnVolverArriba.addEventListener("click", function() {
        // Desplaza la ventana al principio de la página
        window.scrollTo({
            top: 0,
        });
    });
});

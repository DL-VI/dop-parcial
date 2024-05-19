//filtro

//obtiene la etiqueta <select>
let filtro = document.getElementById("filtro")

filtro.addEventListener("change", function() {
    
    let tabla = document.getElementById("tabla");
    let filas = tabla.getElementsByTagName("tr");
    let valor = filtro.value.toUpperCase(); 

    for (let i = 0; i < filas.length; i++) { //iteramos las filas
        //obtiene la primera celda que es donde esta el evento
        
        let celda = filas[i].getElementsByTagName("td")[0];

        if (celda) {
            //obtiene el texto de la celda
            let texto = celda.textContent;
            //valida si el texto contiene el valor del filtro
            if (texto.toUpperCase().includes(valor))
                //muestra las filas
                filas[i].style.display = "";
            else
                //esconde las filas
                filas[i].style.display = "none";       
        }
    }
})

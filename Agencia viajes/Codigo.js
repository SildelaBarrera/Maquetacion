
let arraySolicitudes= [];
    
function envio(){
    
    let nombre = document.getElementById("nombre").value
    let origen = document.getElementById("origen").value
    let destino = document.getElementById("destino").value
    let numero = document.getElementById("numero").value
    let fecha = document.getElementById("fecha").value

    //console.log(nombre, origen, destino, numero, fecha);
    
    let solicitud = {

         nombre: nombre,
         origen: origen,
         destino: destino,
         numero: numero,
         fecha: fecha
     }
    
    
    arraySolicitudes.push(solicitud)

    console.log(arraySolicitudes);
}
function mostrar(){

    info.innerHTML="";
    for (let i=0; i < arraySolicitudes.length; i++)
        
            if(arraySolicitudes[i].destino.toLowerCase() == "canarias" ||
            arraySolicitudes[i].destino.toLowerCase() == "mallorca" ||
            arraySolicitudes[i].destino.toLowerCase() == "galicia")
            {

                let info = document.getElementById("info")
                info.innerHTML += "<h3>" + arraySolicitudes[i].nombre + "</h3>" +
                     "<p>" + arraySolicitudes[i].origen + "</p>" +
                     "<p>" + arraySolicitudes[i].destino + "</p>" +
                     "<p>" + arraySolicitudes[i].numero + "</p>" +
                     "<p>" + arraySolicitudes[i].fecha + "</p>"; 
        }                        
    }
       




// Promesa que simula la consulta a una API 
function consultarClima(ciudad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos que si la ciudad viene vacía o no es un string válido, ocurre un error
            if (!ciudad) {
                reject("Debe proporcionar un nombre de ciudad válido.");
            } else {
                // Devolvemos un objeto JS con los datos del clima
                resolve({
                    ciudad: ciudad,
                    temperatura: "24°C",
                    condicion: "Soleado"
                });
            }
        }, 1500);
    });
}

//  Función asíncrona consumidora con async/await y try-catch
async function mostrarClima(ciudad) {
    try {
        console.log(`Consultando el clima para ${ciudad}...`);
        
        // La ejecución se 'pausa' en esta línea hasta que la promesa se resuelva
        const datosClima = await consultarClima(ciudad);
        
        // Imprimimos el objeto de forma limpia y ordenada
        console.log("--- Reporte del Clima ---");
        console.log(`Ciudad:      ${datosClima.ciudad}`);
        console.log(`Temperatura: ${datosClima.temperatura}`);
        console.log(`Condición:   ${datosClima.condicion}`);
        console.log("------------------------");

    } catch (error) {
       
        console.error("Error al obtener el clima:", error);
    }
}

// 3. Ejecución de la función
mostrarClima("Quito");
function consultarClima(ciudad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (!ciudad) {
                reject("Debe proporcionar un nombre de ciudad válido.");
            } else {
               
                resolve({
                    ciudad: ciudad,
                    temperatura: "24°C",
                    condicion: "Soleado"
                });
            }
        }, 1500);
    });
}


async function mostrarClima(ciudad) {
    try {
        console.log(`Consultando el clima para ${ciudad}...`);
        
      
        const datosClima = await consultarClima(ciudad);
        

        console.log("--- Reporte del Clima ---");
        console.log(`Ciudad:      ${datosClima.ciudad}`);
        console.log(`Temperatura: ${datosClima.temperatura}`);
        console.log(`Condición:   ${datosClima.condicion}`);
        console.log("------------------------");

    } catch (error) {
    
        console.error("Error al obtener el clima:", error);
    }
}


mostrarClima("Quito");
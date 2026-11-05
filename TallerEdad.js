// Función que retorna una Promesa
function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        // Simulación de retraso de 1 segundo
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso concedido. Bienvenido a la plataforma");
            } else {
                reject("Acceso denegado. Registro permitido solo para mayores de edad");
            }
        }, 1000);
    });
}

// 2. Consumo Mayor de edad
verificarEdad(20)
    .then((respuesta) => {
        console.log("Verificación aprobada:", respuesta);
    })
    .catch((error) => {
        console.error("Verificación rechazada:", error);
    });

// 3. Consumo Menor de edad
verificarEdad(15)
    .then((respuesta) => {
        console.log("Verificación aprobada:", respuesta);
    })
    .catch((error) => {
        console.error("Verificación rechazada:", error);
    });
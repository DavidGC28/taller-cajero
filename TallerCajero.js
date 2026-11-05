// Función que retorna una Promesa
function retirarDinero(monto) {
    const saldoDisponible = 500;

    return new Promise((resolve, reject) => {
        // Simulación de espera del banco (1.5 segundos)
        setTimeout(() => {
            if (monto <= saldoDisponible) {
                const saldoRestante = saldoDisponible - monto;
                resolve(`Retiro exitoso de $${monto}. Saldo restante: $${saldoRestante}`);
            } else {
                reject("Fondos insuficientes. Límite de retiro: $500");
            }
        }, 1500);
    });
}

// Consumo de la Promesa
console.log("Iniciando transacción 1...");
retirarDinero(200)
    .then((mensaje) => {
        console.log("ÉXITO:", mensaje);
    })
    .catch((error) => {
        console.error("ERROR:", error);
    });

// 3. Consumo de la Promesa (Caso fallido)
console.log("Iniciando transacción 2...");
retirarDinero(600)
    .then((mensaje) => {
        console.log("ÉXITO:", mensaje);
    })
    .catch((error) => {
        console.error("ERROR:", error);
    });
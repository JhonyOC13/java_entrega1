let monto = parseFloat (prompt("Ingrese el monto del préstamo"));
let interes = parseFloat (prompt("Ingrese la tasa de interés"));
let plazo = parseInt (prompt("Ingrese el plazo en meses"));

if (monto > 0 && interes > 0 && plazo > 0) {
    let total = monto;
    for (let i = 1; i <= plazo; i++) {
        total += total * ((interes / 100) / 12);
    }
    
    let pagomensual = total / plazo;
    alert("El total a pagar es de: " + total + " y el pago mensual es de: " + pagomensual);
} else {
    alert("Los datos ingresados son incorrectos");
}    

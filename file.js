/*
Crear un programa que permita elegir entre las operaciones: 
SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, 
ingresar dos números y hacer dicha operación con ella.
*/
let operacion = prompt("¿Qué operación querés realizar? \nOPCIONES: \nSuma \nResta \nMultiplicación \nDivisión");

if (operacion === "Suma" || 
    operacion === "Resta" || 
    operacion === "Multiplicación" ||
    operacion === "División") {
        let num1 = prompt("Ingresá el primer número");
        let num2 = prompt("Ingresá el segundo número");
        num1 = Number(num1);
        num2 = Number(num2);
        
        switch (operacion) {
            case "Suma": 
                alert(num1 + " + " + num2 + " = " + (num1+num2));
                break;
            case "Resta":
                alert(num1 + " - " + num2 + " = " + (num1-num2));
                break;
            case "Multiplicación":
                alert(num1 + " * " + num2 + " = " + (num1*num2));
                break;
            case "División":
                alert(num1 + " / " + num2 + " = " + (num1/num2));
                break;
        }
    }
else {
    alert("La operación ingresada no es correcta");
}
const NOMBRE_PELUQUERIA = "GEMA";

alert("Bienvenidos a peluqueria " + NOMBRE_PELUQUERIA);

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let telefono = parseInt(prompt("Ingrese su numero de telefono: Código de área (CA) - Número local (NL)"));

function saludo() {
    alert("Bienvenido " + nombre + " " + apellido);
}

saludo();

let dia = parseInt(prompt("Ingrese el día que desea reservar su turno:"));


while (dia > 31) {
    dia = parseInt(prompt("El día seleccionado no existe, vuelva a intentar"));
}

alert("El día fue seleccionado correctamente");

let mes = parseInt(prompt("Ingrese el mes (del 1 al 12) en el que desea reservar su turno: "));

while (true) {
    switch(mes) {
        case 1:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Enero");
            break;
        case 2:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Febrero");
            break;
        case 3:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Marzo");
            break;
        case 4:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Abril");
            break;
        case 5:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Mayo");
            break;
        case 6:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Junio");
            break;
        case 7:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Julio");
            break;
        case 8:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Agosto");
            break;
        case 9:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Septiembre");
            break;
        case 10:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Octubre");
            break;
        case 11:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Noviembre");
            break;
        case 12:
            alert("Su turno ha sido reservado para el día " + dia + " del mes de Diciembre");
            break;
        default:
            mes = parseInt(prompt("El mes seleccionado no existe, vuelva a intentar"));
            continue;
    }
    break;
}

let metodoPago = prompt("Ingrese el metodo de pago: \n1-Efectivo \n2-Tarjeta \n3-Transferencia");

if (metodoPago == 1) {
    alert("El metodo de pago seleccionado es Efectivo");
}else if (metodoPago == 2) {
    alert("El metodo de pago seleccionado es Tarjeta");
}else if (metodoPago == 3) {
    alert("El metodo de pago seleccionado es Transferencia");
}else {
    alert("No has seleccionado ningun metodo de pago.");
}

alert("Muchas gracias por su reserva " + nombre)


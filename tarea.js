/* 1) Calcular el total que una persona debe pagar en un llantera, si el precio de cada llanta
es de $800 si se compran menos de 5 llantas y de $700 si se compran 5 o mas. */

let numLlantas = parseInt(prompt('¿Cuántas llantas va a comprar?'));
let descuentoLlantas;

if(numLlantas < 5){
    descuentoLlantas = parseInt(numLlantas*800);
    console.log(`Usted compró ${numLlantas}llantas no tiene ningún descuento, el total a pagar es ${descuentoLlantas}`);
}else if(numLlantas >= 5){
    descuentoLlantas = parseInt(numLlantas*700);
    console.log(`Usted ha comprado ${numLlantas}llantas y obtuvo un descuento, el total a pagar es ${descuentoLlantas}`);
}


/* 2) En un supermercado se hace una promoción, mediante la cual el cliente obtiene un
descuento dependiendo de un numero que se escoge al azar. Si el numero escogido es
menor que 74 el descuento es del 15% sobre el total de la compra, si es mayor o igual a
74 el descuento es del 20%. Obtener cuanto dinero se le descuenta. */

let numAzar = parseInt(prompt('Elija un número'));
let totalCompra = parseFloat(prompt('¿Cuál fue el total de su compra?'));
let descuentoSupermercado,totalPago;

if(numAzar < 74){
    descuentoSupermercado = parseFloat(totalCompra * 0.15);
    totalPago = (parseFloat(totalCompra) - parseFloat(descuentoSupermercado)); 
    console.log(`Usted escogio el número ${numAzar} y por ello obtuvo un descuento del 15% el total a pagar es $ ${totalPago}  su descuento fue de  $ ${descuentoSupermercado}`);
}else if(numAzar >= 74){
    descuentoSupermercado = parseFloat(totalCompra*0.20);
    totalPago = (parseFloat(totalCompra) - parseFloat(descuentoSupermercado)); 
    console.log(`Usted escogio el número ${numAzar}, y por ello obtuvo un 20% descuento el total a pagar es es $ ${totalPago} su descuento fue de $ ${descuentoSupermercado} `);
}


/* 3) Calcular el numero de pulsaciones que debe tener una persona por cada 10 segundos
de ejercicio aerobico; la formula que se aplica cuando el sexo es femenino es:
num. pulsaciones = (220 - edad)/10
y si el sexo es masculino:
num. pulsaciones = (210 - edad)/10 */

//Comparacion con entero
let generoEnt = parseInt(prompt('Ingrese su genero 0 femenino, 1 masculino'));
let edadPersona = parseInt(prompt('¿Cuál es su edad'));
let numPulsaciones;

if( generoEnt == 0){
    numPulsaciones = parseFloat((220 - edadPersona)/10);
    console.log(`Su genero es ${generoEnt} y sus pulsaciones son ${numPulsaciones}`);
}else if(generoEnt == 1){
    numPulsaciones = parseFloat((210 -edadPersona)/10);
    console.log(`Su genero es ${generoEnt} y sus pulsaciones son ${numPulsaciones}`);
}


// Comparación con cadena
let genero = prompt('Ingrese su genero');
let edadPersona = parseInt(prompt('¿Cuál es su edad'));
let numPulsaciones,femenino,masculino;

if( genero == 'femenino'){
    numPulsaciones = parseFloat((220 - edadPersona)/10);
    console.log(`Su genero es ${genero} y sus pulsaciones son ${numPulsaciones}`);
}else if(genero == 'masculino'){
    numPulsaciones = parseFloat((210 -edadPersona)/10);
    console.log(`Su genero es ${genero} y sus pulsaciones son ${numPulsaciones}`);
}


/* 4) Una compañía de seguros esta abriendo un depto. de finanzas y estableció un
programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se
efectúa la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el
monto es mayor que $50 000 la cuota a pagar será el 2% del monto. La afianzadora
desea determinar cual será la cuota que debe pagar un cliente. */

let monto = parseFloat(prompt('Ingrese el monto  a solicitar'));
let interes, cuotaTotal;
if(monto < 50000) {
    interes = parseFloat((monto*0.03));
    cuotaTotal = parseFloat(monto + interes);
    console.log(`Se aplico un 3% de interes que son ${interes}, la cuota total a pagar es ${cuotaTotal} ` );
}else if(monto > 50000){
    interes = parseFloat((monto*0.02));
    cuotaTotal = parseFloat(monto + interes);
    console.log(`Se aplico un 2% de interes que son ${interes}, la cuota total a pagar es ${cuotaTotal} `);
}

/* 5) En una escuela la colegiatura de los alumnos se determina según el numero de
materias que cursan. El costo de todas las materias es el mismo.
Se ha establecido un programa para estimular a los alumnos, el cual consiste en
lo siguiente: si el promedio obtenido por un alumno en el ultimo periodo es mayor o
igual que 9, se le hará un descuento del 30% sobre la colegiatura y no se le cobrara
IVA; si el promedio obtenido es menor que 9 deberá pagar la colegiatura completa, la
cual incluye el 10% de IVA.
Obtener cuanto debe pagar un alumno. */

let materias= parseInt(prompt('¿Cuántas materias va a cursar?'));
let costoMateria = parseFloat(prompt('¿Cuál es el costo de cada materia?'));
let promedioAlumno = parseFloat(prompt('Ingrese su promedio.'));
let colegiatura = (materias*costoMateria),colegiaturaTotal;

if(promedioAlumno >= 9){
    descuentoColegiatura = parseFloat(colegiatura*0.30);
    colegiaturaTotal= parseFloat(colegiatura-descuentoColegiatura);
    console.log(`Felicidades su promedio ha sido de ${promedioAlumno} y su descuento es de $ ${descuentoColegiatura}, el total a pagar es $ ${colegiaturaTotal} `);

}else if(promedioAlumno < 9){   
    colegiaturaTotal = parseFloat(colegiatura + (colegiatura*0.10));
    console.log(`Tu promedio ha sido de ${promedioAlumno} y el total a pagar es $ ${colegiaturaTotal}`);
}


/* 6) Una empresa de bienes raíces ofrece casas de interés social, bajo las siguientes
condiciones: Si los ingresos del comprador son de menos de $8000, el enganche será del
15% del costo de la casa y el resto se distribuirá en pagos mensuales, a pagar en diez
años. Si los ingresos del comprador son de $8000 o mas el enganche será del 30% del
costo de la casa y el resto se distribuirá en pagos mensuales a pagar en 7 años.
La empresa quiere obtener cuanto debe pagar un comprador por concepto de
enganche y cuanto por cada pago parcial. */

let costoCasa = parseFloat(prompt('¿Cuál es el costo de la casa?'));
let ingresoComprador = parseFloat(prompt('¿Cuáles son sus ingresos?'));
let enganche,pagoAnual;    
if( ingresoComprador < 8000){
    enganche = parseFloat(costoCasa* 0.15);
    pagoAnual = parseFloat(costoCasa-enganche)/(12*10);
    console.log(`El costo Total de la casa es de $ ${costoCasa} su enganche es de $ ${enganche}, el pago anual será de $ ${pagoAnual} `);
}else if(ingresoComprador > 8000){
    enganche = parseFloat(costoCasa* 0.30);
    pagoAnual = parseFloat(costoCasa-enganche)/(12*7);
    console.log(`El costo Total de la casa es de $ ${costoCasa} su enganche es de $ ${enganche}, el pago anual será de $ ${pagoAnual} `);
}

/* 7) En una fabrica de computadoras se planea ofrecer a los clientes un descuento que
dependerá del numero de computadoras que compre. Si las computadoras son menos de
cinco se les dará un 10% de descuento sobre el total de la compra; si el numero de
computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de
descuento; y si son 10 o mas se les da un 40% de descuento. El precio de cada
computadora es de $11,000 */

let numComputadoras = parseInt(prompt('¿Cuántas computadoras compró?'));
let descuentoCompu;
if(numComputadoras < 5){
    subtotalCompu = parseInt(numComputadoras * 11000);
    descuentoCompu = parseFloat(subtotalCompu*0.10);
    totalPagocompu= parseFloat(subtotalCompu-descuentoCompu);
    console.log(`Usted compró ${numComputadoras} computadoras su descuento ha sido de un 10% que es el equivalente a $ ${descuentoCompu}, el total a pagar es$ ${totalPagocompu}`);
}else if(numComputadoras >= 5  && numComputadoras < 10)
{
    subtotalCompu = numComputadoras * 11000;
    descuentoCompu = parseFloat(subtotalCompu*0.20);
    totalPagocompu = subtotalCompu - descuentoCompu; 
    console.log(`Usted compró ${numComputadoras} computadoras su descuento ha sido de un 20% que es el equivalente a $ ${descuentoCompu}, el total a pagar es$ ${totalPagocompu}`);
}else if(numComputadoras >=10){
    subtotalCompu = numComputadoras * 11000;
    descuentoCompu = parseFloat(subtotalCompu*0.40);
    totalPagocompu = subtotalCompu - descuentoCompu; 
    console.log(`Usted compró ${numComputadoras} computadoras su descuento ha sido de un 40% que es el equivalente a $ ${descuentoCompu}, el total a pagar es$ ${totalPagocompu}`);
}


/* 8) En una llantera se ha establecido una promoción de las llantas marca "Ponchadas",
dicha promoción consiste en lo siguiente:
Si se compran menos de cinco llantas el precio es de $300 cada una, de $250 si
se compran de cinco a 10 y de $200 si se compran mas de 10.
Obtener la cantidad de dinero que una persona tiene que pagar por cada una de
las llantas que compra y la que tiene que pagar por el total de la compra. */

// let numLlantasponch = parseInt(prompt('¿Cuántas llantas de la marca "Ponchadas compró"?'));

if(numLlantasponch < 5){
    let costoLlantaponch=300;
    totalLlantasponch = numLlantasponch  * costoLlantaponch;
    console.log(`Usted compró ${numLlantasponch} cada una le cuesta ${costoLlantaponch}, el total a pagar es$ ${totalLlantasponch}`);
}else if(numLlantasponch >= 5  && numLlantasponch <= 10)
{
    let costoLlantaponch=250;
    totalLlantasponch = numLlantasponch  * costoLlantaponch;
    console.log(`Usted compró ${numLlantasponch} cada una le cuesta ${costoLlantaponch}, el total a pagar es$ ${totalLlantasponch}`);
    
}else if(numLlantasponch >10){
    let costoLlantaponch=200;
    totalLlantasponch = numLlantasponch  * costoLlantaponch;
    console.log(`Usted compró ${numLlantasponch} cada una le cuesta ${costoLlantaponch}, el total a pagar es$ ${totalLlantasponch}`);
}


/* 9) Un proveedor de estéreos ofrece un descuento del 10% sobre el precio sin IVA, de
algún aparato si este cuesta $2000 o mas. Además, independientemente de esto, ofrece
un 5% de descuento si la marca es "NOSY". Determinar cuanto pagara, con IVA
incluido, un cliente cualquiera por la compra de su aparato. */

let precioAparato = parseFloat(prompt('Ingrese el precio del estereo'));
let marca = prompt('Ingrese la marca del estereo');
let desc10siniva,descNosy,descTotest,totalEstereo,iva;

if (precioAparato >= 2000 && marca == "NOSY" ){
    desc10siniva = parseFloat(precioAparato * 0.10);
    descNosy= parseFloat(precioAparato*0.05);
    descTotest = parseFloat(desc10siniva+descNosy);
    totalEstereo=parseFloat((precioAparato)-(descTotest));
    iva = parseFloat(totalEstereo * 0.16);
    totalfinal= parseFloat(totalEstereo+ iva);  
    console.log(`El precio del aparato es de $ ${precioAparato} la marca es ${marca}, el descuento sin iva es de ${descTotest}, el total del iva es de ${iva} a pagar es de $ ${totalfinal}`);
}else if (precioAparato <= 2000){
    desc10siniva = parseFloat(precioAparato * 0.10);
    totalEstereo=parseFloat((precioAparato)-(desc10siniva));
    iva = parseFloat(totalEstereo * 0.16);
    totalfinal= parseFloat(totalEstereo+ iva); 
    console.log(`el precio del aparato es de $ ${precioAparato}, la marca es ${marca} obtuvo un 10% de descuento que es $ ${desc10siniva} el total del iva es de ${iva} a pagar es de $ ${totalfinal}`);
}





/* 10) Que lea tres números diferentes y determine el numero medio del conjunto de los tres
números (el numero medio es aquel numero que no es ni mayor, ni menor). */

let a = prompt('Ingrese el primer número');
let b = prompt('Ingrese el segundo número');
let c = prompt('Ingrese el tercer número');
let medio;

if((b <a && a< c)  || (c <a && a< b))
{ 
    medio = a;
} 
else if ((a <b && b<c)  || (c <b && b<a))
{
    medio = b;
}
else if((a <c && c< b)  || (b < c && c < a))
{
    medio = c;
}
console.log(`num medio ${medio}`);


/* 11) Ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora. (Es necesario pedir las horas trabajadas al usuario) */

let horasTrabajadas = parseInt(prompt('¿Cuántas horas trabajó esta semana?'));
let sueldoSemanal, sueldoHorasextras;
if(horasTrabajadas <= 40){
    sueldoSemanal =  parseInt((horasTrabajadas * 20));
    console.log(`Usted trabajó ${horasTrabajadas} su sueldo semanal es de  ${sueldoSemanal}`);
}else if(horasTrabajadas >  40){
    sueldoHorasextras = parseInt((horasTrabajadas - 40));
    sueldoSemanal =  parseInt((horasTrabajadas - sueldoHorasextras)*20);
    console.log(`Usted trabajó ${horasTrabajadas} y el sueldo de esta semana es de ${sueldoSemanal}`);
}

/* 12) Una tienda de helado ofrece un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

Costo del helado $70
Tipo A 10% de descuento
Tipo B 15% de descuento
Tipo C 20% de descuento */

let heladosComp = parseInt(prompt('¿Cuántos helados compró?'));
let tipoMembresia = prompt('¿Cuál es el tipo de su membresia A, B C?');
let A, B, C, subtHelado, descHelado, totalHelado;

if(tipoMembresia == 'A'){
    subtHelado = parseFloat(heladosComp*70);
    descHelado = parseFloat(subtHelado * 0.10);
    totalHelado = parseFloat(subtHelado - descHelado);
    console.log(`Usted compró ${heladosComp} helados, su membresia es tipo ${tipoMembresia}, su descuento es de $ ${descHelado}, el total a pagar es de ${totalHelado}`);
}else if (tipoMembresia == 'B'){
subtHelado = parseFloat(heladosComp*70);
    descHelado = parseFloat(subtHelado * 0.15);
    totalHelado = parseFloat(subtHelado - descHelado);
    console.log(`Usted compró ${heladosComp} helados, su membresia es tipo ${tipoMembresia}, su descuento es de $ ${descHelado}, el total a pagar es de ${totalHelado}`);
}else if (tipoMembresia == 'C'){
    subtHelado = parseFloat(heladosComp*70);
    descHelado = parseFloat(subtHelado * 0.20);
    totalHelado = parseFloat(subtHelado - descHelado);
    console.log(`Usted compró ${heladosComp} helados, su membresia es tipo ${tipoMembresia}, su descuento es de $ ${descHelado}, el total a pagar es de ${totalHelado}`);
}


/* 13) Determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%. */

let sueldoBase = parseInt(prompt('¿Cuál es su ingreso monetario?'));
let aumento, sueldoTotal;
if(sueldoBase > 2000){
    aumento =  parseInt((sueldoBase * 0.05));
    sueldoTotal = (parseInt(aumento + sueldoBase));
    console.log(`Usted ganaba ${sueldoBase} y por ello obtuvo un aumento de 5% $ ${aumento} su sueldo ahora es $ ${sueldoTotal}`);
}else if(sueldoBase <  2000){
    aumento =  parseInt((sueldoBase * 0.10));
    sueldoTotal = (parseInt(aumento + sueldoBase));
    console.log(`Usted ganaba ${sueldoBase} y por ello obtuvo un aumento de 10% $ ${aumento} su sueldo ahora es $ ${sueldoTotal}`);
}
let saludar = 'holi';
//= se usa para asignar
//== es un operador relacional, para combrobar si es igual
//=== si es identico (valor y tipo de dato)
// != operador relacional distinto de  (valor)
// != distinto de (valor y tipo de dato)


//Operadores lógicos
//AND &&  3>2 && 4<5 VERDADERO, porque ambas expresiones son verdaderas
//OR ||  3>2 || 4<3 VERDADERO, Porque una condición se cumple
//Not ! 5!=2 VERDADERO

//pedir la edad y determinar si una persona es mayor de edad, entonces puede recibir la vacuna,
//si no es mayor, debe esperar.

// let edad = prompt("Ingrese su edad");
// if(edad >= 18)
// {
//     console.log('usted se puede vacunar');
// }else{
//     console.log('No se puede vacunar');  
// }

/* Pedir al usuario 2 puntuaciones y dterminar el ganadaor
del
*/

// let equipoA = parseInt(prompt('¿Cuántos goles anotó el equipoA'));
// let equipoB = prompt('¿Cuántos goles anotó el equipoB');
// let resultado;

// console.log(typeof equipoA,typeof equipoB)

// if(equipoA > equipoB){
//     resultado = 'Equipo A';
// }else if(equipoA === equipoB){
//     resultado = 'Empate';
// }else{
//     resultado ='Ganador equipo B';
// }
// console.log(resultado);


// Para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
//esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento
// sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga 
//un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
//El precio de cada zapato es de $80.

// let numZapatos = prompt('¿Cuántos zapatos compro?');
// let total;
// let descuento;
// if( numZapatos >= 10){
//     total = (numZapatos * 80);
//     descuento = total * 0.10;
//     console.log(`Su descuento es de ${descuento}`);
// }else 
// else if( numZapatos >= 20 || numZapatos <= 30){
//     total = (numZapatos * 80);
//     descuento = total * 0.20;
   
// }


// let numZapatos = parseInt(prompt('Zapatos comprados'));
// let total,descuento;
// if(numZapatos >=30) {
//     console.log('descuento del 40%');
//     descuento = (numZapatos *80)* .4;
//     total = (numZapatos *80)-descuento;
// }else if (numZapatos>20 && numZapatos<30){
//     console.log('descuento del 20%');
//     descuento=(numZapatos * 80)*.2;
//     total=(numZapatos*80)-descuento;
// }else if (numZapatos>10){
//     console.log('descuento del 10%');
//     descuento=(numZapatos * 80)*.1;
//     total=(numZapatos*80)-descuento;
// }else{
//     console.log=('no hay descuento');
//     total = numZapatos* 80;
// }




// Determinar el promedio de tres notas y determinar si el estudiante aprobó o no.

// let nota1 = prompt('calificación de la nota1');
// let nota2 = prompt('calificación de la nota2');
// let nota3 = prompt('calificación de la nota3');
// let sumapromedio = (parseInt(nota1)+parseInt(nota2)+parseInt(nota3));
// let promedio =sumapromedio/3; 

// if (promedio >= 7){
//     calificacionfinal = 'Usted aprobó'
// }else {
//     calificacionfinal = 'Usted reprobó, siga estudiando'
// }
// console.log(calificacionfinal);



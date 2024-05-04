//FUNCION CLASICA


function saludar (nombre){
return  "hola "+ nombre; 
}
recibidor = saludar("Fernando aguilera")
console.log(recibidor); //esta es anonima, no tiene el HOISTING
console.log(saludar("Luis Medina"));

//FUNCIONES ANONIMAS
//no tienen ningun nombre y es necesario almacenarlas en una variable
//esta no aplica elHOISTING (el resultado de una funcion lo puedo llamar en cualquier parte,
// incluso antes del script de la funcion)


//FUNCIONES FLECHA; TIENEN LA SIG ESTRUCTURA; FLECHA () => {}
//ES UNA FUNCION ANONIM, es decir necesito almacenarla en una variable
//pero yo la hice sin almacenar nada, nada mas la envolvi en el consol.log(porque le puse return lo cual no va)
//no necesitan la palabra reserv function
//tampoco en necesario el return (no estoy del todo seguro)(no pero si se puede pero no tiene sentido)
//si la funcion tiene solo un parametro, podemos omitir los parentecis
//si en las llaves solo hay una linea de codigo, se pueden omitir las llaves(OBLIGATORIO)
//let saludar2 = (nombre) =>{"saludos "+nombre};
//si la funcion no tiene parametro, los parentesis van vacios
//si en las llaves vanos a especificar un objeto es necesario ponerlo entre parentesis
//let obj = () =>({nombre:"bob", edad:20});
//para no confundir llaves de la funcion flecha con las llaves del objeto
//quedaria asi: let saludar2 = nombre => "saludos "+nombre;  pero por practica le puse todo


//FUNCION FLECHA SALUDAR
//console.log(recibidor2);  //no tiene HOSTING
let saludar2 = (nombre) =>"saludos "+nombre;
recibidor2 = saludar2("Melissa");
console.log(recibidor2);


//FUNCION ESTANDAR SUMAR
function restaEstandar (num1,num2)
{
    return num1-num2;
}
console.log(restaEstandar(5,2));



//FUNCION FLECHA SUMAR
//console.log(sumaFlecha(10,5)) //es anonima no tiene HOSTING
let sumaFlecha = (num1,num2) => num1+num2;
console.log(sumaFlecha(10,5))



//FUNCION ESTANDAR
function calPi1 (radio){
    const pi=3.14;
    return (pi*(radio**2))
}
console.log(calPi1(5))


//FUNCION FELCHA
let calPiFlecha = (radio2) => 3.14*(radio2**2)
console.log(calPiFlecha(5));

console.log("===========")

//PALABRA CLAVE THIS
/*
es una palabra clave especial en JavaScript que se refiere al
 contexto de ejecución actual.
Su valor depende de cómo se invoca la función y dónde se encuentra.
*/
console.log(this === window);//


//esta funcion va sin nombre pero creo si se le puede poner
const persona = {
nombre: "Luis",
saludar: function(){
    console.log("hola "+ this.nombre);
}
}
persona.saludar();

console.log("===========")







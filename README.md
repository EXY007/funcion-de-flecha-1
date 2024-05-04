#### ejemplos de funciones estandar vs funciones de flecha y un poco de (this) dentro de una funcion




```javascript
//FUNCION ESTANDAR
function calPi1 (radio){
    const pi=3.14;
    return (pi*(radio**2))
}
console.log(calPi1(5))

//FUNCION FELCHA
let calPiFlecha = (radio2) => 3.14*(radio2**2)
console.log(calPiFlecha(5));
```


```javascript
//this
const persona = {
nombre: "Luis",
saludar: function(){
    console.log("hola "+ this.nombre);
}
}
persona.saludar();
```
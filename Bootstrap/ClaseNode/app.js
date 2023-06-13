
/***
 * sumar 5 y 8
 * Calcular Cuadrad
 * Multiplicarlo por 10
 * Restarle 2
 * Mostrar el resultado por consola
 */
function sumar(a,b){
    let rta;
    setTimeout(() => {
        rta = a + b;
        console.log("La suma "+rta);
        
    }, 2000);
    return rta;
}
function cuadrado(a){
    let rta;
    setTimeout(() => {
        rta = a + a;
        console.log("El cuadrado "+rta);
        
    }, 2000);
    return rta;
}
function Multiplicarlo(a,b){
    let rta;
    setTimeout(() => {
        rta = a * b;
        console.log("La mult "+rta);
        
    }, 2000);
    return rta;
}
function restar(a,b){
    let rta;
    setTimeout(() => {
        rta = a - b;
        console.log("La resta "+rta);
        
    }, 2000);
    return rta;
}
function informe(valor){
    console.log(valor);
}

console.log("inicio");
let suma = sumar(5,8);
let cuad = cuadrado(suma);
let mult = Multiplicarlo(cuad,10);
let rest = restar(mult,2);
informe(rest);
console.log("fin");
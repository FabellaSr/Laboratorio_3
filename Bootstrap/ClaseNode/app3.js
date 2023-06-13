/***
 * sumar 5 y 8
 * Calcular Cuadrad
 * Multiplicarlo por 10
 * Restarle 2
 * Mostrar el resultado por consola
 */
function sumar(a, b) {

  return new Promise((resolve, reject) => {
    
   setTimeout(() => {
    if(typeof a === 'number' && typeof b === 'number'){
      rta = a + b;
      console.log("la suma es "+rta);
      resolve(rta);
    } else {
      reject("parametros invalidos para suma");
    }
    
   }, 2000); 
  })
}
function cuadrado(a, callback) {
  let rta;
  setTimeout(() => {
    rta = a * a;
    console.log("El cuadrado " + rta);
    callback(rta);
  }, 2000);
}
function Multiplicarlo(a, b, callback) {
  let rta;
  setTimeout(() => {
    rta = a * b;
    console.log("La mult " + rta);
    callback(rta);
  }, 2000);
}
function restar(a, b, callback) {
  let rta;
  setTimeout(() => {
    rta = a - b;
    console.log("La resta " + rta);
    callback(rta);
  }, 2000);
}
function informe(valor) {
  console.log(valor);
}


console.log("inicio");

console.log("fin");

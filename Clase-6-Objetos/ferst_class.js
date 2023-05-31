
// Una funcion es un ciudadano de primera clase
// cuando se puede tratar como cualquier otro valor
// -se puede asignar a una variable
// -se puede pasar como argumento a una function
//
function operar(a,b,operacion) {

    return operacion(a,b);
}
console.log(operar(2,3,sumar));

function sumar(a,b) {
    return a+b;
}

function crearSumador(a)
{
    return function(b) {
        return a+b;
    };
}

const sumarDos=crearSumador(2); 
console.log(sumarDos(3));
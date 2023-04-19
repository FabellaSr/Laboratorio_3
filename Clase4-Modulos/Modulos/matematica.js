function sumar(a,b)
{
    return a+b;
}
function restar(a,b)
{
    return a-b;
}
function Multiplicar(a,b)
{
    return a*b;
}
function Dividir(a,b)
{
    if(!validarCero(b))
    {
        return a/b;
    }       
}

function validarCero(a)
{
    return a===0;
}
export default{
    Dividir,
    Multiplicar,
    sumar,
    restar
}

// exports = {
//     sumar,
//     restar
// }

// export const sumar = function(a,b)
// {
//     return a+b;
// }
// export const restar = function(a,b)
// {
//     return a-b;
// }

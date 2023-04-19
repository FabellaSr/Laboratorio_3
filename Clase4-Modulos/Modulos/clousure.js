
const operaciones = (function() {
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
    return
    {
        restar,
        sumar,
        Multiplicar,
        Dividir;
    };
})()
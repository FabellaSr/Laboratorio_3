function Saludar(){
    alert("hola pah");
}
//const boton = document.getElementById("btnSaludo");
//boton.addEventListener("click",Saludar);
/*
boton.addEventListener("click",function(){
    alert("Hola mundo");
});Funcion anonima*/
window.addEventListener("load",function(){
    document.getElementById("btnSaludo").addEventListener("click",
    function()
    {
        alert("Holis");
    })
})
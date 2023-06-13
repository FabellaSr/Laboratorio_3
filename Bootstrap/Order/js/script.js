let btnDesordenar = document.querySelector("#btnDesordenar");
btnDesordenar.addEventListener("click", ()=>{
    // console.log("Holis");
    let columnas = document.querySelectorAll(".container>div:first-child>div.col");

    columnas[0].classList.add('order-3');
    columnas[0].classList.add('order-1');
    columnas[0].classList.add('order-2');

    console.log(columnas);

})
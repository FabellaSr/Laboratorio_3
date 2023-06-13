let datos;
let divTabla = document.getElementById("divTabla");

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    datos = JSON.parse(this.responseText);
    console.log(datos);
    refrescarDiv(divTabla, crearTabla(datos));
  }
};
xhr.open("GET", "./js/data.json");
xhr.send();


function crearTabla(arr) {
  let tabla = document.createElement("table");
  tabla.appendChild(crearCabeceraTabla(arr[0]));
  tabla.appendChild(crearCuerpoTabla(arr));
  tabla.classList.add("table");
  tabla.classList.add("table-striped");
  tabla.classList.add("table-hover");

  return tabla;
}

function crearCuerpoTabla(arr){

    let tbody = document.createElement("tbody");
    arr.forEach((element) =>{
        let tr = document.createElement("tr");
        for (const key in element) {
            let td = document.createElement("td");
            let texto = document.createTextNode(element[key]);
            td.appendChild(texto);//inserto el texto al td
            tr.appendChild(td);//inserto los td a los tr

        }
        tbody.appendChild(tr);
    });
    return tbody;
}
function crearCabeceraTabla(obj) {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  for (const key in obj) {
    let th = document.createElement("th");
    let texto = document.createTextNode(key);
    th.appendChild(texto);
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  thead.classList.add("thead-dark");
  thead.classList.add('text-capitalize');//UpperCase
  thead.classList.add("text-center");
  

  return thead;
}

function refrescarDiv(div, tabla) {
  while (div.hasChildNodes()) {
    div.removeChild(div.firstElementChild);
  }
  div.appendChild(tabla);
}
function filtrarSexo(arr,sexo){
    
}
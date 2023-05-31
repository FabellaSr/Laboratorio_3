/*console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.documentElement);
console.log(document.title);
console.log(document.characterSet);
console.log(document.links);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);*/
/*
const $parrafo = document.getElementById("parrafo1");
console.log(document.getElementsByClassName("tarjeta"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementsByTagName("a"));
console.log($parrafo);*/
/*-------Nuevos--------------*/
/*
console.log(document.querySelector("#id"));
console.log(document.querySelector(".tarjeta"));
console.log(document.querySelector("ul"));

console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll("#id"));
console.log(document.querySelectorAll(".tarjeta"));
console.log(document.querySelectorAll("ul a"));
*/
/*Atributos-------------- Getter; Setter;notacion de puntos */
//setAttribute getAttribute removeAttribute toggleAttribute
/*
const $parrafo=document.getElementById("parrafo1");
console.log($parrafo)
const $textnombre = document.getElementsByName("nombre")[0];
console.log($textnombre.getAttribute("placeholder"));
$textnombre.setAttribute("placeholder", "nuevo");
console.log($textnombre.placeholder);
$textnombre.placeholder ="Write your name";
console.log($textnombre.hasAttribute("placeholder"));
$textnombre.removeAttribute("placeholder");
console.log($textnombre.hasAttribute("placeholder"));
const $lista=document.querySelector("ul");
console.log($lista.dataset.description);
console.log($lista.getAttribute("data-description"));
$lista.dataset.description = "Lista sarasa";
$lista.setAttribute("data-description","Lista sarasa2");
//console.log(document.querySelector("li"[data-sec]));
const $tarjeta1 = document.querySelector(".tarjeta");
console.log("aca");
console.log($tarjeta1.style.getPropertyValue("color"));
console.log("aca");

console.log($tarjeta1);
$tarjeta1.style.backgroundColor="green";
$tarjeta1.setAttribute("style","background-color:black");
$tarjeta1.style.setProperty("background-color","white");

console.log("aca");
console.log($tarjeta1.style.getPropertyValue("background-color"));
console.log("aca");

console.log($tarjeta1.className);
//classlistt .add .remove .replace .toggle .contains
$tarjeta1.classList.add("rotar-45","sepia");
//$tarjeta1.classList.add("sepia");

console.log($tarjeta1.className);
$tarjeta1.classList.remove("rotar-45");
$tarjeta1.classList.toggle("rotar-45");//Si tiene se lo quira, sino, lo agrega
$tarjeta1.classList.replace("rotar-45","rotar-120");

//text
// innerText textContent innerHTML outerHTML
//$parrafo.textContent="Relleno de parrafo desde js. sino por html habia un loren<mark>";//lo interpreta como texto plano
//$parrafo.innerHTML="<p>Relleno de parrafo desde js.<mark></p>";//Lo interpreta como html

//$parrafo.outerHTML="<p><mark>Relleno de saas parrafo desde js<mark></p>"//Sirve para mostrar solamente
fragment
const $newTarjeta = document.createElement("figure"),
 $imagen = document.createElement("img"),
 $fig =document.createElement("figcaption"),
 texto=document.createTextNode("Any");

 $newTarjeta.classList.add("tarjeta");
 $imagen.setAttribute("src","http://placeimg.com/200/200/Any");
 $imagen.setAttribute("alt","sarasa");
  
 $newTarjeta.appendChild($imagen);
 $newTarjeta.appendChild($fig);
 $fig.appendChild(texto);
//$fig.textContent="Any";

const $seccionImagenes = document.querySelector(".imagenes");
$seccionImagenes.appendChild($newTarjeta);

const listFrutas = ["Banan","Naranja","Melon"];
$listaFrutas = document.getElementById("frutas");
const fragmento = document.createDocumentFragment();

listFrutas.forEach((el)=>{
 const $li=document.createElement("li");
 $li.textContent=el;
 $listaFrutas.appendChild($li)
})//Bien pero no eficiente

/*
listFrutas.forEach((el)=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    fragmento.appendChild($li);
   });
   $listaFrutas.appendChild(fragmento);*///GLOHAL

   //comTraversion
    const listFrutas = ["Banan","Naranja","Melon"];
    $listaFrutas = document.getElementById("frutas");
    const fragmento = document.createDocumentFragment();

    listFrutas.forEach((el)=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    fragmento.appendChild($li);
   });
   $listaFrutas.appendChild(fragmento);
//    const imagenes = document.querySelector(".imagenes");
//    let tarjeta = imagenes.firstElementChild;

   /*
   do {   
    tarjeta = tarjeta.nextElementSibling;      
    console.log(tarjeta);
    if(tarjeta==null) break;
   }while(tarjeta.nextElementSibling);

  /* console.log(imagenes.firstElementChild);
   console.log(imagenes.lastElementChild);
   console.log(imagenes.children[2]);
*/
//conseguir un array y que sea del tipo json y hacer enxabezado con las keys y llenar
//los valors con objetos
//una funcion que sea generarTabla() Que reciba un array de elementos. Se debe hacer una lista

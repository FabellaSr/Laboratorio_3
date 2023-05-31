import { Anuncios } from "../data/anuncios.js";
import { actualizarTabla } from "./tabla.js";


const botonEliminar = document.querySelector('.eliminarCancelar');
const $spinner = document.querySelector('.sniperNoVisible'); 

window.addEventListener("click", (e) => {
  if (e.target.matches("td")) {
    const id = e.target.parentElement.dataset.id;
    const selectAnuncios = anuncios.find((anuncio) => anuncio.id == id);
    cargarFormulario($formulario, selectAnuncios);
    botonEliminar.classList.add("eliminarCancelarVisible"); 
  } else if (e.target.matches("button[value='Eliminar anuncio']")) {   
    snipper();
    handlerDelete(parseInt($formulario.txtId.value));
    $spinner.classList.remove("sniperVisible");
  }


});

const $seccionTabla = document.getElementById("tabla");
const $formulario = document.forms[0];
const anuncios = JSON.parse(localStorage.getItem("anuncios")) || [];

if (anuncios.length) actualizarTabla($seccionTabla, anuncios);

$formulario.addEventListener("reset",(e) => {
  botonEliminar.classList.remove("eliminarCancelarVisible");
  $formulario.txtId.value = ""; 
});


function snipper(){
 
  $spinner.classList.add("sniperVisible");
  for(let i = 0; i < 500; i++){   
      setTimeout(function() {
        if (i % 2 == 0) {
          $spinner.classList.add('rotar-45');
        }else{
          $spinner.classList.add('rotar-120');
        }
       
      }, 2000);
  }

  $spinner.classList.add("sniperNoVisible");
 
console.log($spinner.classList);
}

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const {txtId,rdoTransaccion,txtTitulo,txtDescr,txtBaño,txtAutos,txtDormis,txtPrecio} = $formulario;
  if (txtId.value === "") {  
    const newAnuncio = Anuncios(
      txtTitulo.value,
      rdoTransaccion.value,
      txtDescr.value,
      parseInt(txtBaño.value),
      parseInt(txtAutos.value),
      parseInt(txtDormis.value),
      parseInt(txtPrecio.value)
    );
    snipper();
    handlerCreate(newAnuncio);
  } else {
    const anuncio = Anuncios(
      txtTitulo.value,
      rdoTransaccion.value,
      txtDescr.value,
      parseInt(txtBaño.value),
      parseInt(txtAutos.value),
      parseInt(txtDormis.value),
      parseInt(txtPrecio.value),
      parseInt(txtId.value)
    );
    snipper();
    handlerUpdate(anuncio);
  }
  $formulario.reset();
});


//ABM

function handlerCreate(nuevoAnuncio) {
  anuncios.push(nuevoAnuncio);
  actualizaStorage("anuncios", anuncios);
  actualizarTabla($seccionTabla, anuncios);
}

function handlerUpdate(editarAnuncio) {
  let index = anuncios.findIndex((per) => per.id === editarAnuncio.id);
  anuncios.splice(index, 1, editarAnuncio); //hay que hacer un sort
  actualizaStorage("anuncios", anuncios);
  actualizarTabla($seccionTabla, anuncios);
}
function handlerDelete(id) {
  let index = anuncios.findIndex((anuncio) => anuncio.id === id);
  if (index !== -1) {
    anuncios.splice(index, 1);
    actualizaStorage("anuncios", anuncios);
    actualizarTabla($seccionTabla, anuncios);
    $formulario.txtId.value = ""; 
    $formulario.reset();
  }
}


function actualizaStorage(clave, data) {
  localStorage.setItem(clave, JSON.stringify(data));
}

function cargarFormulario(formulario, anuncios) {
  formulario.txtId.value = anuncios.id;
  formulario.txtDescr.value = anuncios.descripcion;
  formulario.txtTitulo.value = anuncios.titulo;
  formulario.rdoTransaccion.value = anuncios.rdoTransaccion;
  formulario.txtPrecio.value = anuncios.precio;
  formulario.txtBaño.value = anuncios.num_wc;
  formulario.txtAutos.value = anuncios.num_est;
  formulario.txtDormis.value = anuncios.num_dorm;
}

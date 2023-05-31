import { Anuncio_Casa } from "../data/anuncios.js";
import { actualizarTabla } from "./tabla.js";

// const botonEliminar = document.querySelector("button[value='Eliminar anuncio']");
const botonEliminar = document.querySelector('.eliminarCancelar');
// const botonCancelar = document.querySelector("button[value='Cancelar']");

window.addEventListener("click", (e) => {
  if (e.target.matches("td")) {
    const id = e.target.parentElement.dataset.id;
    const selectAnuncios = anuncios.find((anuncio) => anuncio.id == id);
    cargarFormulario($formulario, selectAnuncios);
    botonEliminar.classList.add("eliminarCancelarVisible");
    // botonCancelar.classList.add("cancelarVisible");
  } else if (e.target.matches("button[value='Eliminar anuncio']")) {   
    handlerDelete(parseInt($formulario.txtId.value));
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

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const {txtId,rdoTransaccion,txtTitulo,txtDescr,txtBaño,txtAutos,txtDormis,txtPrecio} = $formulario;
  if (txtId.value === "") {  
    const newAnuncio = new Anuncio_Casa(
      txtTitulo.value,
      rdoTransaccion.value,
      txtDescr.value,
      parseInt(txtBaño.value),
      parseInt(txtAutos.value),
      parseInt(txtDormis.value),
      parseInt(txtPrecio.value));
    handlerCreate(newAnuncio);
  } else {
    const newAnuncio = new Anuncio_Casa(
      txtTitulo.value,
      rdoTransaccion.value,
      txtDescr.value,
      parseInt(txtBaño.value),
      parseInt(txtAutos.value),
      parseInt(txtDormis.value),
      parseInt(txtPrecio.value),
      parseInt(txtId.value));
    handlerUpdate(newAnuncio);
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

const spinner = document.getElementById('spinner');

document.querySelectorAll('.guardar, .eliminar').forEach(button => {
  button.addEventListener('click', function() {
    spinner.style.display = 'block';
    setTimeout(function() {
      spinner.style.display = 'none';
    }, 3000);
  });

});
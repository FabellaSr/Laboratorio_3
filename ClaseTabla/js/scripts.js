import { actualizarTabla } from "./tabla.js";
import { Persona } from "./persona.js";

window.addEventListener("click", (e) => {
  if (e.target.matches("td")) {
    const id = e.target.parentElement.dataset.id;
    const selectPerson = personas.find((per) => per.id == id);
    cargarFormulario($formulario, selectPerson);
  } else if (e.target.matches("input[value='Eliminar persona']")) {
    handlerDelete(parseInt($formulario.txtId.value));
  }
});
const $seccionTabla = document.getElementById("tabla");
const $formulario = document.forms[0];
const personas = JSON.parse(localStorage.getItem("personas")) || [];

if (personas.length) actualizarTabla($seccionTabla, personas);

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const{ txtId, txtEdad, txtNombre, txtEmail, rdoGenero } = $formulario;
  console.log("viene por aca");
  console.log(txtNombre.value);
  console.log(txtId.value);
  //persona = Persona(txtNombre.value,txtEdad.value,txtEmail.value,rdoGenero.value);
  if (txtId.value === "") {
    //PersonaNueva 
    const newPersona = new Persona(
      Date.now(),
      txtNombre.value,
      parseInt(txtEdad.value),
      txtEmail.value,
      rdoGenero.value
    );
    handlerCreate(newPersona);
  } else {
    //updatePersona
     console.log("Viene");
         const updatePersona = new Persona(
      parseInt(txtId.value),
      txtNombre.value,
      parseInt(txtEdad.value),
      txtEmail.value,
      rdoGenero.value
    );
    handlerUpdate(updatePersona);
  }
  $formulario.reset();
});
//ABM

function handlerCreate(nuevaPersona) {
  personas.push(nuevaPersona);
  actualizaStorage("personas", personas);
  actualizarTabla($seccionTabla, personas);
}

function handlerUpdate(editPersona) {
  let index = personas.findIndex((per) => per.id === editPersona.id); 
  personas.splice(index, 1, editPersona); //hay que hacer un sort
  actualizaStorage("personas", personas);
  actualizarTabla($seccionTabla, personas);
}
function handlerDelete(id) { 
  let index = personas.findIndex((per) => per.id === id);  
  personas.forEach(element => {
    console.log(element.id );
  });
  if (index !== -1) {
    console.log("viene");
    personas.splice(index, 1);
    actualizaStorage("personas", personas);
    actualizarTabla($seccionTabla, personas);
  }
}
function actualizaStorage(clave, data) {
  localStorage.setItem(clave, JSON.stringify(data));
}

function cargarFormulario(formulario, personas) {
  formulario.txtId.value = personas.id;
  formulario.txtNombre.value = personas.nombre;
  formulario.txtEdad.value = personas.edad;
  formulario.txtEmail.value = personas.email;
  formulario.rdoGenero.value = personas.rdoGenero;
}

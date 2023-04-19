const persona = {
    nombre: "Ivan",
    apellido: "fabella",
    edad: 30
}

let{apellido,nombre,edad}=persona;

const lista = [23,41,23,23,53]

let [a,b,...c]=lista
console.log(lista);
// let nombre = persona.nombre;
// let apellido = persona.apellido;
// let edad = persona.edad;
console.log(nombre,apellido,edad);
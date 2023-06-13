// new Promise((resolve,reject) => {

// });
function validaPar(valor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof valor !== "number") {
        reject("Eso no es numero");
      } else {
        mensaje = "No es par";
        if (valor % 2 == 0) {
          mensaje = "Es par";
        } else {
          mensaje = "No es par";
        }
        resolve(mensaje);
      }
    }, 3000);
  });
}
console.log("inicio");
console.log(validaPar(20));
//validaPar("21")
// .catch((rest)=>{
//     console.log(rest);
// })
// .then((err)=>{
//     console.log(err);
// })
console.log("fin");

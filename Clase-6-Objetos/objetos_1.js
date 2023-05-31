
//Declaracion de objetos
// Objeto Literal
// Funcion constructora
// Objet.create()

// const miObj = {};
// const obj2 = new Object();
// const obj3 = new Object(1,2,3);
// const obj4 = new Object('Hola mundo');
// const obj5 = new Object(true);
// console.log(miObj);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);

//objetos literal

const miObj = {
    cadena:"palabras",
    numero  : 10,
    array:[2,3,4,5,6],
    miObj:{a:"Ivano",b:23,c:false},
    booleano:false,
    // "3d":true,
    // "una key":"algo",
    funcion:function(){
        console.log("Hola mundo");
    }
};

// let atributo ="miObj";
// console.log(miObj.cadena);
// console.log(miObj['numero']);
// console.log(miObj[atributo]);
// console.log(miObj.una key);
// console.log(miObj["3d"]);
const entradas=Object.entries(miObj);
//console.log(entradas);
for(let i=0; i<entradas.length;i++)
{
    let [key, val]=entradas[i];
    console.log(key,"=",val);
    //console.log(entradas[i][0],"=",entradas[i][1]);
}

console.log("************************************");

entradas.forEach((entrada) => {
    // let [key, val]=entrada[i];
    // console.log(key,"=",val);
    console.log(entrada[0],"=",entrada[1]);
})
console.log("************************************");
for(const entrada of entradas)
{
    console.log(entrada[0],"=",entrada[1]);    
}

const keys = Object.keys(entradas);
const valores = Object.values(entradas);
console.log(keys);
//console.log(valores);

console.log("*********************aca***************");
for(let i=0; i<keys.length;i++)
{
    console.log(keys[i],"=",miObj[i]); 
}

console.log("***************acaa*********************");
//forof
for (const key of keys) {
    console.log(key,"=",miObj[key]);    
}
console.log("***********y aca*************************");

keys.forEach((key) => {
    console.log(key,"=",miObj[key]);
});
console

console.log("************************************");

for (const key in miObj) {
console.log(key,"=",miObj[key]);
}
console.log("************************************");
const numeros=[2,3,4];
for(const i in numeros){
    console.log(numeros[i]);
}


//const valores = Object.values(miObj);
//console.log(valores);

export const crearTabla = (data, colorCaecera) => {
  if (!Array.isArray(data)) return null;

  const tabla = document.createElement("table");
  tabla.appendChild(crearCabecera(data[0]), colorCaecera);
  tabla.appendChild(crearCuerpo(data));
 
  return tabla;
};

const crearCabecera = (elemento, color) => {
  const tHead = document.createElement("thead"),
    headRow = document.createElement("tr");
  headRow.style.setProperty("background-color", color);

  for (const key in elemento) {
    if (key === "id") continue;
    const th = document.createElement("th");
    th.textContent = key;
    headRow.appendChild(th);
  }
  tHead.appendChild(headRow);
  return tHead;
};

const crearCuerpo = (data) => {
  if (!Array.isArray(data)) return null;
  const tBody = document.createElement("tbody");

  data.forEach((element, index) => {
    const tr = document.createElement("tr");
    // tr.addEventListener("click", handlerClick);
    if (index % 2 == 0) {
      tr.classList.add("rowPar");
    }

    for (const key in element) {
      //Empiezo a recorer un objeto
      if (key === "id") {
        tr.dataset.id = element[key];
        //tr.setAttribute("data-id", element[key]);// Ambas validas
      } else {
        const td = document.createElement("td");
        td.textContent = element[key];
        tr.appendChild(td);
      }
    }
    tBody.appendChild(tr);
  });

  return tBody;
};

//op1
// function handlerClick(e) {//obtengo datos de la tabla cuando hace click
//   console.log("Manejador tr");
//   const id = e.target.parentElement.getAttribute("data-id");
//   const id2 = e.target.parentElement.dataset.id;
//   const td = e.target;
//   const tr  = e.target.parentElement;
//   console.log(e.target);
// }

//op2


// function handlerClickTd(e) {
//   console.log("Manejador Td");
//   //console.log(e.target);
// }
// function handlerClickTabla(e) {
//   console.log("Manejador Td");
//   //console.log(e.target);
// }

export const actualizarTabla = (contenedor, data) => {
  while (contenedor.hasChildNodes()) { 
    contenedor.removeChild(contenedor.firstElementChild);
  }
  contenedor.appendChild(crearTabla(data,"coral")); //
};

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const $table = document.getElementById("tablaUsuarios");
    const fragmento = document.createDocumentFragment();
    const $encabezado = document.createElement("tr");
    $encabezado.innerHTML =
      "<th>Nombre</th><th>Apellido</th><th>Usuario</th><th>Email</th>";
    fragmento.appendChild($encabezado);

    data.forEach((el) => {
      const $fila = document.createElement("tr");
      // $fila.classList.add("fila");
      $fila.style.border = "1px solid black";

      $fila.innerHTML = `<td>${el.id}</td><td>${el.first_name}</td><td>${el.last_name}</td><td>${el.email}</td>`;
      fragmento.appendChild($fila);
    });
    $table.appendChild(fragmento);
  });

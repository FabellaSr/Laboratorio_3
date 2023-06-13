class Personaje {
    constructor(nombre, alias, editorial, id = null) {
      if (id === null) {
        this.id = Date.now();
      } else {
        this.id = id;
      }
      this.alias = alias;
      this.editorial = editorial;
      this.nombre = nombre;
    }
  }
  
  export class PersonajeNew extends Personaje {
    constructor(
      nombre,
      alias,
      editorial,
      fuerza,
      arma,
      id = null
    ) {
      super(nombre, alias, editorial, id);
      this.fuerza = fuerza;
      this.num_est = arma;
    }
  }
  
/*export function Anuncios(titulo,transaccion,descripcion,num_wc,num_est,num_dorm,precio,id=null) {
    const anuncio={};

    if(id==null){
        anuncio.id = Date.now();
    }else{
        anuncio.id = id;
    }
    anuncio.transaccion=transaccion;
    anuncio.precio = precio;
    anuncio.descripcion = descripcion;
    anuncio.num_est = num_est;
    anuncio.num_dorm = num_dorm;
    anuncio.titulo = titulo;
    anuncio.num_wc = num_wc;
    return anuncio;
    
}

*/
class Anuncio {
    constructor(titulo, transaccion, descripcion, precio, id = null) {
      if (id === null) {
        this.id = Date.now();
      } else {
        this.id = id;
      }
      this.transaccion = transaccion;
      this.precio = precio;
      this.descripcion = descripcion;
      this.titulo = titulo;
    }
  }
  
  export class Anuncio_Casa extends Anuncio {
    constructor(
      titulo,
      transaccion,
      descripcion,
      precio,
      num_wc,
      num_est,
      num_dorm,
      id = null
    ) {
      super(titulo, transaccion, descripcion, precio, id);
      this.num_wc = num_wc;
      this.num_est = num_est;
      this.num_dorm = num_dorm;
    }
  }
  
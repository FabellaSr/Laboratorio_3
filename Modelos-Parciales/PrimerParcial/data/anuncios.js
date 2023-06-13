export function Anuncios(titulo,transaccion,descripcion,num_wc,num_est,num_dorm,precio,id=null) {
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

//Utilidades para grabar PouchDB
const db = new PouchDB('mensajes');


function guardarMensaje(mensaje) {

    mensaje._id = new Data().toISOString();

    db.put(mensaje).then( () => {
        console.log('Mensaje guardado para posterior posteo');
    });

}
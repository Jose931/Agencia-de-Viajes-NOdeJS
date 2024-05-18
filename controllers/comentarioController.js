import { Comentario } from "../models/Comentarios.js";

const guardarComentario = async (req, res) => {
  //Validar
  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre esta vacio" });
  }

  if (correo.trim() === "") {
    errores.push({ mensaje: "El correo esta vacio" });
  }

  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje esta vacio" });
  }

  if(errores.length > 0){

    const comentarios = await Comentario.findAll();

    //Mostrar la vista con errores
    res.render('comentarios', {
        pagina: 'Comentarios', 
        errores,
        nombre,
        correo,
        mensaje,
        comentarios
    })
  } else {
    
    //Almacenar comentario en la base de datos
    try {
      await Comentario.create({
        nombre,
        correo,
        mensaje
      });

      res.redirect('/comentarios');
    } catch (error) {
      console.log(error);
    }
  }

}

export { guardarComentario };

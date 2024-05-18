import { Viajes } from "../models/Viaje.js";
import { Comentario } from "../models/Comentarios.js";

const paginaInicio = (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
    //Consultar base de datos
    const viajes = await Viajes.findAll();

  res.render("viajes", {
    pagina: "Próximos Viajes",
    viajes: viajes
  });
};

const paginaComentarios = async (req, res) => {

  try {
    const comentarios = await Comentario.findAll();
    res.render("comentarios", {
      pagina: "Comentarios",
      comentarios
    });
  } catch (error) {
    console.log(error);
  }
  
};

//Muestr un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const {slug} = req.params;

    try {
        const viaje = await Viajes.findOne({where: { slug }});

        res.render('viaje', {
            pagina: 'Información viaje',
            viaje
        })
    } catch (error) {
        console.log(error);        
    }
}

export { paginaInicio, paginaNosotros, paginaViajes, paginaComentarios,paginaDetalleViaje };

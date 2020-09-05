const   mongoose    =   require("mongoose");
        Estudiante  =   require("../models/estudiante");
        


// Crear al estudiante

function crearEstudiante(req,res){
    let body = req.body;
    console.log("this is the req: ",req);
    let nuevoEstudiante = new Estudiante({
        nombres     :   body.nombres,
        apellidos   :   body.apellidos,
        edad        :   body.edad,
        correo      :   body.correo,
        direccion   :   body.direccion,
        telefono    :   body.telefono
    })

    nuevoEstudiante.save((err,estudiante)=>{
        if(err){
            return res.status(500).send({message:"Error del servidor"})
        }else{
            if(!estudiante){
                return res.status(200).send({message:"No se pudo crear el estudiante"})
            }else{
                return res.status(200).send({message:"Estudiante creado con exito"});
            }
        }
    })
};

module.exports = {
    crearEstudiante,
}
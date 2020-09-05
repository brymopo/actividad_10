const   mongoose    =   require("mongoose");
        Estudiante  =   require("../models/estudiante");
        


// Crear al estudiante

function crearEstudiante(req,res){
    let body = req.body;    
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
                return res.status(200).send({
                    message:"Estudiante creado con exito",
                    estudiante:estudiante,
                });
            }
        }
    })
};

function mostrarEstudiantes(req,res){
    Estudiante.find({},(err,estudiantes)=>{
        if(err){
            return res.status(500).send({message:"Error del servidor"});
        }else{
            if(!estudiantes){
                return res.status(200).send({message:"No hay estudiantes que mostrar"});
            }else{
                return res.status(200).send({
                    message:"Estudiantes encontrados con exito",
                    estudiantes:estudiantes,
                });
            };
        };
    })
}

function actualizarEstudiante(req,res){
    let estudianteId = req.params.id;
    let nuevosDatos = req.body;
    console.log("Los nuevos datos son: ",nuevosDatos);
    Estudiante.findByIdAndUpdate(estudianteId, nuevosDatos,(err,data)=>{
        if(err){
            return res.status(500).send({message:"Error del servidor"});
        }else{
            if(!data){
                return res.status(200).send({message:"No se pudo actualizar los datos"});
            }else{
                return res.status(200).send({
                    message:"Datos actualizados con exito",
                    actualizado:data,
                });
            };
        };
    })
}

function eliminarEstudiante(req,res){
    let estudianteId = req.params.id;
    Estudiante.findByIdAndDelete(estudianteId,(err,eliminado)=>{
        if(err){
            return res.status(500).send({message:"Error del servidor"});
        }else{
            if(!eliminado){
                return res.status(200).send({message:"No se pudo eliminar el estudiante"});
            }else{
                return res.status(200).send({
                    message:"Estudiante eliminado con extio",
                    eliminado:eliminado,
                });
            };
        };
    });
};

module.exports = {
    crearEstudiante,
    mostrarEstudiantes,
    actualizarEstudiante,
    eliminarEstudiante
}
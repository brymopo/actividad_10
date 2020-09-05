const   mongoose    =   require("mongoose");
        Schema      =   mongoose.Schema;

let estudianteSchema = new Schema({
    nombres:String,
    apellidos:String,
    edad:String,
    correo:String,
    direccion:String,
    telefono:String,
})

module.exports = mongoose.model("Estudiante",estudianteSchema);
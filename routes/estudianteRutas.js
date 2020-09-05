const   express =   require("express");
        router  =   express.Router();
        estudiantesControl = require("../controllers/estudiantesControl");


// Create
router.post("/nuevo",estudiantesControl.crearEstudiante);

//Read
router.get("/",estudiantesControl.mostrarEstudiantes);

//Update
router.put("/:id",estudiantesControl.actualizarEstudiante);

//Delete
router.delete("/:id",estudiantesControl.eliminarEstudiante);

module.exports = router;
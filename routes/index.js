const   express =   require("express");
        router  =   express.Router();
        estudiantesControl = require("../controllers/estudiantesControl");

// Rutas
router.get("/",(req,res)=>{
    res.send("Hi there!!");
})

// Create
router.get("/nuevo_estudiante",(req,res)=>{
    res.send("Ruta para crear nuevo estudiante");
});

router.post("/nuevo_estudiante",estudiantesControl.crearEstudiante);

module.exports = router;
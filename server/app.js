const   express =   require("express");
        app     =   express();
        routes  =   require("../routes/estudianteRutas");        

app.use(express.json());
app.use("/estudiantes",routes);


module.exports = app;
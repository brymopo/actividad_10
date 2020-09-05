const   express =   require("express");
        app     =   express();
        routes  =   require("../routes/index");        

app.use(express.json());
app.use("/estudiantes",routes);


module.exports = app;
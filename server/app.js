const   express =   require("express");
        app     =   express();
        routes  =   require("../routes/index");
        bodyParser =    require("body-parser");

        

// app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(routes);


module.exports = app;
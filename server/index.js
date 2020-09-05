const   mongoose    =   require("mongoose");
        app         =   require("./app");

mongoose.connect("mongodb://localhost:27017/eduBIT",{useNewUrlParser:true,useUnifiedTopology:true});

app.listen("3000",()=>{
    console.log("Server has started");
})
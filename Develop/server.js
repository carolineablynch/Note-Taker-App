//referenceing class activity week 11, activity 11 
//declaring dependencies 

const express = require("express"); 

//telling our app that we are using an express server 
const app = express();

const PORT = provess.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//routing 

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

//start our server 

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
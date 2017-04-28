//console.log("Its working");
var express = require("express");
var app = express();
//var bodyParser = require("body-parser");

//app.use(bodyParser.urlencoded({extended: true}));


app.set("view engine", "ejs");
app.use(express.static("public"));


app.post("/", function(req, res){
    console.log(req.body);
    res.redirect("/");
});

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/about.html", function(req, res){
    res.render("about.ejs");
});

app.get("/home.html", function(req, res){
    res.render("home.ejs");
});


app.get("/bye", function(req, res){
    res.send("thanks for visiting");
})

app.get("*", function(req,res){
    res.send("No page found")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});
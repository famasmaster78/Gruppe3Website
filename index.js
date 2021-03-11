
// Declarations
const fs = require("fs");
const express = require("express");

// Start express
var app = express();
const port = 3050;

// View Engine
app.set("view engine", "ejs");

// Load ejs
app.get("/", (req,res) => {

	res.render("pages/index");
	
});

// 404
app.get("*", (req,res) => {

	res.render("pages/error", {err: "Kunne ikke finde ønskede side", errCode: 404});

})


app.listen(port,() => { console.log("App started on port: " + port) });
const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "pug");

app.get("/", (req, res) => res.render("dashboard"));
app.get("/login", (req, res) => res.render("login"));
app.get("/register", (req, res) => res.render("register"));

app.listen(PORT, console.log("Server is running on port: " + PORT));

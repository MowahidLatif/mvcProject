const express = require("express");
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");

const app = express();
const PORT = 8080;

app.set("view engine", "pug");
app.use("/", authRoutes);
app.use("/", dashboardRoutes);

app.listen(PORT, console.log("Server is running on port: " + PORT));

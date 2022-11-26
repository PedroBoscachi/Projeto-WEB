import express from "express";

//criação do server
const app = express();

//server está nessa porta
app.listen(3000, () => console.log("Server running..."));

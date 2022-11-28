import express from "express";

const UsuarioController = require("./controllers/usuarioController");

//criação do server
const app = express();

//essas linhas permitem que nosso server receba e responda requisições
//em JSON
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/usuario", UsuarioController);

//server está nessa porta
app.listen(3000, () => console.log("Server running..."));

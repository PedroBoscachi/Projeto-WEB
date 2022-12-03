import express from "express";

// const UsuarioController = require("./controllers/usuarioController");
const AgendamentoController = require("./controllers/meusAgendamentosController");
const RegisterController = require("./controllers/registerController");
const LoginController = require("./controllers/loginController");

const cors = require("cors");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(cors());

app.use("/cadastrar", RegisterController);
app.use("/login", LoginController);
// app.use("/usuario", UsuarioController);
app.use("/agendamento", AgendamentoController);

app.listen(3000, () => console.log("Server running..."));

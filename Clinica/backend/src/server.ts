import express from "express";

const UsuarioController = require("./controllers/usuarioController");
const AgendamentoController = require("./controllers/meusAgendamentosController");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/usuario", UsuarioController);
app.use("/agendamento", AgendamentoController);

app.listen(3000, () => console.log("Server running..."));

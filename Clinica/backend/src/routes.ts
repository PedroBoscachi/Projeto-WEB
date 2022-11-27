const express = require("express");
const route = express.Router();

const loginController = require("./controllers/loginController");
const meusAgendamentosController = require("./controllers/meusAgendamentosController");

route.get("/a", meusAgendamentosController.paginaMeusAgendamentos);

const express = require("express");
const route = express.Router();

const loginController = require("./controllers/loginController");
const meusAgendamentosController = require("./controllers/meusAgendamentosController");

route.get("/", (request, response) => {
  response.send("Home");
});

route.get("/meusagendamentos", (request, response) => {
  meusAgendamentosController.paginaMeusAgendamentos;
});

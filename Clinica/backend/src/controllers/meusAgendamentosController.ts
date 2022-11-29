import { AgendamentoRepository } from "./../repositories/agendamentoRepository";
import { AgendamentoService } from "../services/agendamentoService";
import { DTOMapper } from "../helpers/DTOMapper";
import { AgendamentoDTO } from "../dtos/AgendamentoDTO";

const express = require("express");

const router = express.Router();

const dtoMapper: DTOMapper = new DTOMapper();

const agendamentoRepository: AgendamentoRepository =
  new AgendamentoRepository();

const agendamentoService: AgendamentoService = new AgendamentoService(
  agendamentoRepository,
  dtoMapper
);

router.get("/cadastrados", (request, response) => {
  let foundListSchedulings = agendamentoService.getSchedulings();
  return response.json({
    agendamentos: foundListSchedulings,
  });
});

router.post("/cadastrar", (request, response) => {
  const schedulingDto: AgendamentoDTO = request.body;
  let savedScheduling = agendamentoService.saveScheduling(schedulingDto);

  return response.json({
    error: false,
    message: "Cadastrado com sucesso",
    agendamentos: savedScheduling,
  });
});

router.put("/editar", (request, response) => {
  const schedulingDto: AgendamentoDTO = request.body;

  let updatedScheduling = agendamentoService.updateScheduling(schedulingDto);

  return response.json({
    error: false,
    message: "Agendamento editado com sucesso",
    agendamento: updatedScheduling,
  });
});

router.delete("/excluir", (request, response) => {
  const id = response.body;

  let deleted = agendamentoService.deleteScheduling(id);

  return response.json({
    error: false,
    message: "Agendamento deletado com sucesso",
    agendamento: deleted,
  });
});

module.exports = router;

import { UsuarioRepository } from './../repositories/usuarioRepository';
import { Usuario } from './../models/Usuario';
import { AgendamentoFormDTO } from './../Dtos/AgendamentoFormDTO';
import { AgendamentoRepository } from "./../repositories/agendamentoRepository";
import { AgendamentoService } from "../services/agendamentoService";
import { DTOMapper } from "../helpers/DTOMapper";
import { AgendamentoDTO } from "../Dtos/AgendamentoDTO";

const express = require("express");

const router = express.Router();

const dtoMapper: DTOMapper = new DTOMapper();

const agendamentoRepository: AgendamentoRepository =
  new AgendamentoRepository();

const userRepository: UsuarioRepository = new UsuarioRepository();

const agendamentoService: AgendamentoService = new AgendamentoService(
  agendamentoRepository,
  userRepository,
  dtoMapper,
);

router.get("/cadastrados", (request, response) => {
  let foundListSchedulings = agendamentoService.getSchedulings();
  return response.json({
    agendamentos: foundListSchedulings,
  });
});

router.post("/cadastrar", (request, response) => {
  const schedulingFormDto: AgendamentoFormDTO = request.body;
  let savedScheduling = agendamentoService.saveScheduling(schedulingFormDto);

  return response.json({
    error: false,
    message: "Cadastrado com sucesso",
    agendamentos: savedScheduling,
  });
});

router.put("/editar", (request, response) => {
  const schedulingFormDto: AgendamentoFormDTO = request.body;

  let updatedScheduling = agendamentoService.updateScheduling(schedulingFormDto);

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

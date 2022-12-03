import { UserRepository } from "./../repositories/usuarioRepository";
import { User } from "../models/User";
import { SchedulingFormDTO } from "../dtos/SchedulingFormDTO";
import { SchedulingRepository } from "./../repositories/agendamentoRepository";
import { SchedulingService } from "../services/agendamentoService";
import { DTOMapper } from "../helpers/DTOMapper";
import { SchedulingDTO } from "../dtos/SchedulingDTO";
import bcrypt = require("bcrypt");
import jwt = require("jsonwebtoken");
import { SchedulingValidator } from "../validators/SchedulingValidator";

const login = require("../middlewares/login");

const express = require("express");

const router = express.Router();

const dtoMapper: DTOMapper = new DTOMapper();

const schedulingRepository: SchedulingRepository = new SchedulingRepository();

const userRepository: UserRepository = new UserRepository();

const schedulingValidator: SchedulingValidator = new SchedulingValidator(schedulingRepository);

const schedulingService: SchedulingService = new SchedulingService(
  schedulingRepository,
  userRepository,
  dtoMapper,
  schedulingValidator
);

router.get("/cadastrados", login, (request, response) => {
  let foundListSchedulings = schedulingService.getSchedulings();
  return response.json({
    schedulings: foundListSchedulings,
  });
});

router.post("/cadastrar", login, (request, response) => {
  const schedulingFormDto: SchedulingFormDTO = request.body;
  let savedScheduling = schedulingService.saveScheduling(schedulingFormDto);

  return response.json({
    error: false,
    message: "Cadastrado com sucesso",
    schedulings: savedScheduling,
  });
});

router.put("/editar", login, (request, response) => {
  const schedulingFormDto: SchedulingFormDTO = request.body;

  let updatedScheduling = schedulingService.updateScheduling(schedulingFormDto);

  return response.json({
    error: false,
    message: "Agendamento editado com sucesso",
    schedulings: updatedScheduling,
  });
});

router.delete("/excluir", login, (request, response) => {
  const id = request.body;

  let deleted = schedulingService.deleteScheduling(id);

  return response.json({
    error: false,
    message: "Agendamento deletado com sucesso",
    schedulings: deleted,
  });
});

module.exports = router;
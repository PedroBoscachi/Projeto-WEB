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
import { UserService } from "../services/usuarioService";
import { UsersValidator } from "../validators/UsersValidator";
import { UserDTO } from "../dtos/UserDTO";
import { Request } from "express";

const login = require("../middlewares/login");

const express = require("express");

const router = express.Router();

const dtoMapper: DTOMapper = new DTOMapper();

const schedulingRepository: SchedulingRepository = new SchedulingRepository();

const userRepository: UserRepository = new UserRepository();

const userValidator: UsersValidator = new UsersValidator();

const userService: UserService = new UserService(
  userRepository,
  dtoMapper,
  userValidator
);

router.get("/meu-perfil", login, (request, response) => {
  let foundUser = userService.getMyProfilebyCpf(request.query.cpf);

  return response.json({
    error: false,
    message: "Usuário encontrado com sucesso",
    user: foundUser,
  });
});

router.put("/editar", login, (request, response) => {
  let updatedUser = userService.updateUser(request.body);

  return response.json({
    error: false,
    message: "Usuário encontrado com sucesso",
    savedUser: updatedUser,
  });
});

router.delete("/excluir", login, (request, response) => {
  const cpf = request.query.cpf;

  let deleted = userService.deleteUser(cpf);

  return response.json({
    error: false,
    message: "Usuário deletado com sucesso",
    user: deleted,
  });
});

module.exports = router;

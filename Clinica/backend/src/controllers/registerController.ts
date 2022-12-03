import { UserRepository } from "./../repositories/usuarioRepository";
import { User } from "../models/User";
import { SchedulingFormDTO } from "../dtos/SchedulingFormDTO";
import { SchedulingRepository } from "./../repositories/agendamentoRepository";
import { DTOMapper } from "../helpers/DTOMapper";
import bcrypt = require("bcrypt");
import jwt = require("jsonwebtoken");
import { UserService } from "../services/usuarioService";
import { UserDTO } from "../dtos/UserDTO";
import { UserFormDTO } from "../dtos/UserFormDTO";
import { UsersValidator } from "../validators/UsersValidator";

const login = require("../middlewares/login");

const express = require("express");

const router = express.Router();

const dtoMapper: DTOMapper = new DTOMapper();

const schedulingRepository: SchedulingRepository = new SchedulingRepository();

const userRepository: UserRepository = new UserRepository();

const userValidator: UsersValidator = new UsersValidator();

const userService: UserService = new UserService(userRepository, dtoMapper, userValidator);

router.post("/criar-conta", (request, response, next) => {
  bcrypt.hash(request.body.password, 10, (errorBcrypt, hash) => {
    if (errorBcrypt) {
      return response.status(500).send({
        error: errorBcrypt,
      });
    }

    const userFormDto: UserFormDTO = request.body;
    userFormDto.password = hash;
    const savedUser = userService.saveUser(userFormDto);

    return response.json({
      message: "User created with success",
      createdUser: savedUser,
    });
  });
});

module.exports = router;

import { UserRepository } from "./../repositories/usuarioRepository";
import { User } from "../models/User";
import { SchedulingFormDTO } from "../dtos/SchedulingFormDTO";
import { SchedulingRepository } from "./../repositories/agendamentoRepository";
import { DTOMapper } from "../helpers/DTOMapper";
import bcrypt = require("bcrypt");
import jwt = require("jsonwebtoken");
import { UserService } from "../services/usuarioService";
import { UserDTO } from "../dtos/UserDTO";

const login = require("../middlewares/login");

const express = require("express");

const router = express.Router();

const dtoMapper: DTOMapper = new DTOMapper();

const schedulingRepository: SchedulingRepository = new SchedulingRepository();

const userRepository: UserRepository = new UserRepository();

const userService: UserService = new UserService(userRepository, dtoMapper);

router.post("criar-conta", (request, response, next) => {
  bcrypt.hash(request.body.password, 10, (errorBcrypt, hash) => {
    if (errorBcrypt) {
      return response.status(500).send({
        error: errorBcrypt,
      });
    }

    const userDto: UserDTO = request.body;
    userDto.password = hash;
    const savedUser = userService.saveUser(userDto);

    return response.json({
      message: "User created with success",
      createdUser: savedUser,
    });
  });
});

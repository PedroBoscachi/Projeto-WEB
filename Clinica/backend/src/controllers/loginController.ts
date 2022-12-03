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

router.post("/entrar", (request, response, next) => {
  const user = userService.getUserbyCpf(request.body.cpf);
  bcrypt.compare(request.body.password, user.password, (error, result) => {
    if (error) {
      return response
        .status(401)
        .send({ message: "Failure in authentication" });
    }

    if (result) {
      const token = jwt.sign(
        {
          cpf: user.cpf,
          name: user.name,
        },
        "secret",
        {
          expiresIn: "1h",
        }
      );

      return response.status(200).send({
        message: "Authentication succeeded",
        token: token,
      });
    }
  });
});

module.exports = router;

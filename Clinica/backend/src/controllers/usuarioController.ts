import { UsuarioRepository } from "./../repositories/usuarioRepository";
import { UsuarioService } from "../services/usuarioService";
import { DTOMapper } from "../helpers/DTOMapper";
import { UsuarioDTO } from "../Dtos/UsuarioDTO";
import { Usuario } from "../models/Usuario";

const express = require("express");

const router = express.Router();

const listUsers: Usuario[] = [];

const dtoMapper: DTOMapper = new DTOMapper();

const usuarioRepository: UsuarioRepository = new UsuarioRepository();

const usuarioService: UsuarioService = new UsuarioService(
  usuarioRepository,
  dtoMapper
);

router.get("/cadastrados", (request, response) => {
  let foundListUsers = usuarioService.getUsers();
  return response.json({
    data: foundListUsers,
  });
});

router.post("/cadastrar", (request, response) => {
  const userDto: UsuarioDTO = request.body;
  let savedUser = usuarioService.saveUser(userDto);

  return response.json({
    error: false,
    message: "Cadastrado com sucesso",
    usuarios: savedUser,
  });
});

router.put("/editar", (request, response) => {
  const userDto: UsuarioDTO = request.body;

  let user: Usuario;

  listUsers.forEach((existingUser) => {
    if (existingUser.cpf == userDto.cpf) user = existingUser;
  });

  user.nome = userDto.nome;
  user.sobrenome = userDto.sobrenome;
  user.telefone = userDto.telefone;
  user.dataNascimento = userDto.dataNascimento;

  return response.json({
    error: false,
    message: "Usuário editado com sucesso",
    usuario: user,
  });
});

router.delete("/excluir", (request, response) => {
  const cpf = response.body;

  deleteUser(cpf);

  return response.json({
    error: false,
    message: "Usuário deletado com sucesso",
    usuario: listUsers,
  });
});

function deleteUser(cpf: string) {
  if (listUsers.length === 0) return null;

  listUsers.forEach((user, index) => {
    if (user.cpf === cpf) listUsers.splice(index, 1);
  });
}

module.exports = router;

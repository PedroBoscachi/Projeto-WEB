import { UsuarioRepository} from './../repositories/usuarioRepository';
import { UsuarioService } from './../services/usuarioService.service';
import { DTOMapper } from './../converters/DTOMapper';
import { UsuarioDTO } from "../Dtos/UsuarioDTO";
import { Usuario } from "../models/Usuario";

const express = require("express");

const router = express.Router();

const listUsers: Usuario[] = [];

const dtoMapper: DTOMapper = new DTOMapper;

const usuarioRepository: UsuarioRepository = new UsuarioRepository;

const usuarioService: UsuarioService = new UsuarioService(usuarioRepository,dtoMapper);

router.get("/cadastrados", (request, response) => {
  let foundListUsers = usuarioService.getUsuarios()
  return response.json({
    data: foundListUsers,
  });
});

router.post("/cadastrar", (request, response) => {
  const usuarioDto: UsuarioDTO = request.body;
  let savedUsuario = usuarioService.saveUsuario(usuarioDto);

  return response.json({
    error: false,
    message: "Cadastrado com sucesso",
    usuarios: savedUsuario,
  });
});

router.put("/editar", (request, response) => {
  const usuarioDto: UsuarioDTO = request.body;

  let usuario: Usuario;

  listUsers.forEach((user) => {
    if (user.cpf == usuarioDto.cpf) usuario = user;
  });

  usuario.nome = usuarioDto.nome;
  usuario.sobrenome = usuarioDto.sobrenome;
  usuario.telefone = usuarioDto.telefone;
  usuario.dataNascimento = usuarioDto.dataNascimento;

  return response.json({
    error: false,
    message: "Usuário editado com sucesso",
    usuario: usuario,
  });
});

router.delete("/excluir", (request, response) => {
  const cpf = response.body;

  excluirUsuario(cpf);

  return response.json({
    error: false,
    message: "Usuário deletado com sucesso",
    usuario: listUsers,
  });
});

module.exports = router;

function excluirUsuario(cpf: string) {
  if (listUsers.length === 0) return null;

  listUsers.forEach((user, index) => {
    if (user.cpf === cpf) listUsers.splice(index, 1);
  });
}

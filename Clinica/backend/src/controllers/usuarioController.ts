import { UsuarioDTO } from "../Dtos/UsuarioDTO";
import { Usuario } from "../models/Usuario";

const express = require("express");

const router = express.Router();

const listUsers: Usuario[] = [];

router.get("/cadastrados", (request, response) => {
  return response.json({
    data: listUsers,
  });
});

router.post("/cadastrar", (request, response) => {
  const usuarioDto: UsuarioDTO = request.body;

  const usuario = new Usuario(
    usuarioDto.nome,
    usuarioDto.sobrenome,
    usuarioDto.cpf,
    usuarioDto.telefone,
    usuarioDto.dataNascimento
  );

  listUsers.push(usuario);

  return response.json({
    error: false,
    message: "Cadastrado com sucesso",
    usuarios: usuarioDto,
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

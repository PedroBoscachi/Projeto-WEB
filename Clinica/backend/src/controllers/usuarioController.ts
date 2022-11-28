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
    usuarioDto.telefone
  );

  listUsers.push(usuario);

  return response.json({
    error: false,
    message: "Cadastrado com sucesso",
    usuarios: usuarioDto,
  });
});

module.exports = router;

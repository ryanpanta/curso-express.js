const Service = require("../services/aluno")

module.exports = {
  get: (req, res) => res.send("[GET] Aluno"),
  create: (req, res) => res.send("[POST] Aluno"),
  delete: (req, res) => res.send("[DELETE] Aluno"),
  update: (req, res) => res.send("[PATCH] Aluno"),
};

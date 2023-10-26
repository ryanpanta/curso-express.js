const express = require("express");
const router = express.Router();
const Controlador = require("../controladores/matricula.js")

router.post("/matricula", Controlador.create);
router.get("/matricula/", Controlador.getAll);
router.get("/matricula/aluno/:id", Controlador.getByAluno);
router.get("/matricula/professor/:id", Controlador.getByProfessor);
router.delete("/matricula/curso/:idCurso/aluno/:idAluno", Controlador.delete);
router.delete("/matricula/curso/:idCurso/aluno/:idAluno", Controlador.delete);
router.patch("/matricula/:id", Controlador.update);

module.exports = router;
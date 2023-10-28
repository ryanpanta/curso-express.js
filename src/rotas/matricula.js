const express = require("express");
const router = express.Router();
const Controlador = require("../controladores/matricula.js")

router.post("/matricula", Controlador.create);
router.get("/matricula/curso/:idCurso/aluno/:idAluno", Controlador.getByMatricula)
router.get("/matricula", Controlador.getAll);
router.get("/matricula/aluno/:idAluno", Controlador.getByAluno);
router.get("/matricula/curso/:idCurso", Controlador.getByCurso);
router.delete("/matricula/curso/:idCurso/aluno/:idAluno", Controlador.delete);



module.exports = router;
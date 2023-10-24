const express = require("express");
const router = express.Router();
const Controlador = require("../controladores/aluno.js")

router.get("/aluno", Controlador.get);
router.post("/aluno", Controlador.create);
router.delete("/aluno", Controlador.delete);
router.patch("/aluno", Controlador.update);

module.exports = router;
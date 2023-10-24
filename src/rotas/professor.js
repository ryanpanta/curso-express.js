const express = require("express");
const Controlador = require("../controladores/professor")

const router = express.Router();

router.get("/professor", Controlador.get);
router.post("/professor", Controlador.create);
router.delete("/professor", Controlador.delete);
router.patch("/professor", Controlador.update);

module.exports = router;
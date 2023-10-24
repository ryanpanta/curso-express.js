const express = require("express");
const Controlador = require("../controladores/curso");

const router = express.Router();

router.get("/curso", Controlador.get);
router.post("/curso", Controlador.create);
router.delete("/curso", Controlador.delete);
router.patch("/curso", Controlador.update);

module.exports = router;
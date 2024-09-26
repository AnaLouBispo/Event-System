const { Router } = require("express");
const EventoController = require("../Controller/eventoController");

const router = Router();

router.post("/criarEvento", EventoController.create);
router.get("/buscarEventos", EventoController.getAll);
router.get("/buscarEventoUnico/:id", EventoController.getOne);
router.put("/editarEvento/:id", EventoController.update);
router.delete("/deletarEvento/:id", EventoController.delete);

module.exports = router;

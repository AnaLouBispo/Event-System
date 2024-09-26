const { Router } = require("express");
const ParticipanteController = require("../Controller/participanteController");

const router = Router();

router.post("/criarParticipante", ParticipanteController.create);
router.get("/buscarParticipantes", ParticipanteController.getAll);
router.get("/buscarParticipanteUnico/:id", ParticipanteController.getOne);
router.put("/editarParticipante/:id", ParticipanteController.update);
router.delete("/deletarParticipante/:id", ParticipanteController.delete);

module.exports = router;

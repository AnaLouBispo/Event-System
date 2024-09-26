const { Router } = require("express");

const router = Router();

const EventoRoutes = require("./eventoRouter");
const ParticipanteRoutes = require("./participanteRouter");

router.use("/evento", EventoRoutes);
router.use("/participante", ParticipanteRoutes);

module.exports = router;

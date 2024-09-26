const Evento = require("../Models/eventoModel");
const Partcipante = require("../Models/participantesModel");

const EventoController = {
  create: async (req, res) => {
    try {
      const { nome, data, localizacao } = req.body;
      const eventoCriado = await Evento.create({ nome, data, localizacao });

      return res.status(200).json({
        msg: "Evento criado com sucesso",
        eventoCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte",
      });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { nome, data, localizacao } = req.body;

    try {
      const eventUpdate = await Evento.findByPk(id);
      if (eventUpdate === null) {
        return res.status(404).json({
          msg: "Não encontrado",
        });
      }

      const update = await eventUpdate.update({
        nome,
        data,
        localizacao,
      });

      return res.status(200).json({
        msg: "Evento atualizado com sucesso!",
        update,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte.",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const eventos = await Evento.findAll();
      return res.status(200).json({
        msg: "Eventos encontrados",
        eventos,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte.",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const eventoEncontrado = await Evento.findByPk(id);
      if (eventoEncontrado === null) {
        return res.status(404).json({
          msg: "Evento não encontrado",
        });
      }

      res.status(200).json({
        msg: "Evento encontrado",
        eventoEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte.",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const eventFound = await Evento.findByPk(id);
      if (eventFound === null) {
        return res.status(404).json({
          msg: "Evento não encontrado",
        });
      }
      await Partcipante.destroy({
        where: { eventoId: id },
      });

      await Evento.destroy({
        where: { id: id },
      });

      return res.status(200).json({
        msg: "Evento deletado com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte.",
      });
    }
  },
};
module.exports = EventoController;

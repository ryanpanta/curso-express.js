const Service = require("../services/curso");

module.exports = {
  getById: async (req, res) => {
    try {
      const {id} = req.params;
      const curso = await Service.getById(+id);
      if (!curso)
        throw new Error("Curso não encontrado!!");
      return res.json(curso);
  }
    catch (error) {
      return res.status(404).json(error.message)
    }
  },
  getAll: async (req, res) => {
    const cursos = await Service.getAll();
    return res.json(cursos);
  }, 
  create: async (req, res) => {
    try {
      const curso = req.body;
      const cursoCriado = await Service.create(curso);
      return res.json(cursoCriado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  delete: async (req, res) => {
    const {id} = req.params;
    const cursoDeletado = await Service.delete(+id);
    return res.json(cursoDeletado);
  },
  update: async (req, res) => {
    try{
      const {id} = req.params;
      const cursoParcial = req.body;
      const cursoAtualizado = await Service.update(+id, cursoParcial);
      return res.json(cursoAtualizado);
    }
    catch (error) {
      res.status(400).json(error);
    }
  },
};

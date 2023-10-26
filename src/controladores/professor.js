const Service = require("../services/professor");

module.exports = {
  getById: async (req, res) => {
    try {
      const {id} = req.params;
      const professor = await Service.getById(+id);
      if (!professor)
        throw new Error("Professor não encontrado!!");
      return res.json(professor);
  }
    catch (error) {
      return res.status(404).json(error.message)
    }
  },
  getAll: async (req, res) => {
    const professors = await Service.getAll();
    return res.json(professors);
  }, 
  create: async (req, res) => {
    try {
      const professor = req.body;
      const professorCriado = await Service.create(professor);
      return res.json(professorCriado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  delete: async (req, res) => {
    const {id} = req.params;
    const professorDeletado = await Service.delete(+id);
    return res.json(professorDeletado);
  },
  update: async (req, res) => {
    const {id} = req.params;
    const professorParcial = req.body;
    const professorAtualizado = await Service.update(+id, professorParcial);
    return res.json(professorAtualizado);
  },
};

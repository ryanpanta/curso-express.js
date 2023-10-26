const Service = require("../services/aluno");

module.exports = {
  getById: async (req, res) => {
    try {
      const {id} = req.params;
      const aluno = await Service.getById(+id);
      if (!aluno)
        throw new Error("Aluno não encontrado!");
      return res.json(aluno);

    }
    catch (error) {
      return res.status(404).json(error.message);
    }
  },
  getAll: async (req, res) => {
    const alunos = await Service.getAll();
    return res.json(alunos);
  }, 
  create: async (req, res) => {
    try {
      const aluno = req.body;
      const alunoCriado = await Service.create(aluno);
      return res.json(alunoCriado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  delete: async (req, res) => {
    const {id} = req.params;
    const alunoDeletado = await Service.delete(+id);
    return res.json(alunoDeletado);
  },
  update: async (req, res) => {
    const {id} = req.params;
    const alunoParcial = req.body;
    const alunoAtualizado = await Service.update(+id, alunoParcial);
    return res.json(alunoAtualizado);
  },
};

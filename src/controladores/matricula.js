const Service = require("../services/matricula");

module.exports = {
  getByCurso: async (req, res) => {
    try {
      const { idCurso } = req.params;
      const matricula = await Service.getByCurso(+idCurso);
      if (!matricula) throw new Error("Matricula não encontrada!!");
      return res.json(matricula);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  },
  getByAluno: async (req, res) => {
    try {
      const { idAluno } = req.params;
      const matricula = await Service.getByAluno(+idAluno);
      if (!matricula) throw new Error("Matricula não encontrada!!");
      return res.json(matricula);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  },
  getAll: async (req, res) => {
    const matriculas = await Service.getAll();
    return res.json(matriculas);
  },

  getByMatricula: async (req, res) => {
    try {
      const { idCurso, idAluno } = req.params;
      const matricula = await Service.getByMatricula(+idCurso, +idAluno);
      if (!matricula) throw new Error("Matricula não encontrada");
      return res.json(matricula);
    } catch (error) {
      return res.status(404).send(error?.message);
    }
  },
  
  create: async (req, res) => {
    try {
      const matricula = req.body;
      const matriculaCriado = await Service.create(matricula);
      return res.json(matriculaCriado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { idCurso, idAluno } = req.params;
      const matriculaDeletado = await Service.delete(+idCurso, +idAluno);
      return res.json(matriculaDeletado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const matriculaParcial = req.body;
    const matriculaAtualizado = await Service.update(+id, matriculaParcial);
    return res.json(matriculaAtualizado);
  },
};

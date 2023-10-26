const prisma = require("@prisma/client");
const prismaClient = new prisma.PrismaClient();
const { buildTelefonePrismaQuery } = require("../utils");

module.exports = {
  create: async (matricula) => {
    const matriculaCriado = await prismaClient.matricula.create({
      data: matricula,
    });
    return matriculaCriado;
  },
  getAll: async () => {
    const matriculas = await prismaClient.matricula.findMany();
    return matriculas;
  },
  getByCurso: async (idCurso) => {
    const matricula = await prismaClient.matricula.findMany({
      where: {
        curso_id: idCurso,
      },
      include: {
        telefones: {
          select: {
            telefone: true,
          },
        },
      },
    });
    return matricula;
  },
  getByAluno: async (idAluno) => {
    const matricula = await prismaClient.matricula.findMany({
      where: {
        curso_id: idAluno,
      },
      include: {
        telefones: {
          select: {
            telefone: true,
          },
        },
      },
    });
    return matricula;
  },
  delete: async (idCurso, idAluno) => {
    const matriculaDeletado = await prismaClient.matricula.delete({
      where: {
        matricula_id: {
          aluno_id: idAluno,
          curso_id: idCurso,
        },
      },
    });
    return matriculaDeletado;
  },
};

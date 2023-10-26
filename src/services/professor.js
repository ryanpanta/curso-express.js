const prisma = require("@prisma/client");
const prismaClient = new prisma.PrismaClient();
const { buildTelefonePrismaQuery } = require("../utils");

module.exports = {
  create: async ({ telefones, ...professor }) => {
    const professorCriado = await prismaClient.professor.create({
      data: {
        ...professor,
        telefones: buildTelefonePrismaQuery(telefones),
      },
    });
    return professorCriado;
  },
  getAll: async () => {
    const professors = await prismaClient.professor.findMany({
      include: {
        telefones: {
          select: {
            telefone: true,
          },
        },
      },
    });
    return professors;
  },
  getById: async (id) => {
    const professor = await prismaClient.professor.findUnique({
      where: { id },
      include: {
        telefones: {
          select: {
            telefone: true,
          },
        },
      },
    });
    return professor;
  },
  delete: async (id) => {
    const professorDeletado = await prismaClient.professor.delete({
      where: {
        id,
      },
    });
    return professorDeletado;
  },
  update: async (id, { telefones, ...professorParcial }) => {
    const professorAtualizado = await prismaClient.professor.update({
      where: {
        id,
      },
      data: {
        ...professorParcial,
        telefones: buildTelefonePrismaQuery(telefones),
      },
    });
    return professorAtualizado;
  },
};

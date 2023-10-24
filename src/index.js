const express = require("express");
const morgan = require("morgan");
const professorRouter = require("./rotas/professor.js");
const cursoRouter = require("./rotas/curso.js");
const alunoRouter = require("./rotas/aluno.js");

const app = express();

app.use(morgan("dev"));
app.use([professorRouter, cursoRouter, alunoRouter,]);


app.listen(8080, () => console.log("Servidor em execução"))
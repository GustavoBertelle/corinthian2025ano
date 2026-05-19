var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// SALVAR RESULTADO

router.post("/salvar", function (req, res) {

    quizController.salvarResultado(req, res);

});

// ÚLTIMOS RESULTADOS

router.get("/ultimos/:idUsuario", function (req, res) {

    quizController.buscarUltimosResultados(req, res);

});

// TEMPO REAL

router.get("/tempo-real/:idUsuario", function (req, res) {

    quizController.buscarResultadosTempoReal(req, res);

});

module.exports = router;
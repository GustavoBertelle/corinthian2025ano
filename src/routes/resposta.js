var express = require("express");
var router = express.Router();

var quizController = require("../controllers/respostaController");

router.post("/salvar", function (req, res) {

    quizController.salvar(req, res);

});

router.get("/ultimos/:idUsuario", function (req, res) {

    quizController.buscarUltimosResultados(req, res);

});



router.get("/tempo-real/:idUsuario", function (req, res) {

    quizController.buscarResultadosTempoReal(req, res);

});

router.get("/kpis/:idUsuario", function(req, res){
    quizController.buscarKpis(req, res);
});

router.get("/ranking", function(req, res){

    quizController.buscarRanking(req, res);

});

module.exports = router;

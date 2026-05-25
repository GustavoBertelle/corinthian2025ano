var quizModel = require("../models/respostaModel");

// ÚLTIMOS RESULTADOS

function buscarUltimosResultados(req, res) {

    var idUsuario = req.params.idUsuario;

    quizModel.buscarUltimosResultados(idUsuario)

        .then(function(resultado) {

            if (resultado.length > 0) {

                res.status(200).json(resultado);

            } else {

                res.status(204).send("Nenhum resultado encontrado!");

            }

        })

        .catch(function(erro) {

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        });

}

// TEMPO REAL

function buscarResultadosTempoReal(req, res) {

    var idUsuario = req.params.idUsuario;

    quizModel.buscarResultadosTempoReal(idUsuario)

        .then(function(resultado) {

            if (resultado.length > 0) {

                res.status(200).json(resultado);

            } else {

                res.status(204).send("Nenhum resultado encontrado!");

            }

        })

        .catch(function(erro) {

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        });

}

module.exports = {

    buscarUltimosResultados,
    buscarResultadosTempoReal

}
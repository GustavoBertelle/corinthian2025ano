var quizModel = require("../models/quizModel");

// SALVAR RESULTADO

function salvarResultado(req, res) {

    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var fkUsuario = req.body.fkUsuario;

    if (acertos == undefined) {

        res.status(400).send("Acertos undefined");

    } else if (erros == undefined) {

        res.status(400).send("Erros undefined");

    } else if (fkUsuario == undefined) {

        res.status(400).send("Usuário undefined");

    } else {

        quizModel.salvarResultado(acertos, erros, fkUsuario)

            .then(function(resultado) {

                res.status(200).json(resultado);

            })

            .catch(function(erro) {

                console.log(erro);

                res.status(500).json(erro.sqlMessage);

            });

    }

}

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

    salvarResultado,
    buscarUltimosResultados,
    buscarResultadosTempoReal

}
var respostaModel = require("../models/respostaModel");

function salvar(req, res) {

    var fkUsuario = req.body.fkUsuario;
    var fkPergunta = req.body.fkPergunta;
    var respostaEscolhida = req.body.respostaEscolhida;
    var respostaCerta = req.body.respostaCerta;

    respostaModel.salvarResposta(
        fkUsuario,
        fkPergunta,
        respostaEscolhida,
        respostaCerta
    )
    .then(function(resultado) {

        res.json(resultado);

    })
    .catch(function(erro) {

        console.log(erro);

        res.status(500).json(erro.sqlMessage);

    });
}

function buscarUltimosResultados(req, res) {

    var idUsuario = req.params.idUsuario;

    respostaModel.buscarUltimosResultados(idUsuario)

        .then(function(resultado) {

            if (resultado.length > 0) {

                res.status(200).json(resultado);

            } else {
                res.status(200).json([]);

            }

        })

        .catch(function(erro) {

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        });

}

function buscarKpis(req, res){

    var idUsuario = req.params.idUsuario;

    respostaModel.buscarKpis(idUsuario)

    .then(function(resultado){

        res.json(resultado[0]);

    })

    .catch(function(erro){

        console.log(erro);

        res.status(500).json(erro.sqlMessage);

    });
}

function buscarResultadosTempoReal(req, res) {

    var idUsuario = req.params.idUsuario;

    respostaModel.buscarResultadosTempoReal(idUsuario)

        .then(function(resultado) {

            if (resultado.length > 0) {

                res.status(200).json(resultado);

            } else {

                 res.status(200).json([]);

            }

        })

        .catch(function(erro) {

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        });

}
function buscarRanking(req, res) {

    respostaModel.buscarRanking()

    .then(function(resultado){

        res.json(resultado);

    })

    .catch(function(erro){

        console.log(erro);

        res.status(500).json(erro.sqlMessage);

    });
}
module.exports = {
    salvar,
    buscarUltimosResultados,
    buscarResultadosTempoReal,
    buscarKpis,
    buscarRanking
};
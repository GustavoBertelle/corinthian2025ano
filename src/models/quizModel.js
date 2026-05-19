var database = require("../database/config");

function salvarResultado(acertos, erros, fkUsuario) {

    var instrucaoSql = `
        INSERT INTO quiz (acertos, erros, fkUsuario)
        VALUES (${acertos}, ${erros}, ${fkUsuario});
    `;

    console.log("Executando SQL: " + instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarUltimosResultados(idUsuario) {

    var instrucaoSql = `
        SELECT 
            acertos,
            erros,
            DATE_FORMAT(dataQuiz,'%H:%i:%s') AS momento_grafico
        FROM quiz
        WHERE fkUsuario = ${idUsuario}
        ORDER BY idQuiz DESC
        LIMIT 7;
    `;

    return database.executar(instrucaoSql);
}

function buscarResultadosTempoReal(idUsuario) {

    var instrucaoSql = `
        SELECT 
            acertos,
            erros,
            DATE_FORMAT(dataQuiz,'%H:%i:%s') AS momento_grafico
        FROM quiz
        WHERE fkUsuario = ${idUsuario}
        ORDER BY idQuiz DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResultado,
    buscarUltimosResultados,
    buscarResultadosTempoReal
}
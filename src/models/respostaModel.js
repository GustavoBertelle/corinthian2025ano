var database = require("../database/config");

function salvarResposta(fkUsuario, fkPergunta, respostaEscolhida, respostaCerta) {

    var instrucaoSql = `
        INSERT INTO respostas
        (fkUsuario, fkPergunta, respostaEscolhida, respostaCerta)
        VALUES
        (${fkUsuario}, ${fkPergunta}, '${respostaEscolhida}', '${respostaCerta}');
    `;

    return database.executar(instrucaoSql);
}

function buscarUltimosResultados(idUsuario) {

    var instrucaoSql = `
        SELECT 
            COUNT(*) AS acertos,
            DATE_FORMAT(dataResposta, '%d/%m %H:%i') AS dataResposta
        FROM respostas
        WHERE fkUsuario = ${idUsuario}
        AND respostaEscolhida = respostaCerta
        GROUP BY dataResposta
        ORDER BY dataResposta DESC
        LIMIT 3;
    `;

    return database.executar(instrucaoSql);
}

function buscarResultadosTempoReal(idUsuario) {

    var instrucaoSql = `
        SELECT 
            COUNT(*) AS acertos,
            DATE_FORMAT(dataResposta, '%H:%i:%s') AS momento
        FROM respostas
        WHERE fkUsuario = ${idUsuario}
        AND respostaEscolhida = respostaCerta
        GROUP BY momento
        ORDER BY momento ASC;
    `;

    return database.executar(instrucaoSql);
}

function buscarKpis(idUsuario){

    var instrucaoSql = `
        SELECT

        COUNT(CASE 
            WHEN respostaEscolhida = respostaCerta 
            THEN 1 
        END) AS totalAcertos,

        COUNT(CASE 
            WHEN respostaEscolhida <> respostaCerta 
            THEN 1 
        END) AS totalErros,

        COUNT(DISTINCT DATE(dataResposta)) AS quizJogados

        FROM respostas
        WHERE fkUsuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

function buscarRanking(){

    var instrucaoSql = `
        SELECT 
            usuario.nome,
            COUNT(*) AS acertos
        FROM respostas
        JOIN usuario
            ON usuario.id = respostas.fkUsuario
        WHERE respostaEscolhida = respostaCerta
        GROUP BY fkUsuario
        ORDER BY acertos DESC
        LIMIT 3;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResposta,
    buscarUltimosResultados,
    buscarResultadosTempoReal,
    buscarKpis,
    buscarRanking
};
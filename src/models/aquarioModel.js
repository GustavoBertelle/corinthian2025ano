var database = require("../database/config");

// SALVAR RESULTADO DO QUIZ

function salvarResultado(idUsuario, acertos, erros) {

    var instrucaoSql = `

        INSERT INTO resultadoQuiz
        (fkUsuario, acertos, erros)

        VALUES
        (${idUsuario}, ${acertos}, ${erros});

    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);

}

// BUSCAR RESULTADOS DO USUÁRIO

function buscarResultados(idUsuario) {

    var instrucaoSql = `

        SELECT
            idResultado,
            acertos,
            erros,
            DATE_FORMAT(dataQuiz, '%d/%m %H:%i') AS momento_grafico
        FROM resultadoQuiz
        WHERE fkUsuario = ${idUsuario}
        ORDER BY idResultado DESC
        LIMIT 10;

    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);

}

module.exports = {

    salvarResultado,
    buscarResultados

}
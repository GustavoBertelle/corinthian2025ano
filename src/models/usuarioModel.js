var database = require("../database/config");

function autenticar(email, senha) {

    const instrucao = `
        SELECT * FROM usuario
        WHERE email = '${email}'
        AND senha = '${senha}';
    `;

    return database.executar(instrucao);
}

function cadastrar(nome, email, senha) {

    console.log("ACESSEI O USUARIO MODEL");

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha)
        VALUES ('${nome}', '${email}', '${senha}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};
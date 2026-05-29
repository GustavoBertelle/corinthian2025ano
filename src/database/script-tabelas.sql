CREATE DATABASE PjIndividual;
USE PjIndividual;
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);
ALTER TABLE usuario MODIFY senha VARCHAR(50);
CREATE TABLE pergunta (
    idPergunta INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100)
);
alter table pergunta modify column titulo varchar(999);

CREATE TABLE respostas (
    fkUsuario INT,
    fkPergunta INT,
    respostaEscolhida CHAR(1) NOT NULL,
    respostaCerta char(1),

    PRIMARY KEY (fkUsuario, fkPergunta),
    FOREIGN KEY (fkUsuario)
	REFERENCES usuario(id),
    FOREIGN KEY (fkPergunta)
	REFERENCES pergunta (idPergunta)
);
SELECT * FROM usuario;
SELECT * FROM pergunta;
SELECT MAX(idPergunta) FROM pergunta;
SELECT * FROM respostas;
INSERT INTO pergunta (titulo) VALUES
('Contra quem foi o jogo da final do paulista de 2025?'),
('Quem fez o gol que garantiu o titulo paulista de 2025'),
('Quantos títulos paulista o Corinthians tem?'),
('Qual técnico do Corinthians foi campeão do paulista de 2025?'),
('Contra quem foi a estreia do paulista de 2025?'),
('Aos 23 minutos do segundo tempo do último jogo da final, Félix Torres cometeu um pênalti. Qual jogador do Palmeiras cobrou?'),
('Qual foi o placar do último jogo da final do Paulista?'),
('Quem fez o gol que garantiu o titulo da Copa do Brasil de 2025'),
('Contra quem foi o jogo mais díficil da Copa do Brasil?'),
('No ano de 2025 qual era a probabilidade do Corinthians se classificar para a Copa do Brasil?'),
('Qual técnico do Corinthians foi campeão da Copa do Brasil de 2025?');
alter table respostas
add column dataResposta DATETIME DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE respostas
MODIFY respostaEscolhida VARCHAR(20);
ALTER TABLE respostas
MODIFY respostaCerta VARCHAR(20);

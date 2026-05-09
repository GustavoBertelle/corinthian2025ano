CREATE DATABASE Projeto_individual;

USE Projeto_individual;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) not null,
	email VARCHAR(50)not null Unique,
	senha VARCHAR(50) not null,
	data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

insert into usuario (nome,email,senha) values
('Mario','mario@gmail.com','@Mario123'),
('Jorge','jorginho@gmail.com','@Jorge123'),
('Maria','maria@gmail.com','@ma123');

select * from usuario;

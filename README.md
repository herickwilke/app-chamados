# app-chamados

App desenvolvido em Ionic 5 com Angular utilizando banco de dados Firebase do Google (angularfire) para registro de chamados em tempo real. 

Esta versão é um protótipo desenvolvido para testes, portanto não está em sua versão final.

A aplicação:
- Utiliza recursos nativos do smartphone
- Possui sistema de cadastro/login de usuários com segurança de autenticação do Firebase
- Permite criação de chamados técnicos com nome, descrição e upload de imagem por URL ou fotografia
- Possui lista de chamados que atualizam automaticamente em tempo real
- Utiliza banco de dados não relacional na nuvem
- Cria chamados únicos, de forma segura, onde um usuário não pode alterar ou deletar um chamado que não o pertence

Para rodar o projeto, é necessário possuir as dependências do Ionic e rodar os seguintes comandos em terminal:

npm install

ionic serve

Considerações **

- Para disponíbilizar imagem na aplicação é necessário que seja posto URL da imagem, registrada na internet em outro source. O Google atualizou a forma de envio. É necessária uma atualização deste snippet do código caso projeto seja continuado.

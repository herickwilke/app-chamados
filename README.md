# app-chamados

App desenvolvido em Ionic 5 com Angular utilizando banco de dados Firebase do Google (angularfire) para registro de chamados 
em tempo real. 

Esta versão é um protótipo desenvolvido para testes, portanto não está em sua versão final.

A aplicação:
- Utiliza recursos nativos do smartphone
- Possui sistema de cadastro/login de usuários com segurança de autenticação do Firebase

Para rodar o projeto, é necessário possuir as dependências do Ionic e rodar os seguintes comandos em terminal:

npm install

ionic serve

Considerações (a corrigir) **

- A fotografia é registrada, mas não é enviada para o firebase (fica salva localmente). Para disponíbilizar na aplicação
é necessário que seja posto URL da imagem, registrada na internet em outro source. O Google mudou a maneira com que 
são realizados os uploads para o firebase, portanto para utilizar o feature é necessária uma atualização deste snippet do código.

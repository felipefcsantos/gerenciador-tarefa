# Gerenciador de Tarefas

Esta é uma API para gerenciar uma lista de tarefas. Permite aos usuários se registrar, fazer login, adicionar, editar, excluir e marcar tarefas como concluídas.

## Instalação

Após clonar o projeto em sua máquina, entre no mesmo e instale as dependências usando o comando `npm install`.

## Uso

1. Inicie o servidor usando o comando `npm start`
2. Acesse a API em [http://localhost:3300/](http://localhost:3300/)

## Rotas

### Documentação Swagger
  /api-docs

### Registro de Usuário
   /users/register
   - POST

### Login de Usuário
  /users/login
  - POST
 - Esta rota retornará o token que será necessário para acesso nas rotas de gerenciamento de tarefas.
 - Este token tem prazo de 1 hora de duração.
   
### Listar tarefas
  /tasks
  - GET

### Adicionar nova tarefa
  /tasks
  - POST

### Editar tarefa
  /tasks/:id
  - PUT
    
### Excluir tarefa
  /tasks/:id
  - DELETE

### Marcar tarefa como concluída
  /tasks/:id/complete
  - PATCH


  


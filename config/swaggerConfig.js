const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Tarefas',
      version: '1.0.0',
      description: 'API para gerenciar uma lista de tarefas',
    },
    servers: [
      {
        url: 'http://localhost:3300'
      },
    ],
  },
  apis: ['./routes/*.js']
};

const swaggerConfig = swaggerJsdoc(options);

module.exports = swaggerConfig;

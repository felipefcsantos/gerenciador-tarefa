const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./config/swaggerConfig');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = 3300;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

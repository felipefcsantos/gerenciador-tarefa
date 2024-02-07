const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authentication = require('../middlewares/authentication')


router.all('', authentication.authenticateToken);
router.get('/', taskController.getTasks);
router.post('/', taskController.createTasks);
router.put('/:id', taskController.editTasks);
router.delete('/:id', taskController.deleteTasks);
router.patch('/:id/complete', taskController.completeTask);

//Documentação

/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Retorna todas as tarefas
 *     tags: [Tarefas]
 *     responses:
 *       200:
 *         description: Retorna a lista de todas as tarefas cadastradas.
 *       401:
 *         description: Token não fornecido ou inválido.
 */

/**
 * @openapi
 * /tasks:
 *   post:
 *     summary: Adiciona uma nova tarefa
 *     tags: [Tarefas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tarefa:
 *                 type: string
 *             required:
 *               - tarefa
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso! - Retorna a tarefa que foi criada.
 *       400:
 *         description: Não há dados suficientes para cadastrar uma nova tarefa.
 *       401:
 *         description: Token não fornecido ou inválido.
 */

/**
 * @openapi
 * /tasks/{id}:
 *   put:
 *     summary: Edita uma tarefa
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa a ser editada
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tarefa:
 *                 type: string
 *             required:
 *               - tarefa
 *     responses:
 *       200:
 *         description: Tarefa editada com sucesso!
 *       401:
 *         description: Token não fornecido ou inválido.
 *       404:
 *         description: Tarefa não encontrada.
 */

/**
 * @openapi
 * /tasks/{id}:
 *   delete:
 *     summary: Exclui uma tarefa
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa a ser excluída
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tarefa excluída com sucesso!
 *       401:
 *         description: Token não fornecido ou inválido.
 *       404:
 *         description: Tarefa não encontrada.
 */

/**
 * @openapi
 * /tasks/{id}/complete:
 *   patch:
 *     summary: Marca uma tarefa como concluída
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa a ser marcada como concluída
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tarefa marcada como concluída!
 *       401:
 *         description: Token não fornecido ou inválido.
 *       404:
 *         description: Tarefa não encontrada.
 */

module.exports = router;

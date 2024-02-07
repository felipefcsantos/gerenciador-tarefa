const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/register', userController.register)
router.post('/login', userController.login)

//Documentação

/**
 * @openapi
 * /users/register:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Nome de usuário já em uso
 */

/**
 * @openapi
 * /users/login:
 *   post:
 *     summary: Autentica o usuário e retorna o token JWT
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Login bem-sucedido, retorna o token JWT
 *       401:
 *         description: Usuário ou senha incorretos
 */
module.exports = router;
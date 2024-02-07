const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = '123456789';

let users = [];

function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
}

function register(req, res) {
  const { username, password } = req.body;

  if (users.find(user => user.username === username)) {
    return res.status(400).json({ error: 'Nome de usuário já em uso.' });
  }

  const hashedPassword = bcrypt.hashSync(password);

  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
}

function login(req, res) {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Usuário ou senha incorretos!' });
  }

  const token = generateToken(user);
  res.status(200).json({ token });
}

module.exports = { register, login };

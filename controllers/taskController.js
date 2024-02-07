let tasks = [];
let lastId = 0;

function newId() {
  lastId++;
  return lastId;
}

function getTasks(req, res) {
  res.status(200).json(tasks);
}

function createTasks(req, res) {
  const { tarefa } = req.body;

  if (!tarefa) {
    res.status(400).json({ error: 'Não há dados suficientes para cadastrar uma nova tarefa.' });
    return;
  }

  tasks.push({
    id: newId(),
    tarefa
  });

  res.status(201).json({ message: 'Tarefa criada com sucesso!', task: tasks[tasks.length - 1] });
}

function editTasks(req, res) {
  const { id } = req.params;
  const { tarefa } = req.body;

  const index = tasks.findIndex(task => task.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  tasks[index].tarefa = tarefa;

  res.status(200).json({ message: 'Tarefa editada com sucesso!' });
}

function deleteTasks(req, res) {
  const { id } = req.params;

  const index = tasks.findIndex(task => task.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  tasks.splice(index, 1);

  res.status(200).json({ message: 'Tarefa excluída com sucesso!' });
}

function completeTask(req, res) {
  const { id } = req.params;

  const index = tasks.findIndex(task => task.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  tasks[index].concluida = true;

  res.status(200).json({ message: 'Tarefa marcada como concluída!' });
}

module.exports = {
  getTasks,
  createTasks,
  editTasks,
  deleteTasks,
  completeTask
}
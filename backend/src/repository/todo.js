async function getTodos(db) {
  return db.data;
}

async function addTodo(db, task) {
  db.data.todos.push({ ...task, id: Math.floor(Math.random() * 1000000) });
  await db.write();
}

async function deleteToDo(db, id) {
  const deleteIndex = db.data.todos.findIndex((todo) => todo.id === id);
  if (deleteIndex != -1) {
    db.data.todos = [
      ...db.data.todos.slice(0, deleteIndex),
      ...db.data.todos.slice(deleteIndex + 1),
    ];
    await db.write();
  }
}

export default { getTodos, addTodo, deleteToDo };

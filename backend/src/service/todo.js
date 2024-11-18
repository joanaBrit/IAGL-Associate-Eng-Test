export const todoServiceRaw = (repository) => {
  return {
    getTodos: async (db) => {
      return await repository.getTodos(db);
    },
    addTodo: async (db, task) => {
      return await repository.addTodo(db, task);
    },
    deleteToDo: async (db, id) => {
      return await repository.deleteToDo(db, id);
    },
  };
};

import repository from "../../src/repository/todo";
import { initialiseDb } from "../../src/server";

const INITIAL_TODO = {
  task: "This is a todo example",
  id: 0,
};

const ADDED_TODO_TASK = "This is another todo";

describe("TODO repository", () => {
  let db;
  beforeEach(async () => {
    db = await initialiseDb();
  });

  it("should return the todo list", async () => {
    const expected = {
      todos: [INITIAL_TODO],
    };
    const actual = await repository.getTodos(db);
    expect(actual).toEqual(expected);
  });

  it("should add todos to the list", async () => {
    await repository.addTodo(db, { task: ADDED_TODO_TASK });
    const allTodos = await repository.getTodos(db);

    expect(
      allTodos.todos.some((todo) => todo.task === ADDED_TODO_TASK)
    ).toBeTruthy();
  });

  it("should delete todos from the list", async () => {
    await repository.deleteToDo(db, 0);
    const allTodos = await repository.getTodos(db);

    expect(allTodos.todos).toHaveLength(0);
  });
});

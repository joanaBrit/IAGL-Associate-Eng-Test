import { todoServiceRaw } from "../../src/service/todo";
import { initialiseDb } from "../../src/server";
import repository from "../../src/repository/todo";

const INITIAL_TODO = {
  task: "This is a todo example",
  id: 0,
};

describe("TODO Service", () => {
  let db;
  const todoService = todoServiceRaw(repository);

  beforeEach(async () => {
    db = await initialiseDb();
  });

  it("should be able to get todos from repository", async () => {
    const expected = {
      todos: [INITIAL_TODO],
    };

    const actual = await todoService.getTodos(db);
    expect(actual).toEqual(expected);
  });

  it("should be able to add todo", async () => {
    const todoToAdd = "Added todo";

    await todoService.addTodo(db, { task: todoToAdd });
    const actual = await todoService.getTodos(db, todoToAdd);
    
    expect(actual.todos.some((todo) => todo.task === todoToAdd)).toBeTruthy();
  });

  it("should be able to get todos from repository", async () => {
    await todoService.deleteToDo(db, 0);

    const actual = await todoService.getTodos(db);
    expect(actual.todos).toHaveLength(0);
  });
});

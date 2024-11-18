import express from "express";
import cors from "cors";

import repository from "./repository/todo.js";
import { todoServiceRaw } from "./service/todo.js";

const todoService = todoServiceRaw(repository);

export async function initialiseDb() {
  const { JSONFilePreset } = await import("lowdb/node");

  const db = await JSONFilePreset("todos.json", {
    todos: [
      {
        task: "This is a todo example",
        id: 0,
      },
    ],
  });

  await db.write();
  return db;
}

export const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  initialiseDb().then((db) => {
    console.log("Database ready");

    server.get("/api/todo", async (req, res) => {
      res.json(await todoService.getTodos(db));
    });
    server.post("/api/todo", async (req, res) => {
      const { data } = req.body;
      await todoService.addTodo(db, data);
      res.send();
    });
    server.delete("/api/todo", async (req, res) => {
      const { id } = req.body;
      await todoService.deleteToDo(db, id);
      res.send();
    });
  });

  return server;
};

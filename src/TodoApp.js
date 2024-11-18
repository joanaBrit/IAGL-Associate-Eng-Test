import React from "react";
import TodoList from "./component/TodoList";
import "./styles.css";
import AddNewTodo from "./component/AddNewTodo";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddNewTodo />
      <TodoList />
    </div>
  );
}

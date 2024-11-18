import { Checkbox, Paper } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";

const Todo = ({ todo, id }) => {
  return (
    <li className="todo-item">
      <Paper>
        <Checkbox onChange={() => deleteTodo(id)} />
        <span>{todo}</span>
      </Paper>
    </li>
  );
};

// export default Todo;
export default connect(null)(Todo);

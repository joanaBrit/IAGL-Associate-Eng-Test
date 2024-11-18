import axios from "axios";
import { FETCH_TODOS } from "./types";

export function fetchTodos() {
  return function (dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

export function deleteTodo(id) {
  axios
    .delete("http://localhost:9091/api/todo", { data: { id } })
    .then(() => window.location.reload());
}

export function submitNewTodo(task) {
  axios
    .post("http://localhost:9091/api/todo", { data: { task } })
    .then(() => window.location.reload());
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data,
  };
}

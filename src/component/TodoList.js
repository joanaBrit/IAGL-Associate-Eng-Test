import React, { Component } from "react";
import Todo from "./Todo";
import { fetchTodos } from "../actions";
import { connect } from "react-redux";

class TodoList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props.data;
    return todos && todos.length ? (
      <ul className="todo-list">
        {todos.map((todo) => {
          return <Todo key={`todo-${todo.id}`} todo={todo.task} id={todo.id}/>;
        })}
      </ul>
    ) : (
      <div>No todos, yay!</div>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData,
});
export default connect(mapStateToProps, {
  fetchTodos,
})(TodoList);

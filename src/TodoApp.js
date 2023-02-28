import React from "react";
import TodoList from "./component/TodoList";
import TaskAdder from "./component/TaskAdder";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List with Adder</h1>
      <TaskAdder />
      <TodoList />
    </div>
  );
}
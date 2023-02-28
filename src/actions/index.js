import axios from "axios";
import { FETCH_TODOS } from "./types";

export function fetchTodos() {
  return function(dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

export function fetchAddTodo(task) {
  return function(dispatch) {
    return axios.post("http://localhost:9091/api/todo",{"task":task}).then(({ data }) => {
      dispatch(setTodos(data)); // dispatch an update to the task list
    });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}
// api/todos.js
import axios from "axios";

const SERVER_URI = "http://localhost:5000";

const getTodos = async () => {
  const response = await axios.get(`${SERVER_URI}/todos`);
  return response.data;
};

const addTodo = async (payload) => {
  console.log("payload", payload);

  await axios.post(`${SERVER_URI}/todos`, payload);
};

const removeTodo = async (payload) => {
  console.log("payload", payload);

  await axios.delete(`${SERVER_URI}/todos/${payload}`);
};

const switchTodo = async (payload) => {
  // console.log("id", id);
  console.log("payload", payload);

  await axios.patch(`${SERVER_URI}/todos/${payload.id}`, {
    isDone: !payload.isDone,
  });
};

export { getTodos, addTodo, removeTodo, switchTodo };

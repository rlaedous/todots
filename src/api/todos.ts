// api/todos.js
import axios from "axios";

export type Todo = {
  id: string; 
  title: string;
  body: string;
  isDone: boolean;
};
const SERVER_URI = "http://localhost:5000";

const getTodos = async () :Promise<Todo[]>=> {
  const response = await axios.get(`${SERVER_URI}/todos`);
  return response.data;
};

const addTodo = async (payload: Omit<Todo, "id">):Promise<void> => {
  await axios.post(`${SERVER_URI}/todos`, payload);
};

const removeTodo = async (id:string):Promise<void> => {
  await axios.delete(`${SERVER_URI}/todos/${id}`);
};

const switchTodo = async (payload:{id:string; isDone :boolean}):Promise<void> => {
  await axios.patch(`${SERVER_URI}/todos/${payload.id}`, {
    isDone: !payload.isDone,
  });
};

export { getTodos, addTodo, removeTodo, switchTodo };

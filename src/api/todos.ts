// api/todos.js
import axios from "axios";

export type Todo = {
  id: string; 
  title: string;
  body: string;
  isDone: boolean;
};


const getTodos = async () :Promise<Todo[]>=> {
  const response = await axios.get(`${process.env.REACT_APP_API_KEY}/todos`);
  return response.data;
};

const addTodo = async (payload: Omit<Todo, "id">):Promise<void> => {
  await axios.post(`${process.env.REACT_APP_API_KEY}/todos`, payload);
};

const removeTodo = async (id:string):Promise<void> => {
  await axios.delete(`${process.env.REACT_APP_API_KEY}/todos/${id}`);
};

const switchTodo = async (payload:{id:string; isDone :boolean}):Promise<void> => {
  await axios.patch(`${process.env.REACT_APP_API_KEY}/todos/${payload.id}`, {
    isDone: !payload.isDone,
  });
};

export { getTodos, addTodo, removeTodo, switchTodo };

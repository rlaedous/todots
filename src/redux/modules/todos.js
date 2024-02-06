import shortid from "shortid";

const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const SWITCH_TODO = "todos/SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const switchTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
const initialState = [
  {
    id: shortid.generate(),
    title: "",
    body: "",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return [...state.filter((item) => item.id !== action.payload)];

    case "SWITCH_TODO":
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;

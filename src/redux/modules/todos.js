// import shortid from "shortid";

// const ADD_TODO = "todos/ADD_TODO";
// const DELETE_TODO = "todos/DELETE_TODO";
// const SWITCH_TODO = "todos/SWITCH_TODO";

// export const addTodo = (payload) => {
//   return { type: ADD_TODO, payload };
// };
// export const deleteTodo = (payload) => {
//   return { type: DELETE_TODO, payload };
// };
// export const switchTodo = (payload) => {
//   return { type: SWITCH_TODO, payload };
// };
// const initialState = [
//   {
//     id: shortid.generate(),
//     title: "타이틀1",
//     body: "연습하자",
//     isDone: false,
//   },
//   {
//     id: shortid.generate(),
//     title: "타이틀2",
//     body: "제발..",
//     isDone: true,
//   },
// ];

// // 리듀서
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];
//     case DELETE_TODO:
//       return [...state.filter((item) => item.id !== action.payload)];
//     case SWITCH_TODO:
//       return state.map((item) => {
//         if (item.id === action.payload) {
//           return { ...item, isDone: !item.isDone };
//         } else {
//           return item;
//         }
//       });

//     default:
//       return state;
//   }
// };

// export default todos;

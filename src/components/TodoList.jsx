import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

function TodoList({ isActive }) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos);

  //   const test = todo
  //     .filter((item) => item.isDone === !isActive)
  //     .map((item) => item.id);

  //   const deleteHandler = () => {
  //     dispatch(deleteTodo(test));
  //   };

  // const editHandler = () => {
  //   dispatch(switchTodo());
  // };
  return (
    <>
      <div>{isActive ? "해야할일" : "끝낸일"}</div>
      {todo
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                margin: "12px",
                padding: "12px",
              }}
            >
              <div>제목:{item.title}</div>
              <div>내용:{item.body}</div>
              <button
                // onClick={() => deleteHandler()}
                onClick={() => {
                  dispatch(deleteTodo(item.id));
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  dispatch(switchTodo(item.id));
                }}
              >
                {isActive ? "완료" : "취소"}
              </button>
              <Link to={`/${item.id}`}>상세보기</Link>
            </div>
          );
        })}
    </>
  );
}
export default TodoList;

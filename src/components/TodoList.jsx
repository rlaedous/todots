import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, getTodos, removeTodo, switchTodo } from "../api/todos";

function TodoList({ isActive }) {
  // const dispatch = useDispatch();
  // const todo = useSelector((state) => state.todos);
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const queryClient = useQueryClient();
  const { mutate: mutateToDelete } = useMutation({
    mutationFn: removeTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["todos"]);
    },
  });

  const { mutate: mutateToSwitch } = useMutation({
    mutationFn: switchTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["todos"]);
    },
  });
  console.log("data", data);
  // console.log("todo", todo);
  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }
  return (
    <>
      <div>{isActive ? "해야할일" : "끝낸일"}</div>
      {data
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
                onClick={() => {
                  mutateToDelete(item.id);
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  mutateToSwitch(item);
                }}
              >
                {isActive ? "완료" : "취소"}
              </button>
              {/* <Link to={`/${item.id}`}>상세보기</Link> */}
            </div>
          );
        })}
    </>
  );
}
export default TodoList;

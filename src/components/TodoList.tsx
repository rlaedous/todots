import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Todo, getTodos, removeTodo, switchTodo } from "../api/todos";

interface TodoListProps {
  isActive: boolean;
}
function TodoList({ isActive }:TodoListProps) {
  const { data, isLoading } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const queryClient = useQueryClient();
  const { mutate: mutateToDelete } = useMutation({
    mutationFn: removeTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey:["todos"]});
    },
  });

  const { mutate: mutateToSwitch } = useMutation({
    mutationFn: switchTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey:["todos"]});
    },
  });

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }
  return (
    <>
      <div>{isActive ? "해야할일" : "끝낸일"}</div>
      {data
        ?.filter((item) => item.isDone === !isActive)
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

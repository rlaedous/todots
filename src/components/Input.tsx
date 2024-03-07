import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../api/todos";

function Input() {
  const queryClient = useQueryClient();
  const { mutate: mutateToAdd } = useMutation({
    mutationFn: addTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey:["todos"]});
    },
  });

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      
      title,
      body,
      isDone: false,
    };
    mutateToAdd(newTodo);
    setTitle("");
    setBody("");
  };
  const titleChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };
  return (
    <>
      {" "}
      <form onSubmit={onSubmitHandler}>
        제목
        <input value={title} onChange={titleChangeHandler} />
        내용
        <input value={body} onChange={contentChangeHandler} />
        <button>추가하기</button>
      </form>
    </>
  );
}

export default Input;

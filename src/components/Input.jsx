import React, { useState } from "react";
import shortid from "shortid";
// import { addTodo } from "../redux/modules/todos";
// import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../api/todos";

function Input() {
  const queryClient = useQueryClient();
  const { mutate: mutateToAdd } = useMutation({
    mutationFn: addTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["todos"]);
    },
  });
  // const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    };
    mutateToAdd(newTodo);
    // dispatch(addTodo(newTodo));
    setTitle("");
    setBody("");
  };
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e) => {
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

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
const Home = () => {
  const dispatch = useDispatch();
  const reduxTodos = useSelector((state) => state.todos);

  const idTodo = reduxTodos.map((item) => item.id);

  const navigate = useNavigate();

  const [isDone, setIsDone] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const goDetail = () => {
    navigate(`/${idTodo}`);
  };

  return (
    <>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </>
  );
};

export default Home;

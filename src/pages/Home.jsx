import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const reduxTodos = useSelector((state) => state.todos);
  console.log(reduxTodos);
  const idTodo = reduxTodos.map((item) => item.id);
  console.log(idTodo);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const goDetail = () => {
    navigate(`/detail/${idTodo}`);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    };
    dispatch(addTodo(newTodo));

    setTitle("");
    setBody("");
  };
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e) => {
    setBody(e.target.value);
  };

  const toggleHandler = () => {};
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        제목
        <input onChange={titleChangeHandler} />
        내용
        <input onChange={contentChangeHandler} />
        <button>추가하기</button>
      </form>

      {isActive === false ? (
        <div>
          todolist{" "}
          {reduxTodos.map((item) => {
            return (
              <div
                onClick={goDetail}
                key={item.id}
                style={{
                  border: "1px solid black",
                  margin: "12px",
                  padding: "12px",
                }}
              >
                <div>제목:{item.title}</div>
                <div>내용:{item.body}</div>
                {isDone === false ? (
                  <button onClick={toggleHandler}>완료</button>
                ) : (
                  <button onClick={toggleHandler}>취소</button>
                )}
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <div>
          donelist
          {reduxTodos.map((item) => {
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
                {isDone === false ? (
                  <button onClick={toggleHandler}>완료</button>
                ) : (
                  <button onClick={toggleHandler}>취소</button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;

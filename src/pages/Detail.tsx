// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTodo } from "../redux/modules/todos";

// const Detail = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const todo = useSelector((state) => state.todos);
//   const params = useParams();

//   return (
//     <>
//       <button onClick={() => navigate("/")}>홈으로</button>
//       {todo
//         .filter((item) => item.id === params.id)
//         .map((item) => {
//           return (
//             <div
//               key={item.id}
//               style={{
//                 border: "1px solid red",
//                 padding: "12px",
//                 margin: "12px",
//               }}
//             >
//               <div>{item.title}</div>
//               <div>{item.body}</div>
//               <div>{item.isDone.toString()}</div>
//               <button
//                 onClick={() => {
//                   dispatch(deleteTodo(item.id));
//                   navigate("/");
//                 }}
//               >
//                 삭제
//               </button>
//             </div>
//           );
//         })}
//     </>
//   );
// };

// export default Detail;

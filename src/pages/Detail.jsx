import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Detail = () => {
  const params = useParams();
  console.log(params);
  const filteredTodo = useSelector;
  console.log(filteredTodo);
  return <div>dd</div>;
};

export default Detail;

import { useSelector } from "react-redux";
import { List, Header } from "../components";

const TodoList = () => {
  const datas = useSelector((state) => state.data.datas);
  return (
    <div>
      <Header />
      <List todos={datas} />
    </div>
  );
};

export default TodoList;

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteData, toggleData } from "../../slices/dataSlice";

const Card = ({ todo }) => {
  const handleClear = () => {};
  const dispatch = useDispatch();

  return (
    <DivCard>
      <Link to={`/${todo.id}`} onClick={() => handleClear()}>
        상세보기
      </Link>
      <div>
        <h2>{todo.title}</h2>
        <div>{todo.content}</div>
        <DivButton>
          <button
            type="button"
            className="remove"
            onClick={() => dispatch(deleteData(todo.id))}
          >
            삭제하기
          </button>

          <button
            type="button"
            className="done"
            onClick={() => dispatch(toggleData(todo.id))}
          >
            {todo.isDone ? "취소" : "완료"}
          </button>
        </DivButton>
      </div>
    </DivCard>
  );
};

const DivCard = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
  margin-right: 8px;
`;

const DivButton = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
  width: 200px;
  justify-content: space-between;
  button {
    width: 200px;
    padding: 12px;
    border-radius: 8px;
  }

  .remove {
    background-color: #fff;
    border: 2px solid red;
  }

  .done {
    background-color: #fff;
    border: 2px solid green;
  }
`;

export default Card;

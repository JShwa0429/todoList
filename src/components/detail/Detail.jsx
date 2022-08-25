import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ id }) => {
  const navigate = useNavigate();
  console.log(id);
  const { title, content } = useSelector((state) => state.data.datas).filter(
    (data) => data.id === +id
  )[0];

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <DivDetail>
      <DivTop>
        <p>ID:{`${id}`}</p>
        <button onClick={() => handleBack()}>이전으로</button>
      </DivTop>
      <div>
        <h2>{title}</h2>
        {content}
      </div>
    </DivDetail>
  );
};

const DivDetail = styled.div`
  border: 1px solid black;
  width: 400px;
  margin: 0px auto;
  height: 300px;
  padding: 1em 2em;
`;

const DivTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  button {
    background-color: white;
    border: 1px solid grey;
    border-radius: 4px;
    width: 100px;
  }
`;

export default Detail;

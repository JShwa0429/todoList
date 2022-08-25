import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { clearInput, saveInput } from "../../slices/inputSlice";
import { saveData } from "../../slices/dataSlice";

const Form = () => {
  const { title, content } = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title || !content) {
      return alert("제목과 내용을 입력해주세요");
    }
    dispatch(saveData(title, content));
    dispatch(clearInput());
  };
  return (
    <InputForm>
      <InputDiv>
        <label>제목</label>
        <Input
          type="text"
          value={title}
          onChange={(e) => dispatch(saveInput(e.target.value, content))}
        />
        <label>내용</label>
        <Input
          type="text"
          value={content}
          onChange={(e) => dispatch(saveInput(title, e.target.value))}
        />
      </InputDiv>
      <Button type="button" onClick={handleAdd}>
        추가하기
      </Button>
    </InputForm>
  );
};

export default Form;

const InputForm = styled.form`
  background-color: #ddd;
  border-radius: 16px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  label {
    font-size: 16px;
    font-weight: bold;
  }
`;

const InputDiv = styled.div`
  width: 650px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 12px;
  border: none;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

const Button = styled.button`
  width: 140px;
  border-radius: 10px;
  border: none;
  height: 40px;
  color: white;
  background-color: teal;
  font-weight: bold;
`;

import styled from "styled-components";

const Title = () => {
  return (
    <DivTitle>
      <div>My Todo List</div>
      <div>React</div>
    </DivTitle>
  );
};

const DivTitle = styled.div`
  border: 1px solid #ddd;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`;

export default Title;

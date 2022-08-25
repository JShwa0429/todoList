import styled from "styled-components";
import { Card } from "../card";
const List = ({ todos }) => {
  return (
    <Container>
      <h2>Working.. 🔥</h2>
      <Wrapper>
        {todos &&
          todos
            .filter((v) => v.isDone === false)
            .map((v) => <Card key={v.id} todo={v} />)}
      </Wrapper>
      <h2>Done..! 🎉</h2>
      <Wrapper>
        {todos &&
          todos
            .filter((v) => v.isDone === true)
            .map((v) => <Card key={v.id} todo={v} />)}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default List;

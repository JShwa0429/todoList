import styled from "styled-components";
import { TodoList } from "./pages";

function App() {
  return (
    <Container>
      <Layout>
        <TodoList />
      </Layout>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Layout = styled.div`
  width: 1200px;
`;

export default App;

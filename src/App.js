import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { TodoList, DetailPage } from "./pages";

function App() {
  return (
    <Container>
      <Layout>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </Layout>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
`;

export default App;

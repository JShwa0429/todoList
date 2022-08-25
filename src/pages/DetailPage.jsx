import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Detail } from "../components";
const DetailPage = () => {
  const { pathname } = useLocation();
  return (
    <Div>
      <Detail id={pathname.slice(1)} />
    </Div>
  );
};

const Div = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default DetailPage;

import styled from "styled-components";
import { Title } from "../title";
import { Form } from "../form";
const Header = () => {
  return (
    <DivHeader>
      <Title />
      <Form />
    </DivHeader>
  );
};

const DivHeader = styled.div`
  width: 100%;
`;

export default Header;

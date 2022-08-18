import styled from "styled-components";
import { Title } from "../title";
import { Form } from "../form";
const Header = ({ onAdd }) => {
  return (
    <DivHeader>
      <Title />
      <Form onAdd={onAdd} />
    </DivHeader>
  );
};

const DivHeader = styled.div`
  width: 100%;
`;

export default Header;

import styled from "styled-components";
import { Link} from "react-router-dom";

//This is an element to desplay the instructions
export const TextDiv = styled.h1`
  color:white;
  position:relative;
  left:50%;
  transform: translate(-50%);
  font-size: 1.5rem;
`;

//This is an element to navigate through the links
export const NavLinks = styled(Link)`
  background-color: grey;
  position:relative;
  left:50%;
  transform: translate(-50%);
  display: flex;
  text-decoration: none;
  width: 15%;
  cursor: pointer;
  border: 0.2rem solid #fff;
`;


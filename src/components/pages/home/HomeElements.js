import styled from "styled-components";
import logo from "../../../sources/GameLogo.png";
import { Link} from "react-router-dom";


//This is for the display text in the button
export const TextH3 = styled.h3`
  color:white;
  position:relative;
  left:50%;
  transform: translate(-50%);
  font-size: 1.5rem;
  cursor: pointer;
`;

//This is the main logo
export const LogoImg = styled.img`
  position:relative;
  left:50%;
  transform: translate(-50%);
  width: 40%;
  height: 40%;
  content: url(${logo});
`;

//Navigate to another link
export const NavLinks = styled(Link)`
  background-color: grey;
  position:relative;
  left:50%;
  transform: translate(-50%);
  display: flex;
  text-decoration: none;
  cursor: pointer;
  border: 0.2rem solid #fff;
`;
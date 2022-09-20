import styled from "styled-components";
import homebg from "../../../sources/GameLogo.png";
import { Link} from "react-router-dom";

export const Hih3 = styled.div`
  color:white;
  position:relative;
  left:50%;
  transform: translate(-50%);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const BgImg = styled.img`
  position:relative;
  left:50%;
  transform: translate(-50%);
  width: 700px;
  height: 700px;
  content: url(${homebg});
`;

export const NavLinks = styled(Link)`
  background-color: grey;
  position:relative;
  left:50%;
  transform: translate(-50%);
  display: flex;
  text-decoration: none;
  width:10%;
  cursor: pointer;
  border: 0.2rem solid #fff;
`;

export const ImgDiv = styled.div`
  ;
`;
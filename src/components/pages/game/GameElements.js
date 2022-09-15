import styled from "styled-components";
import { Link} from "react-router-dom";

export const Q = styled.h3`
  color:white;
  position:relative;
  left:50%;
  transform: translate(-50%);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Ans = styled.button`
  color:black;
  position:relative;
  left:50%;
  transform: translate(-50%);
  display: flex;
  text-decoration: none;
  cursor: pointer;
  border: 0.2rem solid #fff;
`;

export const GiveHint = styled.button`
  position:relative;
  left:25%;
  transform: translate(-50%);
  display: flex;
  text-decoration: none;
  cursor: pointer;
  border: 0.2rem solid #fff;
`;

export const Confirm = styled.button`
  position:relative;
  left:75%;
  transform: translate(-50%);
  display: flex;
  text-decoration: none;
  cursor: pointer;
  border: 0.2rem solid #fff;
`;

export const Hint = styled.h3`
  color:white;
  position:relative;
  left:50%;
  transform: translate(-50%);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const DisAns = styled.h3`
  color:white;
  position:absolute;
  left:50%;
  transform: translate(-50%);
  font-size: 1.5rem;
  cursor: pointer;
`;

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

export const Hih3 = styled.h3`
  color:white;
  position:absolute;
  left:50%;
  transform: translate(-50%);
  font-size: 1.5rem;
`;

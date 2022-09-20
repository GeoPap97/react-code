import styled from "styled-components";
import { Link} from "react-router-dom";

//The element to display the question
export const TextQ = styled.h3`
  color:white;
  position:relative;
  left:50%;
  transform: translate(-50%);
  font-size: 1.5rem;
  cursor: pointer;
`;

//The button for the answers
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

//The colored button for the answers. Wich inherits the prevews properties
export const PressedAns = styled(Ans)`
  border-color: green;
`;

//The button to ask for a hint
export const GiveHint = styled.button`
  position:relative;
  left:25%;
  transform: translate(-50%);
  display: flex;
  text-decoration: none;
  cursor: pointer;
  border: 0.2rem solid #fff;
`;

//The Button to confirm your answer
export const Confirm = styled.button`
  position:relative;
  left:75%;
  transform: translate(-50%);
  display: flex;
  text-decoration: none;
  cursor: pointer;
  border: 0.2rem solid #fff;
`;

//The text to display the hint
export const TextHint = styled.h3`
  color:white;
  position:relative;
  left:50%;
  transform: translate(-50%);
  font-size: 1.5rem;
  cursor: pointer;
`;

//The text to display if the answer is correct
export const TextDisAns = styled.div`
  color:white;
  position:absolute;
  left:50%;
  transform: translate(-50%);
  font-size: 1.5rem;
  cursor: pointer;
`;

//This is an element to navigate through the links
export const NavLinks = styled(Link)`
background-color: grey;
position:relative;
top:60%;
left:50%;
transform: translate(-50%);
display: flex;
text-decoration: none;
width: 12%;
cursor: pointer;
border: 0.2rem solid #fff;
`;

//the text to display that the game is finished
export const goBack = styled.h3`
  top:50%;
  color:white;
  position:absolute;
  transform: translate(-50%);
  font-size: 1.5rem;
`;

//the text to display the score
export const Score = styled.h3`
  align-text:center;
  color:white;
  position:absolute;
  top:20%;
  left:50%;
  transform: translate(-50%);
  font-size: 1.5rem;
`;

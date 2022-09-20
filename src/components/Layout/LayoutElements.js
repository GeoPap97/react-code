import styled from "styled-components";
import bg from "../../sources/bg.jpg";

export const Main = styled.section`
  align-items: center;
`;
//Background Image Display
export const BgImg = styled.img` 
  z-index:-999;
  position:absolute;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  background-image: url(${bg});
`;


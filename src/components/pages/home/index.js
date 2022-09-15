import { BgImg, NavLinks, Hih3, ImgDiv } from "./HomeElements";


function Home() {
  return (
    <>
      <ImgDiv>
        <BgImg />
      </ImgDiv>
      <NavLinks to="/game">
        <Hih3>
          Press to Start
        </Hih3>
      </NavLinks>
    </>
  );
}

export default Home;

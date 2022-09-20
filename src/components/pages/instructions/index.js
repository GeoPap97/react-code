import { BgImg, NavLinks, Hih3, ImgDiv } from "./InstructionsElements";


function Instructions() {
  return (
    <>
        <Hih3>
            Peak an answer and then press Confirm
        </Hih3>
        <Hih3>
            If you are not sure you can use a hint by just clicking the hint button
        </Hih3>
        <Hih3>
            You can use as many hints as you wish
        </Hih3>
        <Hih3>
            At the end of the game you will see your score
        </Hih3>
      <NavLinks to="/game">
        <Hih3>
          Press to Start
        </Hih3>
      </NavLinks>
    </>
  );
}

export default Instructions;
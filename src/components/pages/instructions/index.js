import {NavLinks, TextDiv} from "./InstructionsElements";

//here i desplay the instructions on the screen
function Instructions() {
  return (
    <>
      <TextDiv> {/*Here is where i display the rules*/}
          1-Peak an answer and then press Confirm
      </TextDiv>
      <TextDiv> {/*Here is where i display the rules*/}
          2-If you are not sure you can use a hint by just clicking the hint button
      </TextDiv>
      <TextDiv> {/*Here is where i display the rules*/}
          3-You can use as many hints as you wish
      </TextDiv>
      <TextDiv> {/*Here is where i display the rules*/}
          4-At the end of the game you will see your score
      </TextDiv>
      <NavLinks to="/game"> {/*Button to navigate through links*/}
        <TextDiv>
          Press to Start
        </TextDiv>
      </NavLinks>
    </>
  );
}

export default Instructions;
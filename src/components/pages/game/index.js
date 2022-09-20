import axios from 'axios'
import React, {useState , useEffect} from 'react';
import { TextQ, Ans, GiveHint, TextHint, Confirm, TextDisAns, NavLinks, PressedAns, Score} from './GameElements';


function Game() {
  const [ data , setData ] = useState({}) //This is where the questions stored
  const [ hint , setHint ] = useState("") //This is where i store the current hint i want from the nest.js script
  const [ counter , setCounter ] = useState(0) //This is a counter for the questions whitch are they displayed
  const [ score , setScore ] = useState(0) //This is the score
  const [ answer , setAnswer ] = useState("") //This is the given answer from the player
  const [ isAnswerPressed , setIsAnswerPressed ] = useState(false) //This is a flag for when an answer is pressed
  const [ isAnswerCorrect , setIsAnswerCorrect ] = useState(false) //This is where i store if the answer is correct
  const [ checkAnswer , setCheckAnswer ] = useState(false) //A glag to let the code know when to ask for an answer from the NestRestAPI
  
  //Get the questions from the NestRestAPI
  useEffect(()=>{
    //console.log("test");
   getData();
  },[])

  //Get the questions from the NestRestAPI
  async function getData(){
    await axios("http://localhost:3333/game/getQuestions").then((response) => {
      //console.log(response.data);
      setData(response.data)
    }).catch((err)=>{
      console.log(err);
    })
  }

  //Get the courrent hint from the NestRestAPI
  async function getHint(hint){
    await axios({
      method: 'post', //The method
      url: 'http://localhost:3333/game/getHint',
      data: {
        hint
      }
    }).then((response) => {
        setHint(response.data.Hint)
        console.log(response.data);
    }).catch((err)=>{
      console.log(err);
    })
    
  }

  //Check if the answer is correct from the NestRestAPI
  async function getAnswer(answer,index){
    await axios({
      method: 'post', //The method
      url: 'http://localhost:3333/game/getAnswer',
      data: {
        answer,index
      }
    }).then((response) => {
      setIsAnswerCorrect(response.data)
      //console.log(response.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  
  //A function to wrap the clicked button with a color (click, unclick ,etc)
  function renderAnswer(ans,text){
    return(
      answer === ans ?
        <PressedAns onClick={()=>{
          setAnswer("");
          setIsAnswerPressed(false);
          //console.log(isAnswerPressed);
          //console.log(answer);
        }}>
          {text}
        </PressedAns>
        :
        <Ans onClick={()=>{
          setAnswer(ans);
          setIsAnswerPressed(true);
          //console.log(isAnswerPressed);
          //console.log(answer);
        }}>
          {text}
        </Ans>
    )
  }

  return (
    <>
      {data[counter] !== undefined && //check if there is an answer to display
        <TextQ>
          <span>{data[counter]?.q}</span>
        </TextQ>
      }
      {!checkAnswer && counter<data.length && //if chekAnswer flag is true then dont display that
        <>
          {renderAnswer('a', data[counter]?.a)} {/* Here is where the answer are displayed */}
          {renderAnswer('b', data[counter]?.b)}
          {renderAnswer('c', data[counter]?.c)}
          {renderAnswer('d', data[counter]?.d)}
          <GiveHint onClick={()=>{
            getHint(counter)
          }}>
            <span>Give me a Hint</span>
          </GiveHint>
          <TextHint>{hint}</TextHint>
        </>
      } 
      {isAnswerPressed && counter<data.length && //if you clicked the answer then display the confirm button
        <Confirm onClick={()=>{
          getAnswer(answer,counter) //ask the NestRestAPI if you are correct
          //console.log("Answer",answer,"index",counter,"answer recieved",getAnswer(answer,counter));
          setIsAnswerPressed(false); //initialize
          setAnswer(""); //initialize
          setHint(""); //initialize
          setCheckAnswer(true); //A flag to let me know when i have todesplay if the answer is correct
          //console.log(counter);
          //console.log(answer,data.length);
        }}>
          CONFIRM
        </Confirm>
        }
        {checkAnswer && counter<data.length ? //if true the display the answer and give me the next question when i press the button
          <div>
            <Confirm onClick={()=>{
              setCheckAnswer(false); //Intialize 
              setCounter(counter+1); //Index for the next question
              if (isAnswerCorrect){
                setScore(score + 1); //Store my score
              }
            }}>
              Next Question
            </Confirm>
            <TextDisAns>
              Your Answer is {isAnswerCorrect ? ("correct") : ("wrong")} {/* Saw me if my answer is correct */}
            </TextDisAns>                                                    
          </div>:
        (counter>=data.length) && //if no more questions then saw me the overall score
          <>
            <Score>
              Your Score is {score} / {counter}
            </Score>
            <NavLinks to="/">
              <goBack> {/*the button to go back*/}
                Press to go BACK
              </goBack>
            </NavLinks>
          </>
        }
    </>
  );
}
export default Game;

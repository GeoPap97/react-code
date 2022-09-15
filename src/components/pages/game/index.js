import axios from 'axios'
import React, {useState , useEffect} from 'react';
import { Q, Ans, GiveHint, Hint, Confirm, DisAns, NavLinks, goBack, Score} from './GameElements';


function Game() {
  const [ data , setData ] = useState({}) 
  const [ hint , setHint ] = useState("") 
  const [ counter , setCounter ] = useState(0)
  const [ score , setScore ] = useState(0)
  const [ answer , setAnswer ] = useState("")
  const [ isAnswerPressed , setIsAnswerPressed ] = useState(false)
  const [ isAnswerCorrect , setIsAnswerCorrect ] = useState(false)
  const [ checkAnsher , setCheckAnswer ] = useState(false)
  //const [ data , setData ] = useState({}) 
  useEffect(()=>{
    console.log("test");
   getData();
  },[])

  async function getData(){
    await axios("http://192.168.2.4:3333/game/getQuestions").then((response) => {
      //console.log(response.data);
      setData(response.data)
    }).catch((err)=>{
      console.log(err);
    })
  }

  async function getHint(hint){
    await axios({
      method: 'post',
      url: 'http://192.168.2.4:3333/game/getHint',
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
  async function getAnswer(answer,index){
    await axios({
      method: 'post',
      url: 'http://192.168.2.4:3333/game/getAnswer',
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

  return (
    <>
      {data[counter] !== undefined &&
        <Q>
          <span>{data[counter]?.q}</span>
        </Q>
      }
      {/* {(() => {
        if (counter<data.length){
          
        }

      })()} */}
      
      { !checkAnsher && counter<data.length &&
            <>
              <Ans onClick={()=>{
                setAnswer("a");
                setIsAnswerPressed(true);
                //console.log(isAnswerPressed);
                //console.log(answer);
              }}>
                {data[counter]?.a}
              </Ans>
              <Ans onClick={()=>{
                setAnswer("b");
                setIsAnswerPressed(true);
                //console.log(isAnswerPressed);
                //console.log(answer);
              }}>
                {data[counter]?.b}
              </Ans>
              <Ans onClick={()=>{
                setAnswer("c");
                setIsAnswerPressed(true);
                //console.log(isAnswerPressed);
                //console.log(answer);
              }}>
                {data[counter]?.c}
              </Ans>
              <Ans onClick={()=>{
                setAnswer("d");
                setIsAnswerPressed(true);
                //console.log(isAnswerPressed);
                //console.log(answer);
              }}>
                {data[counter]?.d}
              </Ans>
              <GiveHint onClick={()=>{
                getHint(counter)
              }}>
                <span>Give me Hint</span>
              </GiveHint>
              <Hint>{hint}</Hint>
            </>
        } 
      {isAnswerPressed && counter<data.length &&
            <Confirm onClick={()=>{
              getAnswer(answer,counter)
              //console.log("Answer",answer,"index",counter,"answer recieved",getAnswer(answer,counter));
              setIsAnswerPressed(false);
              setCheckAnswer(true);
              setHint("");
              getAnswer(answer,counter);
              //console.log(counter);
              //console.log(answer,data.length);
            }}>
              CONFIRM
            </Confirm>
       }
        {checkAnsher && counter<data.length ?
            <div>
              <Confirm onClick={()=>{
                setCheckAnswer(false);
                setCounter(counter+1);
                if (isAnswerCorrect){
                  setScore(score + 1);
                }
              }}>
                Next Answer
              </Confirm>
              <DisAns>
                Your Answer is {isAnswerCorrect ? ("correct") : ("wrong")} {/*  Edw htan to pio sosto ...  ( condition ? true :(else) false)        */}
              </DisAns>                                                    
                                                                            {/* allios condition && <> emfanizeis kati </>  (xwris else)                  */}
            </div>:
        (counter>=data.length) && 
            <>
              <Score>
                Your Score is {score} / {counter}
              </Score>
              <NavLinks to="/">
                <goBack>
                  Press to go BACK
                </goBack>
              </NavLinks>
            </>
        }
    
    </>
  );
}
export default Game;

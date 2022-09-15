import axios from 'axios'
import React, {useState , useEffect} from 'react';
import { Q, Ans, GiveHint, Hint} from './GameElements';

function Game() {
  const [ data , setData ] = useState({}) 
  const [ hint , setHint ] = useState("") 
  const [ counter , setCounter ] = useState(0) 
  const [ answer , setAnswer ] = useState("") 
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
  async function getAnser(answer){
    await axios({
      method: 'post',
      url: 'http://192.168.2.4:3333/game/getHint',
      data: {
        answer
      }
    }).then((response) => {
      console.log(response.data);
    }).catch((err)=>{
      console.log(err);
    })
    
  }

  async function getQ(){
    return 
  }

  async function desplayHint(){
    
  }



  return (
    
    <>
      <Q>
        <span>{data[counter]?.q}</span>
      </Q>
      <Ans onClick={()=>{
        setAnswer("a");
      }}>
        {data[counter]?.a}
      </Ans>
      <Ans onClick={()=>{
        setAnswer("b");
      }}>
        {data[counter]?.b}
      </Ans>
      <Ans onClick={()=>{
        setAnswer("c");
      }}>
        {data[counter]?.c}
      </Ans>
      <Ans onClick={()=>{
        setAnswer("d");
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
  );
}
export default Game;

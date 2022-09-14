import './App.css';
import Menu from './components/Menu';
import { Component } from 'react';
import ButtonStart from './components/ButtonStart';
import Questions from './components/Questions';

class App extends Component{
  render() {
    return (
      <div className="App" /*style={{backgroundColor: 'purple'}}*/>
        <Questions/>
        {/* <img src="/Images/GameLogo.png" alt="horse" />
        <Menu ></Menu>
        <ButtonStart aligned top></ButtonStart> */}
      </div>
    );
  };
  
}

export default App;

import React, {Component} from "react";

class Questions extends Component {
    constructor(){
        super()
        this.state = {
            question: "welcome visitor"
        }
    }

    changeQuestions() {
        this.setState({
            question: "Thank you for subcribing"
        })
    }

    render() {
        return(
            <div>
            <h1>{this.state.question}</h1>
            <button onClick={()  => this.changeQuestions()}>Next Question</button>
        </div>

        )
        
    }

}

export default Questions
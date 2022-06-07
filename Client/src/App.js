import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import ButtonComponent from "./components/ButtonComponent";

class App extends Component {

    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {

        const url = "http://127.0.0.1:3001/api/calculate";

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ calcul: this.state.result })
        };

        try{   

          fetch(url, requestOptions)
          .then(response => response.json())
          .then(data => this.setState({ result: data }));

        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="container">
                <div className="calc-body">
                    <ResultComponent result={this.state.result}/>
                    <ButtonComponent onClick={this.onClick}/>
                </div>
                </div>
            </div>
        );
    }
}

export default App;
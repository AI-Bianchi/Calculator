import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="calc-operation">
            <div className="result">
                <p>{result}</p>
            </div>
            </div>
    )
        ;
    }
}


export default ResultComponent;
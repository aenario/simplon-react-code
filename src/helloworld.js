import React from "react"
import Counter from "./counter"

export default class HelloWorld extends React.Component {

    constructor(){
        super()
        this.state = {initialCounterValue: 0};

        // FORCE BIND
        this.onResetClicked = this.onResetClicked.bind(this);
    }

    onResetClicked(){
        console.log('app:setState');
        this.setState({initialCounterValue: 10});
    }

    render(){
        console.log('app:render');
        return <div>
            <button onClick={this.onResetClicked} >Reset</button>
            <p>Hello {this.props.who} !
                <Counter
                        debugID="fixed"
                        key="fixed"
                         startAt={this.state.initialCounterValue} />
                <Counter
                        debugID={"changing" + this.state.initialCounterValue}
                        key={this.state.initialCounterValue}
                        startAt={this.state.initialCounterValue} />
            </p>
        </div>;
    }
}

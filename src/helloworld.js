import React from "react"

export default class HelloWorld extends React.Component {

    constructor(){
        super()
        this.state = {counter: 0}
    }

    onTimer(){
        this.setState({counter: this.state.counter + 1});
    }

    componentWillMount(){
        this.timer = setInterval(this.onTimer.bind(this), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return <p>Helo {this.props.who} ! ({this.state.counter})</p>;
    }
}

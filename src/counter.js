import React from "react"

export default class Counter extends React.Component {

    constructor(props){
        super()
        this.state = {counter: props.startAt}
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
        return <span> ({this.state.counter}) </span>;
    }
}

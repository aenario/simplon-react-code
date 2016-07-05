import React from "react"
import Counter from "./counter"

export default class HelloWorld extends React.Component {

    render(){
        return <p>Hello {this.props.who} ! <Counter /></p>;
    }
}

import React from "react"

export default class HelloWorld extends React.Component {
    render(){
        return <p>Helo {this.props.who} !</p>;
    }
}

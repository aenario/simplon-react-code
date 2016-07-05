import React from "react"
import Counter from "./counter"

export default class HelloWorld extends React.Component {

    render(){

        var counters = []
        for(var i=0, l=9; i<l; i++){
            if(i%2 == 0)
            counters.push(<Counter startAt={i} />);
        }

        return <p>Hello {this.props.who} ! {counters}</p>;
    }
}

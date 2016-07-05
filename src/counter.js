import React from "react"

export default class Counter extends React.Component {

    constructor(props){
        super()
        console.log('construct', props.debugID);
        this.state = {counter: props.startAt}
    }


    onTimer(){
        this.setState({counter: this.state.counter + 1});
    }


    componentWillMount(){
        console.log('mount', this.props.debugID);
        this.timer = setInterval(this.onTimer.bind(this), 1000);
    }


    componentDidMount(){
        // inutile, sauf pour manipuler le DOM directement (voir React/refs)
    }


    componentWillReceiveProps(nextprops){
        console.log('receiveprops', this.props.startAt,
                    '->',           nextprops.startAt);
        this.setState({counter: nextprops.startAt})
    }


    shouldComponentUpdate(nextprops, nextstate){
        // si le render commence à être trop lourd, on peut l'éviter ici.
        return true
    }


    componentWillUpdate(){
        console.log('counter:willupdate', this.props.debugID);
        // inutile, sauf pour manipuler le DOM directement (voir React/refs)
    }


    render(){
        console.log('counter:render', this.props.debugID);
        return <span> ({this.state.counter}) </span>;
    }


    componentDidUpdate(){
        console.log('counter:didupdate', this.props.debugID);
        // inutile, sauf pour manipuler le DOM directement (voir React/refs)
    }


    componentWillUnmount(){
        console.log('unmount', this.props.debugID);
        clearInterval(this.timer)
    }


}

Counter.propTypes = {startAt: React.PropTypes.number.isRequired}
Counter.defaultProps = {debugID: "a counter"}

import React from "react"
import {LoanPropType} from "./proptypes"

export default class Loan extends React.Component {

    constructor(){
        super()
        this.onReturnClicked = this.onReturnClicked.bind(this)
    }

    onReturnClicked(){
        this.props.onReturnClicked(this.props.loan.id)
    }

    render(){
        return <li>
            I loaned {this.props.loan.object} to {this.props.loan.contact} on {this.props.loan.loanDate.toDateString()}
            {(this.props.loan.returnDate == null) ? <button onClick={this.onReturnClicked}>Return</button>
             : <span>, it was returned on {this.props.loan.returnDate.toDateString()}</span>
            }
        </li>;
    }
}

Loan.propTypes = {
    onReturnClicked: React.PropTypes.func.isRequired,
    loan: LoanPropType
}

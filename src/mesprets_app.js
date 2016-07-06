import React from "react"
import uuid from "uuid"
import Loan from "./loan"
import LoanForm from "./loan_form"
import {extend} from "./utils"

export default class MesPretsApp extends React.Component {

    constructor(){
        super()
        this.state = {loans: []};

        // FORCE BIND
        this.onLoanSubmit = this.onLoanSubmit.bind(this);
        this.onLoanReturnClicked = this.onLoanReturnClicked.bind(this);
    }

    onLoanSubmit(loaninfos){
        loaninfos.id = uuid.v4();
        loaninfos.loanDate = new Date();
        this.setState({
            loans: this.state.loans.concat(loaninfos)
        });
    }

    onLoanReturnClicked(loanid){
        this.setState({
            loans: this.state.loans.map(function(loan){
                if( loan.id === loanid ){
                    return extend(loan, { returnDate: new Date() });
                } else return loan;
            })
        });
    }

    render(){
        return <div>
            <LoanForm onFormSubmit={this.onLoanSubmit}/>
            <ul>
                {this.state.loans.map((loan) =>
                    <Loan key={loan.id} loan={loan}
                          onReturnClicked={this.onLoanReturnClicked} />
                )}
            </ul>
        </div>
    }
}

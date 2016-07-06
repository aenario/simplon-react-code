import React from "react"
import uuid from "uuid"
import Loan from "./loan"
import LoanForm from "./loan_form"
import {extend} from "./utils"
import cozysdk from "cozysdk-client"

export default class MesPretsApp extends React.Component {

    constructor(){
        super()
        this.state = {loans: []};

        // FORCE BIND
        this.onLoanSubmit = this.onLoanSubmit.bind(this);
        this.refreshLoans = this.refreshLoans.bind(this);
        this.onLoanReturnClicked = this.onLoanReturnClicked.bind(this);
    }

    componentDidMount(){
        this.refreshLoans()
    }

    refreshLoans(){
        cozysdk.queryView('loan', 'all', {include_docs: true})
        .then((rows) => rows.map(function(row){
            return {
                id:         row.id,
                returnDate: row.doc.returnDate && new Date(row.doc.returnDate),
                loanDate:   new Date(row.doc.loanDate),
                object:     row.doc.object,
                contact:    row.doc.contact
            }
        }))
        .then((loans) => this.setState({loans}))
    }

    onLoanSubmit(loaninfos){
        loaninfos.loanDate = new Date();
        cozysdk.create('loan', loaninfos).then(this.refreshLoans)
    }

    onLoanReturnClicked(loanid){
        var changes = { returnDate: new Date() };
        cozysdk.updateAttributes('loan', loanid, changes)
        .then(this.refreshLoans);
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

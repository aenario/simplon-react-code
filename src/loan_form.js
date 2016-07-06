import React from "react"
import {LoanPropType} from "./proptypes"
import ContactsSelect from "./contacts_select"

export default class LoanForm extends React.Component {

    constructor(props){
        super()
        this.state = {
            object: props.object || "",
            contact: props.contact || ""
        }

        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onObjectChanged = (e) => this.setState({object: e.target.value});
        this.onContactChanged = (e) => this.setState({contact: e.target.value});
    }

    onFormSubmit(event){
        event.preventDefault()
        this.props.onFormSubmit({
            object: this.state.object,
            contact: this.state.contact
        });
        this.setState({object: '', contact: ''})
    }

    render(){
        return <form onSubmit={this.onFormSubmit}>
            Loan
            <input type="text" placeholder="what"
                onChange={this.onObjectChanged}
                value={this.state.object} />
            to
            <ContactsSelect
                onChange={this.onContactChanged}
                value={this.state.contact} />

            <input type="submit" value="Go" />
        </form>
    }
}

LoanForm.propTypes = {
    object: React.PropTypes.string,
    contact: React.PropTypes.string,
    onFormSubmit: React.PropTypes.func.isRequired,
}

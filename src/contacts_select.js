import React from "react"
import cozysdk from "cozysdk-client"

export default class ContactSelect extends React.Component {
    constructor(props){
        super()
        this.state = { contacts: [] }
    }

    componentDidMount(){
        var that = this;
        cozysdk.queryView('contact', 'all', {include_docs: true})
        .then((contactsRows) => contactsRows.map((row) => row.doc))
        .then((contacts) => that.setState({contacts: contacts}))
        .catch( (err) => alert(err.message) && alert(err.stack))
    }

    render(){
        return <select value={this.props.value} onChange={this.props.onChange}>
            {this.state.contacts.map((contact) =>
                <option key={contact._id} value={contact.fn}>{contact.fn}</option>
            )}
        </select>
    }
}

import React from "react"

export const LoanPropType = React.PropTypes.shape({
    id:         React.PropTypes.string.isRequired,
    returnDate: React.PropTypes.instanceOf(Date),
    loanDate:   React.PropTypes.instanceOf(Date),
    object:     React.PropTypes.string.isRequired,
    contact:    React.PropTypes.string.isRequired
});

import React from "react"
import ReactDOM from "react-dom"
import MesPrets from "./mesprets_app"
import cozysdk from "cozysdk-client"


var allView = {map: function(doc){ emit(doc._id); }}
cozysdk.defineView('loan', 'all', allView)
.catch((err) => alert(err))
.then(() =>
    ReactDOM.render(<MesPrets />, document.getElementById('react-app'))
)

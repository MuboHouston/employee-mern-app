import React from "react"

//We use Route in order to define the different routes of out application
// import { Route, Routes } from "react-route-dom";

//We import all the components we need in out app
// import Create from "./components/create";
// import Edit from "./components/edit"
import RecordList from "./components/recordList";

const App = () => {
    return (
        <div>
            <RecordList />
        </div>
    )
}

export default App;
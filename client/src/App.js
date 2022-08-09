import React from "react"

//We use Route in order to define the different routes of out application
import { Route, Routes } from "react-router-dom";

//We import all the components we need in out app
import Create from "./components/create";
import Edit from "./components/edit"
import RecordList from "./components/recordList";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            
            <Routes>
                <Route exact path="/" element={<RecordList />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </div>
    )
}

export default App;
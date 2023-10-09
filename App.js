import React from "react";

import './App.css';
import "./Button.css";

import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Sign from "./Sign";
import Postpage from "./Postpage";
import FindQuestion from "./FindQuestion";

function App() {
    return (
        <div className="all">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/Sign" element={<Sign />} />
                <Route path="/Postpage" element={<Postpage />} />
                <Route path="/findQuestion" element={<FindQuestion />} />
            </Routes>
        </div>
    )
}

export default App

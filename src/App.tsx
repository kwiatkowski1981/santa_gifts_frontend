import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {TestView} from "./views/TestView";
import {MainView} from "./views/MainView";

export function App() {

    return (
<>

    Menu:
    <hr/>
    <Link to="/gift">Switch to Gifts</Link>
    <br/>
    <Link to="/test">Switch to Test</Link>
    <br/>
    <Link to="/">Switch to Main</Link>

    <Routes>
        <Route path ="/" element={<MainView/>} />
        <Route path ="/gift" element={<GiftsView/>} />
        <Route path ="/test" element={<TestView/>} />

    </Routes>

</>
    )

    // return <GiftsView />
}
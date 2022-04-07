import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {ChildView} from "./views/ChildView";
import {MainView} from "./views/MainView";
import {Header} from "./components/header/Header";
import {NotFindView} from "./views/NotFindView";
import {SingleGiftView} from "./views/SingleGiftView";

export function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainView/>}/>
                <Route path="/gift" element={<GiftsView/>}/>
                <Route path="/gift/:idOfGift" element={<SingleGiftView/>}/>
                <Route path="/child" element={<ChildView/>}/>
                <Route path="*" element={<NotFindView/>}/>
            </Routes>

        </>
    )

    // return <GiftsView />
}
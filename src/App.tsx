import React, { useRef } from 'react';
import Home from './components/homepage/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    const projectsPageRef = useRef<HTMLInputElement | null>();

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

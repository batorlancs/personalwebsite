import React, { useRef } from 'react';
import Home from './components/homepage/Home';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';

function App() {

    const projectsPageRef = useRef<HTMLInputElement | null>();

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='*' element={<Header />}/>
                <Route path='/' element={<Home />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

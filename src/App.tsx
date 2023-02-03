import React, { useRef } from 'react';
import Home from './components/homepage/Home';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from './components/projectspage/ProjectsPage';

function App() {

    const projectsPageRef = useRef<HTMLInputElement | null>();

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='*' element={<Header />}/>
                <Route path='/' element={<Home />}/>
                <Route path='projects' element={<ProjectsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

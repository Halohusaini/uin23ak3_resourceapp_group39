import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainNavigation from './components/MainNavigation'; 
import Resources from './components/Resources'; 
import './styles/main.scss'

function App() {
    return (
        
            <div>
                <MainNavigation />
                <Routes>
                    <Route path="/resources/:category" element={<Resources />} />
                    <Route path="/" element={<Navigate replace to="/resources/html" />} />
                </Routes>
            </div>
        
    );
}

export default App;

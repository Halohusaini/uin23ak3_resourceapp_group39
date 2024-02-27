import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation'; // Adjust the path as needed
import Resources from './components/Resources'; // Adjust the path as needed

function App() {
    return (
        
            <div>
                <MainNavigation />
                <Routes>
                    <Route path="/resources/:category" element={<Resources />} />
                    <Route path="/" element={<div>Welcome! Select a category.</div>} />
                </Routes>
            </div>
        
    );
}

export default App;

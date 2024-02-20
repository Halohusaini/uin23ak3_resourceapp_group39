import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavigation from '../src/components/MainNavigation';
import Resources from '../src/resources';

function App() {
    return (
        <Router>
            <div>
                <MainNavigation />
                <Routes>
                    
                    <Route path="/resources/:category" element={<Resources />} />

                    
                    <Route path="/" element={<div>Welcome! Select a category.</div>} />
                </Routes>
            </div>
        </Router>
    );
}
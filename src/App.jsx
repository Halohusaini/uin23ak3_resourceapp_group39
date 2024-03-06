import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation'; // Adjust the path as needed
import Resources from './components/Resources'; // Adjust the path as needed
import './styles/main.scss'

function App() {
    return (
        
            <div>
                <MainNavigation />
                <Routes>
                    <Route path="/resources/:category" element={<Resources />} />
                    
                </Routes>
            </div>
        
    );
}

export default App;

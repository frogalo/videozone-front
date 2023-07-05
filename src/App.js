import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import UploadPage from './pages/UploadPage';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/upload" element={<UploadPage />} />
                    {/* Add other routes and components as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

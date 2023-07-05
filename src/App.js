import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import UploadPage from './pages/UploadPage';
import ImportPage from "./pages/ImportPage";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/upload" element={<UploadPage />} />
                    <Route path="/import" element={<ImportPage />} />
                    {/* Add other routes and components as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

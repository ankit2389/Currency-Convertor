// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FrontPage from './FrontPage';
import CurrencyConverter from './components/CurrencyConverter';
import StockChart from './components/StockChart';
import './App.css'; // Import global styles if needed

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/currency-converter">Currency Converter</Link></li>
                        <li><Link to="/stock-chart">Stock Chart</Link></li>
                    </ul>
                </nav>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<FrontPage />} />
                        <Route path="/currency-converter" element={<CurrencyConverter />} />
                        <Route path="/stock-chart" element={<StockChart />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;

// src/FrontPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './FrontPage.css'; // Optional, for custom styles

const FrontPage = () => {
    return (
        <div className="frontpage-container">
            <h1 className="text-center mb-4">Welcome to the Finance App</h1>
            <div className="button-container">
                <Link to="/currency-converter" className="btn btn-primary btn-lg mx-2">Currency Converter</Link>
                <Link to="/stock-chart" className="btn btn-secondary btn-lg mx-2">Stock Exchange Chart</Link>
            </div>
        </div>
    );
};

export default FrontPage;

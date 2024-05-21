// src/FilterBar.js
import React from 'react';
import './Filter-event-component.css';
import { FaSearch, FaEdit } from 'react-icons/fa';

const FilterEventComponent = () => {
    return (
        <div className="filter-bar">
            <div className="location-search">
                <button className="location-button">
                    Paris, FR <FaEdit className="edit-icon" />
                </button>
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Recherche" />
                </div>
            </div>
            <div className="filter-options">
                <select className="filter-select">
                    <option>Type</option>
                </select>
                <select className="filter-select">
                    <option>Format</option>
                </select>
                <select className="filter-select">
                    <option>Quand</option>
                </select>
                <select className="filter-select">
                    <option>Thème</option>
                </select>
            </div>
        </div>
    );
};

export default FilterEventComponent;

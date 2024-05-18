// src/UISection.js
import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import './Slot-calendar-component.css';

const SlotCalendarComponent = () => {
    return (
        <div className="ui-section">
            <div className="header">
                <button className="icon-button">
                    <FaPlus />
                </button>
                <button className="slot-button">Creneaux</button>
                <button className="icon-button">
                    <FaTrash />
                </button>
            </div>
            <div className="content">
                <div className="menu-item">Mes sessions</div>
                <div className="menu-item">Mes inscriptions</div>
            </div>
        </div>
    );
};

export default SlotCalendarComponent;

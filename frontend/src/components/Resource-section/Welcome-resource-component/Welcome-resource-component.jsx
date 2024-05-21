// src/BlogBanner.js
import React from 'react';
import './Welcome-resource-component.css';

const WelcomeResourceComponent = () => {
    return (
        <div className="blog-banner">
            <span className="banner-title">Blog</span>
            <span className="banner-description">
                Découvrez notre dernier article de blog, des conseils, des astuces.
            </span>
        </div>
    );
};

export default WelcomeResourceComponent;

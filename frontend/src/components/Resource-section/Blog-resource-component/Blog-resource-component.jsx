// src/BlogPostsGrid.js
import React from 'react';
import './Blog-resource-component.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const posts = [
    { id: 1, category: 'Isolement social', title: '10 Stratégies simples pour gérer l\'anxiété', author: 'Marie-Claire Gustav', date: '2 avril 2024', image: 'https://via.placeholder.com/150' },
    { id: 2, category: 'Isolement social', title: 'Sortir de sa bulle: Se créer un cercle social dynamique', author: 'Anne Chore', date: '2 avril 2024', image: 'https://via.placeholder.com/150' },
    { id: 3, category: 'Santé Mentale', title: 'Les effets de la solitude sur la Santé Mentale', author: 'Marie Dubois', date: '12 février 2024', image: 'https://via.placeholder.com/150' },
    { id: 4, category: 'Santé Mentale', title: 'Mentalité Positive: Comment garder le sourire même en solo', author: 'Maxime Dupont', date: '11 février 2024', image: 'https://via.placeholder.com/150' },
    { id: 5, category: 'Santé Mentale', title: 'L\'importance de la connexion sociale', author: 'Maxime Dupont', date: '2 février 2024', image: 'https://via.placeholder.com/150' },
    { id: 6, category: 'Solitude sociale', title: 'Activités pour combattre la solitude', author: 'Mohammad Khan', date: '10 décembre 2024', image: 'https://via.placeholder.com/150' },
    { id: 7, category: 'Solitude sociale', title: 'Les stratégies d\'adaptation face à la solitude', author: 'Paul Martin', date: '1 avril 2024', image: 'https://via.placeholder.com/150' },
    { id: 8, category: 'Isolement social', title: 'Les risques de santé associés à l\'isolement', author: 'Camille Leclerc', date: '22 février 2024', image: 'https://via.placeholder.com/150' }
];

const BlogResourceComponent = () => {
    return (
        <div className="blog-posts-grid">
            <div className="search-filter-bar">
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Recherche" />
                </div>
                <div className="filter-box">
                    <select className="filter-select">
                        <option>Trier par: Popularité</option>
                    </select>
                </div>
            </div>
            <div className="category-filters">
                <button className="category-button">Tout</button>
                <button className="category-button">Solitude</button>
                <button className="category-button">Isolement</button>
                <button className="category-button">Santé Mentale</button>
                <button className="category-button">Voir plus</button>
            </div>
            <div className="posts-grid">
                {posts.map(post => (
                <Link to="/page-resource">
                    <div className="post-card" key={post.id}>
                        <img className="post-image" src={post.image} alt={post.title} />
                        <div className="post-details">
                            <div className={`post-category ${post.category.replace(/\s+/g, '-').toLowerCase()}`}>{post.category}</div>
                            <h2 className="post-title">{post.title}</h2>
                            <div className="post-author">{post.author}</div>
                            <div className="post-date">{post.date}</div>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
            <button className="load-more">Voir plus</button>
        </div>
    );
};

export default BlogResourceComponent;

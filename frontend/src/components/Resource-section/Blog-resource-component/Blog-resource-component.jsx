// src/BlogPostsGrid.js
import React, { useState, useEffect } from 'react';
import './Blog-resource-component.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogResourceComponent = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/articles')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Erreur lors de la récupération des articles:', error));
    }, []);

    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="blog-posts-grid">
            <div className="search-filter-bar">
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input 
                        type="text" 
                        placeholder="Recherche" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
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
                {filteredPosts.map(post => (
                    <Link to="/page-resource" key={post.id}>
                        <div className="post-card">
                            <img className="post-image" src={post.image || 'https://via.placeholder.com/150'} alt={post.title} />
                            <div className="post-details">
                                <div className={`post-category ${post.category ? post.category.replace(/\s+/g, '-').toLowerCase() : ''}`}>{post.category}</div>
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

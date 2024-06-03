// src/RecommendedArticles.js
import React from 'react';
import './Article-diary-component.css';
import { Link } from 'react-router-dom';

const articles = [
    { 
        id: 1, 
        category: 'Isolement social', 
        title: '10 Stratégies Simples pour Gérer l’Anxiété au Quotidien', 
        author: 'Marie-Claire Gustav', 
        date: '2 avril 2024',
        image: 'https://via.placeholder.com/100'
    },
    { 
        id: 2, 
        category: 'Isolement social', 
        title: '10 Stratégies Simples pour Gérer l’Anxiété au Quotidien', 
        author: 'Marie-Claire Gustav', 
        date: '2 avril 2024',
        image: 'https://via.placeholder.com/100'
    },
    { 
        id: 3, 
        category: 'Isolement social', 
        title: '10 Stratégies Simples pour Gérer l’Anxiété au Quotidien', 
        author: 'Marie-Claire Gustav', 
        date: '2 avril 2024',
        image: 'https://via.placeholder.com/100'
    },
    { 
        id: 4, 
        category: 'Isolement social', 
        title: '10 Stratégies Simples pour Gérer l’Anxiété au Quotidien', 
        author: 'Marie-Claire Gustav', 
        date: '2 avril 2024',
        image: 'https://via.placeholder.com/100'
    },
];

const ArticleDiaryComponent = () => {
    return (
        <div className="recommended-articles">
            <h1>Articles Recommandés Pour Vous <Link to='/resource'><span className="voir-tout">voir tout</span></Link></h1>
            <div className="articles-container">
                {articles.map(article => (
                    <div className="article-item" key={article.id}>
                        <img className="article-image" src={article.image} alt="Article" />
                        <div className="article-details">
                            <div className="article-category">{article.category}</div>
                            <h2 className="article-title">{article.title}</h2>
                            <div className="article-author">
                                <span>{article.author}</span>
                                <span>{article.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleDiaryComponent;

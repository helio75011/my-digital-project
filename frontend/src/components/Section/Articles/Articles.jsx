import React from 'react';
import './Articles.css';

const Articles = () => {
  return (
    <div className="articlesContainer">
      <div className="articlesHeader">
        <h2>Articles et Conseils sur la santé mentale</h2>
        <p>Explorez des Ressources Expertes pour Cultiver l'Équilibre et la Santé Mentale</p>
      </div>
      
      <div className="articlesContent">
        <div className="discoverBlock">
          <h3>Découvrez</h3>
          <p>Découvrez une riche sélection d'articles et de conseils élaborés par des professionnels de la santé mentale, conçus pour vous guider dans votre voyage vers le bien-être mental. De la gestion du stress à l'amélioration de l'estime de soi, notre plateforme offre un soutien précieux.</p>
        </div>

        <div className="articlesList">
          {/* Repeat this block for each article */}
          <div className="articleItem">
            <img src="path_to_article_image.jpg" alt="Article thumbnail" className="articleImage" />
            <span className="articleTag">Isolement social</span>
            <h4 className="articleTitle">10 Stratégies Simples pour Gérer l'Anxiété au Quotidien</h4>
            <p className="articleAuthor">Merlie-Claire Gustav</p>
            <p className="articleDate">2 avril 2024</p>
          </div>
          <div className="articleItem">
            <img src="path_to_article_image.jpg" alt="Article thumbnail" className="articleImage" />
            <span className="articleTag">Isolement social</span>
            <h4 className="articleTitle">10 Stratégies Simples pour Gérer l'Anxiété au Quotidien</h4>
            <p className="articleAuthor">Merlie-Claire Gustav</p>
            <p className="articleDate">2 avril 2024</p>
          </div>
          <div className="articleItem">
            <img src="path_to_article_image.jpg" alt="Article thumbnail" className="articleImage" />
            <span className="articleTag">Isolement social</span>
            <h4 className="articleTitle">10 Stratégies Simples pour Gérer l'Anxiété au Quotidien</h4>
            <p className="articleAuthor">Merlie-Claire Gustav</p>
            <p className="articleDate">2 avril 2024</p>
          </div>
          {/* ...other articles */}
        </div>
      </div>

      <div className="navigationButtons">
        <button className="prevButton">←</button>
        <button className="nextButton">→</button>
      </div>
    </div>
  );
};

export default Articles;

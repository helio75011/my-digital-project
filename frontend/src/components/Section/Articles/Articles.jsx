import React from 'react';
import './Articles.css';
import Logo from './uploads/logo.png'
import ImageSM1 from './uploads/ImageSM1.png'
import ImageSM2 from './uploads/ImageSM2.png'
import ImageSM3 from './uploads/ImageSM3.png'
// import Titre from './uploads/titre.png'

const Articles = () => {
  return (
    <div className="articlesContainer" id='events'>
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
            <img src={ImageSM1} alt="Article thumbnail" className="articleImage" />
            <div className='articleTag-parent'>
              <span className="articleTag">Isolement social</span>
            </div>
            <h4 className="articleTitle">10 Stratégies Simples pour Gérer l'Anxiété au Quotidien</h4>
            <p className="articleAuthor">Merlie-Claire Gustav</p>
            <div className='logo-article'>
              <img src={Logo} />
              <p className="articleDate">2 avril 2024</p>
            </div>
          </div>
          <div className="articleItem">
            <img src={ImageSM2} alt="Article thumbnail" className="articleImage" />
            <div className='articleTag-parent'>
              <span className="articleTag">Isolement social</span>
            </div>
            <h4 className="articleTitle">10 Stratégies Simples pour Gérer l'Anxiété au Quotidien</h4>
            <p className="articleAuthor">Merlie-Claire Gustav</p>
            <div className='logo-article'>
              <img src={Logo} />
              <p className="articleDate">2 avril 2024</p>
            </div>
          </div>
          <div className="articleItem">
            <img src={ImageSM3} alt="Article thumbnail" className="articleImage" />
            <div className='articleTag-parent'>
              <span className="articleTag">Isolement social</span>
            </div>
            <h4 className="articleTitle">10 Stratégies Simples pour Gérer l'Anxiété au Quotidien</h4>
            <p className="articleAuthor">Merlie-Claire Gustav</p>
            <div className='logo-article'>
              <img src={Logo} />
              <p className="articleDate">2 avril 2024</p>
            </div>
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

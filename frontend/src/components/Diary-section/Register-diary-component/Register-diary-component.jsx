import React from 'react';
import './Register-diary-component.css'; // Assurez-vous de créer ce fichier CSS

function RegisterDiaryComponent() {
  return (
    <div>
        <div className='eventTitle-parent'>
            <h1>Votre Inscription Aux Evénements</h1>
            <a href='#'>voir tout</a>
        </div>
        <div className='eventCard-parent'>
            <div className="eventCard">
              <img src="" alt="Event" className="eventImage"/>
              <div className="eventDetails">
                <div className='DateIcon-Register'>
                  <div className="eventDate">05 avril 2024 à 18h30</div>
                  <div className="eventIcon">&#128100;</div>  
                </div>
                <div className="eventTitle">ART Therapie</div>
                <p className="eventDescription">Lorem ipsum dolor sit amet consecteur...</p>
                <div className="eventLocation">Paris 01</div>
              </div>
            </div>
            <div className="eventCard">
              <img src="" alt="Event" className="eventImage"/>
              <div className="eventDetails">
                <div className='DateIcon-Register'>
                  <div className="eventDate">05 avril 2024 à 18h30</div>
                  <div className="eventIcon">&#128100;</div>  
                </div>
                <div className="eventTitle">ART Therapie</div>
                <p className="eventDescription">Lorem ipsum dolor sit amet consecteur...</p>
                <div className="eventLocation">Paris 01</div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default RegisterDiaryComponent;
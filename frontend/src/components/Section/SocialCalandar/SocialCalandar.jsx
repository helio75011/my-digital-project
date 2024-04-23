import React from 'react';
import './SocialCalandar.css';

const SocialCalendar = () => {
  return (
    <div className="socialCalendarContainer">
      <div className="socialCalendarHeader">
        <h2>Calendrier social</h2>
        <p>Rejoignez notre plateforme pour découvrir un calendrier riche en événements conçus spécialement pour les personnes isolées. Rencontrez de nouveaux amis, participez à des discussions passionnantes et créez des liens durables.</p>
        <div className="locationFilter">
          <input type="text" placeholder="Paris, FR" />
          <button>🔍</button>
        </div>
      </div>
      
      <div className="eventsContainer">
        {/* Repeat this block for each event */}
        <div className="eventCard">
          <img src="path_to_event_image.jpg" alt="Event" className="eventImage" />
          <div className="eventDetails">
            <p className="eventDate">05 avril 2024 à 18h30</p>
            <h3 className="eventTitle">ART Therapie</h3>
            <p className="eventDescription">Lorem ipsum dolor sit amet consectetur...</p>
            <p className="eventLocation">Paris 01</p>
            <p className="eventAvailability">9 places disponible</p>
          </div>
        </div>
        <div className="eventCard">
          <img src="path_to_event_image.jpg" alt="Event" className="eventImage" />
          <div className="eventDetails">
            <p className="eventDate">05 avril 2024 à 18h30</p>
            <h3 className="eventTitle">ART Therapie</h3>
            <p className="eventDescription">Lorem ipsum dolor sit amet consectetur...</p>
            <p className="eventLocation">Paris 01</p>
            <p className="eventAvailability">9 places disponible</p>
          </div>
        </div>
        <div className="eventCard">
          <img src="path_to_event_image.jpg" alt="Event" className="eventImage" />
          <div className="eventDetails">
            <p className="eventDate">05 avril 2024 à 18h30</p>
            <h3 className="eventTitle">ART Therapie</h3>
            <p className="eventDescription">Lorem ipsum dolor sit amet consectetur...</p>
            <p className="eventLocation">Paris 01</p>
            <p className="eventAvailability">9 places disponible</p>
          </div>
        </div>
        <div className="eventCard">
          <img src="path_to_event_image.jpg" alt="Event" className="eventImage" />
          <div className="eventDetails">
            <p className="eventDate">05 avril 2024 à 18h30</p>
            <h3 className="eventTitle">ART Therapie</h3>
            <p className="eventDescription">Lorem ipsum dolor sit amet consectetur...</p>
            <p className="eventLocation">Paris 01</p>
            <p className="eventAvailability">9 places disponible</p>
          </div>
        </div>
        {/* ...other events */}
      </div>

      <div className="navigationButtons">
        <button className="prevButton">←</button>
        <button className="nextButton">→</button>
      </div>
    </div>
  );
};

export default SocialCalendar;

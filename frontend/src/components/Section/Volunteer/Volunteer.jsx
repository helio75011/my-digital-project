import React from 'react';
import './Volunteer.css'; // Ensure you have a CSS module set up

const Volunteer = () => {
    return (
      <section className='volunteerSection'>
        <div className='volunteerHeader'>
          <h1 className='volunteerTitle'>Devenez bénévole pour faire une différence</h1>
          <p className='volunteerSubtitle'>Lorem ipsum dolor sit amet consectetur. Elementum nisl dolor tor sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id. Urna posuere consequat velit vulputate faucibus pretium arcu accumsan sit. Vel venenatis sapien.</p>
        </div>
        
        <ul className='volunteerList'>
          {/* Repeat this li for each volunteer opportunity */}
          <li className='volunteerItem'>
            <div className='imageWrapper'>
              <img src="path_to_woman_image.jpg" alt="Volunteer" className='volunteerImage' />
            </div>
            <div className='volunteerContent'>
              <p>Vous avez l'opportunité d'offrir un soutien crucial aux personnes isolées qui peuvent faire face à des difficultés émotionnelles, mentales ou relationnelles.</p>
            </div>
          </li>
          {/* ...other items */}
        </ul>
  
        <button className='startButton'>Commencer</button>
      </section>
    );
};

export default Volunteer;

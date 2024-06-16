import React, { useState } from 'react';
import './Doctor-section.css';
import WelcomeDoctorComponent from './Welcome-Doctor-component/Welcome-Doctor-component'
import ProfileDoctorComponent from './Profile-Doctor-component/Profile-Doctor-component';
import ChangePsychologistModal from './Change-Doctor-component/Change-Doctor-component';

const DoctorSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='doctor-section'>
      <WelcomeDoctorComponent onOpenModal={handleOpenModal} />
      <ProfileDoctorComponent />
      {showModal && (
        <div className="modal-overlay">
          <ChangePsychologistModal onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default DoctorSection;

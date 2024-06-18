// ParentComponent.jsx
import React, { useState } from 'react';
import FinishFormComponent from './components/Login-section/Finish-Form-component/Finish-Form-component';
import ResultLoginComponent from './components/Login-section/Result-login-component/Result-login-component';
import PaymentModalComponent from './components/Login-section/Payment-modal-component/Payment-modal-component';
import ThanksModalComponent from './components/Login-section/Thanks-modal-component/Thanks-modal-component';

const ParentComponent = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    confirmEmail: '',
    password: '',
    acceptPolicy: false,
    acceptNotifications: false,
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  console.log('ParentComponent state:', {
    formData,
    isFormSubmitted,
    verificationCode,
    isPaymentModalOpen,
    isThankYouModalOpen,
  });

  return (
    <>
      <FinishFormComponent
        formData={formData}
        setFormData={setFormData}
        setIsFormSubmitted={setIsFormSubmitted}
        setVerificationCode={setVerificationCode}
      />
      {isFormSubmitted && (
        <ResultLoginComponent
          openPaymentModal={() => setIsPaymentModalOpen(true)}
        />
      )}
      <PaymentModalComponent
        isOpen={isPaymentModalOpen}
        onRequestClose={() => setIsPaymentModalOpen(false)}
        formData={formData}
        setIsThankYouModalOpen={setIsThankYouModalOpen}
      />
      {isThankYouModalOpen && (
        <ThanksModalComponent
          isOpen={isThankYouModalOpen}
          onRequestClose={() => setIsThankYouModalOpen(false)}
        />
      )}
    </>
  );
};

export default ParentComponent;
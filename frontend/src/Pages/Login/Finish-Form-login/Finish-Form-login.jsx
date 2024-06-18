import React, { useState } from 'react';
import Header from '../../../components/Section/Header/Header'
import FinishFormComponent from '../../../components/Login-section/Finish-Form-component/Finish-Form-component'

const FinishFormLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    lastName: '',
    firstName: '',
    confirmEmail: '',
    acceptPolicy: false,
    acceptNotifications: false
  });

  return (
    <div>
        <Header />
        <FinishFormComponent
          formData={formData}
          setFormData={setFormData}
          setIsFormSubmitted={() => {}}
          setVerificationCode={() => {}}
        />
    </div>
  )
}

export default FinishFormLogin
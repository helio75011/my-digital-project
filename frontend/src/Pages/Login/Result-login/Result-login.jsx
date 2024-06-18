import React, { useState } from 'react';
import Header from '../../../components/Section/Header/Header'
import ResultLoginComponent from '../../../components/Login-section/Result-login-component/Result-login-component'

const ResultLogin = () => {
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
        <ResultLoginComponent
          formData={formData}
          setFormData={setFormData}
        />
    </div>
  )
}

export default ResultLogin
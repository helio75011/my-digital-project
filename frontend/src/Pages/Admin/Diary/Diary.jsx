import React, { useEffect, useState } from 'react';
import { apiFetch } from '../../../utils/api'
import './Diary.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import DiarySection from '../../../components/Diary-section/Diary-section'

const Diary = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
      const fetchData = () => {
          apiFetch('http://localhost:3000/protected-route')
              .then(data => {
                  setData(data);
              })
              .catch(error => {
                  console.error('Erreur lors de la récupération des données:', error);
                  setError('Erreur lors de la récupération des données');
              });
      };

      fetchData();
  }, []);

  if (error) {
      return <div>{error}</div>;
  }

  if (!data) {
      return <div>Chargement...</div>;
  }
  
  return (
    <div>
      <HeaderLogin />
      <div className='Diary-flex'>
        <HeaderAdmin />
        <DiarySection />
      </div>
    </div>
  )
}

export default Diary
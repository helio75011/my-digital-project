import React from 'react'
import './Statistic.css'
import HeaderLogin from '../../../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../../../components/Header-admin/Header-Admin'
import StatisticDiarySection from '../../../../../components/Diary-section/History-diary-section/Statistic-diary-section/Statistic-diary-section'

const Statistic = () => {
  return (
    <div>
        <HeaderLogin />  
        <div className='statistic-flex'>
            <HeaderAdmin />
            <StatisticDiarySection />
        </div>
    </div>
  )
}

export default Statistic
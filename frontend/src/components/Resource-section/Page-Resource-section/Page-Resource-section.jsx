import React from 'react'
import './Page-Resource-section.css'
import WelcomeResourceComponent from '../Welcome-resource-component/Welcome-resource-component'
import DetailPageResourceComponent from './Detail-Page-Resource-component/Detail-Page-Resource-component'

const PageResourceSection = () => {
  return (
    <div className='body-page-resource'>
      <WelcomeResourceComponent />
      <DetailPageResourceComponent />
    </div>
  )
}

export default PageResourceSection
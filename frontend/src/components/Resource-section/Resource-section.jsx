import React from 'react'
import './Resource-section.css'
import WelcomeResourceComponent from './Welcome-resource-component/Welcome-resource-component'
import BlogResourceComponent from './Blog-resource-component/Blog-resource-component'

const ResourceSection = () => {
  return (
    <div className='body-resource'>
        <WelcomeResourceComponent />
        <BlogResourceComponent />
    </div>
  )
}

export default ResourceSection
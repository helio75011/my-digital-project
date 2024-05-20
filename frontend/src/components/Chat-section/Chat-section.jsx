import React from 'react'
import './Chat-section.css'
import SearchChatComponent from './Search-chat-component/Search-chat-component'
import InterfaceChatComponent from './Interface-chat-component/Interface-chat-component'

const ChatSection = () => {
  return (
    <div className='body-chat'>
        <SearchChatComponent />
        <InterfaceChatComponent />
    </div>
  )
}

export default ChatSection
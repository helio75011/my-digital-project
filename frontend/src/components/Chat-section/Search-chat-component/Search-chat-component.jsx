// src/ChatList.js
import React from 'react';
import './Search-chat-component.css';
import { FaSearch } from 'react-icons/fa';

const chats = [
    {
        id: 1,
        name: 'Max K.',
        message: 'Salut!!! je suis content de te voir inscrire à mon art ...',
        date: 'Aujourd\'Hui',
        time: '11:00',
        avatar: 'https://via.placeholder.com/40'
    },
    {
        id: 2,
        name: 'Dr. Metz',
        message: 'Je vois. La solitude peut être un défi, surtout lorsque l\'on vit seul. Comment vous sentez...',
        date: 'Aujourd\'Hui',
        time: '08:30',
        avatar: 'https://via.placeholder.com/40'
    },
    {
        id: 3,
        name: 'l\'equipe de SoutienPlus',
        message: 'Félicitations ! Vous avez rejoint notre communauté! Quelques conseils avant de ...',
        date: '1 avril',
        time: '07:30',
        avatar: 'https://via.placeholder.com/40'
    }
];

const SearchChatComponent = () => {
    return (
        <div className="chat-list-container">
            <div className="search-bar">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Recherche" />
            </div>
            <div className="chat-list">
                {chats.map(chat => (
                    <div className="chat-item" key={chat.id}>
                        <img className="chat-avatar" src={chat.avatar} alt={chat.name} />
                        <div className="chat-details">
                            <div className="chat-header">
                                <span className="chat-name">{chat.name}</span>
                                <span className="chat-time">{chat.date} | {chat.time}</span>
                            </div>
                            <div className="chat-message">{chat.message}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchChatComponent;

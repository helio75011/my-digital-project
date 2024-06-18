// src/ChatInterface.js
import React from 'react';
import './Interface-chat-component.css';
import { FaPaperPlane, FaPhone, FaVideo, FaSearch, FaEllipsisV } from 'react-icons/fa';

const messages = [
    { id: 1, sender: 'Dr. Metz', time: '08:10', text: 'Bonjour, comment allez-vous aujourd’hui ?', type: 'received' },
    { id: 2, sender: 'User', time: '08:13', text: 'Bonjour. Je suppose que ça va. Enfin, aussi bien que possible, je suppose.', type: 'sent' },
    { id: 3, sender: 'Dr. Metz', time: '08:15', text: 'Je comprends. Vous semblez un peu incertain. Est-ce qu’il y a quelque chose en particulier qui vous préoccupe en ce moment ?', type: 'received' },
    { id: 4, sender: 'User', time: '08:25', text: 'Eh bien, je vis seule depuis un certain temps maintenant, et parfois ça devient un peu difficile. Je me sens parfois seule et isolée.', type: 'sent' },
    { id: 5, sender: 'Dr. Metz', time: '08:30', text: 'Je vois. La solitude peut être un défi, surtout lorsque l’on vit seul. Comment vous sentez-vous en général ces derniers temps ?', type: 'received' },
];

const InterfaceChatComponent = () => {
    return (
        <div className="chat-interface">
            <div className="chat-header">
                <div className="header-left">
                    <img className="avatar" src="https://via.placeholder.com/40" alt="Dr. Metz" />
                    <span className="chat-name">Dr. Metz</span>
                </div>
                {/* <div className="header-right">
                    <FaPhone className="icon" />
                    <FaVideo className="icon" />
                    <FaSearch className="icon" />
                    <FaEllipsisV className="icon" />
                </div> */}
            </div>
            <div className="chat-body">
                {messages.map(message => (
                    <div key={message.id} className={`chat-message ${message.type}`}>
                        <p className="message-text">{message.text}</p>
                        <span className="message-time">{message.time}</span>
                    </div>
                ))}
            </div>
            <div className="chat-footer">
                <FaPaperPlane className="icon" />
                <input type="text" placeholder="Écrivez votre message ici ..." />
                <button className="send-button"><FaPaperPlane /></button>
            </div>
        </div>
    );
};

export default InterfaceChatComponent;

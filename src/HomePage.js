import React from 'react';
import './HomePage.css';
import logoImg from './login.png'; 


const channels = [
  { id: 1, name: 'general' },
  { id: 2, name: 'random' },
  { id: 3, name: 'projects' },
  { id: 4, name: 'announcements' },
];

const HomePage = () => {
  return (
    <div className="radus-container">
      {}
      <aside className="radus-sidebar">
        {}
        <img src={logoImg} alt="Radus Logo" className="radus-logo" />

        <ul className="radus-channels">
          {channels.map(channel => (
            <li key={channel.id}>
              <span className="channel-icon">#</span>
              <span className="channel-name">{channel.name}</span>
            </li>
          ))}
        </ul>
        {}
      </aside>

      {}
      <main className="radus-content">
        <div className="radus-header">
          <h1>Welcome to Radus</h1>
          {}
        </div>
        <div className="radus-messages">
          {}
          <div className="message">
            <div className="sender">Sudi Sankavaram</div>
            <div className="text">Hello team! Welcome to Radus intranet.</div>
            <div className="timestamp">Today at 9:30 AM</div>
          </div>
          {}
        </div>
        {}
      </main>

      {}
      <footer className="radus-footer">
        <p>© {new Date().getFullYear()} Radus Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

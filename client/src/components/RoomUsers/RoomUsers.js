import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './RoomUsers.css';

const RoomUsers = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h3>People In Room</h3>
            <div className="activeContainer">
              <h2 className="userbox">
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    
                    <img alt="Online Icon" src={onlineIcon}/>
                    <div className="name">{name}</div>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default RoomUsers;
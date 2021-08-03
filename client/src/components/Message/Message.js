import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

const Message = ({message:{user, text}, name}) => {
    let isSentByCurrentUser = false;

    const trimedName = name.trim().toLowerCase();

    if(user === trimedName)
    {
        isSentByCurrentUser =true;
    }

    return(
        isSentByCurrentUser
        ? (
            <div className="messageContainer justifyEnd">
                <div className="messageBox backgroundBlue messageRight">
                    <p className="sentText colorGrey pr-10">{trimedName}</p>
                    <p className="messageText colorWhite ">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="sentText pl-10">{user}</p>
                    <p className="messageText pl-20 colorDark ">{ReactEmoji.emojify(text)}</p>
                </div>
                
            </div>
        )
    );
}


export default Message;
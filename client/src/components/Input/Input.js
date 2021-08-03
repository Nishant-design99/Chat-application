import React from 'react';
import './Input.css';

const Input = ({message, setMessage, sendMessage}) => (
    <form className="form">
        <div className="inputContainer">
            <input
                className="input"
                type="text"
                placeholder="type here.."
                value={message} 
                onChange={({target : {value}}) => setMessage(value)}
                onKeyPress = {event => event.key === 'Enter' ? sendMessage(event): null}
            />
        </div>
        <button className="sendButton" onClick={ e => sendMessage(e)}>Send</button>
    </form>
)

export default Input;
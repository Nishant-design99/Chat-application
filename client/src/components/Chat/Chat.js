import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';


import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import RoomUsers from '../RoomUsers/RoomUsers';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;
const ENDPOINT = 'localhost:5000';
// const mypeer = new Peer(undefined,{
//     host: '/',
//     port: '5000'
// })


const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    


    useEffect(() =>{
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        
        setName(name);
        setRoom(room);

        socket.emit('join', {name,room}, (error) =>{
            if(error) {
                alert(error);
              }
        });

        // return ()=>{
        //     socket.emit('disconnect');
        //     socket.off();
        // }

    },[location.search]);


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });
    }, []);


    //function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    // console.log(message,messages);

    return(
        <div className="outerContainer">
            <div className="infoContainer">
                <InfoBar room={room}/>
            </div>
            <div className="container">
                <Messages messages={messages} name={name} />
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <div className="userContainer">
                <RoomUsers users={users}/>
            </div>
        </div>
    );
}
export default Chat;
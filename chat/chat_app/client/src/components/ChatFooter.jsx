import React, { useState } from 'react';
import {
    Input,
    Button
} from '@nextui-org/react';

const ChatFooter = ({socket}) => {

    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message.trim() && localStorage.getItem('userName')) {
            socket.emit('message', {
              text: message,
              username: localStorage.getItem('userName'),
              id: `${socket.id}${Math.random()}`,
              socketID: socket.id,
            });
          }
          setMessage('');
    };

    return (
        <div className="ChatFooter bg-slate-800 h-16 p-3 flex items-center justify-between">
            <Input placeholder="Enter Message..." clearable bordered color="primary" type="text" className="px-3" fullWidth onChange={e => setMessage( e.target.value )} value={message}/>
            <Button className="px-3" onPress={ sendMessage }>Send</Button>
        </div>
    )
}

export default ChatFooter;
import React from 'react';
import Navbar from './Navbar';
import Info from './Info'

const ChatBar = ({socket}) => {
    return (
        <div className="ChatBar w-1/4 border-white border-r bg-slate-800">
            <Navbar />
            <Info socket={socket} />
        </div>
    )
}

export default ChatBar;
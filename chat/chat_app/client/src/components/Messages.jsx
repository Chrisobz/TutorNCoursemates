import React from 'react';
import Message from './Message';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

const Messages = ({messages, lastMessageRef}) => {

    return (
        <div className="Messages bg-slate-800 overflow-y-scroll p-3 h-[calc(100%-64px)] no-scrollbar">
            {
                messages.map((message) => 
                    message.username === "Chat app Bot" && message.id.startsWith('Bot') ?
                    <BotMessage name={message.username} text={message.text} time={message.time} key={message.id} /> :
                    message.username === localStorage.getItem('userName') ? 
                    <UserMessage text={message.text} time={message.time} key={message.id} /> :
                    <Message name={message.username} text={message.text} time={message.time} key={message.id} />
                )
            }
            <div ref={lastMessageRef}></div>
        </div>
    )
}

export default Messages;
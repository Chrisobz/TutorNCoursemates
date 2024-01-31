import React, { useState, useEffect } from 'react';
import { Text } from '@nextui-org/react';
import Messages from './Messages';
import ChatFooter from './ChatFooter';

const ChatBody = ({ messages, socket, lastMessageRef }) => {
  // Define a state variable `room` and a function to update it
  const [room, setRoom] = useState('');

  useEffect(() => {
    // Define a callback function to handle the `roomName` event
    const handleRoomName = (data) => {
      setRoom(data);
    };

    // Attach the `handleRoomName` function to the `roomName` event
    socket.on('roomName', handleRoomName);

    // Detach the `handleRoomName` function when the component unmounts
    return () => {
      socket.off('roomName', handleRoomName);
    };
  }, [socket]); // Re-run the effect only if `socket` changes

  return (
    <div className="ChatBody h-full">
      {/* Render the `room` state in a `Text` component */}
      <div className="h-16 bg-slate-900 flex items-center justify-center p-3">
        <Text
          blockquote
          className="font-bold"
          size={30}
          css={{
            textGradient: '45deg, $blue400 -20%, $blue800 50%',
          }}
        >
          {room}
        </Text>
      </div>
      {/* Render the `Messages` and `ChatFooter` components */}
      <Messages messages={messages} lastMessageRef={lastMessageRef} />
      <ChatFooter socket={socket} />
    </div>
  );
};

export default ChatBody;

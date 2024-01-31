import React from "react";
import "./Chat.scss";


function Chat() {
  return (
    <div className="chat">
      
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Chat with coursemates</h1>
            <div className="title">
              Chat room
            </div>
            <p>
            Tutor and coursemates gives users the ability to interact with others to learn things and socialise. The link below takes you to the chat room.
            </p>
            
          
          
            <a href="http://localhost:3000/" target="_blank">Click here to go to the chat app</a>


            
          </div>
          
          <div className="item">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" controls />
          </div>
        </div>
      </div>
      
      
     
    </div>
  );
}

export default Chat;

import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <a href="medicine">Medicine and Health Sciences</a>
            <a href="law">Law </a>
            <a href="engineering">Engineering </a>
            <a href="mathematics">Mathematics </a>
            <a href="humanities">Humanities </a>
            <a href="computing">Computing</a>
            <a href="business">Business </a>
            <a href="sciences">Natural Sciences</a>
            <a href="arts">Arts </a>
            <a href="skills">Skills</a>
            
            
            
          </div>

          <div className="item">
            <h2>About</h2>
            <a href ="about">About Tutor and coursemates</a>
            
          </div>
          <div className="item">
            <h2>Support</h2>
            <a href = "help">Help & Support</a>
          </div>

          <div className="item">
            <h2>Chat with coursemates</h2>
            <a href = "chat">Chat</a>
          </div>
          
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Tutor and Coursemates</h2>
            <span>© Tutor and Coursemates</span>
          </div>
          <div className="right">
            
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

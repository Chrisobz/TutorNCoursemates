import React from "react";
import "./About.scss";


function About() {
  return (
    <div className="about">
      
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>About us</h1>
            <div className="title">
              
              A final year project
            </div>
            <p>
            Tutor and Coursemates is a web application designed and created by Chris Obiora, 
            a final year student at Nottingham Trent University. 
            Chris built this platform as part of his final year dissertation project, 
            with the goal of providing a platform for students to easily connect with tutors and classmates.

As a student himself, Chris understands the challenges that many students face when it comes to 
finding tutors or classmates to study with. With Tutor and Coursemates, he hopes to provide a
 solution to this problem by creating a user-friendly platform that makes it easy for students 
 to find and connect with the help they need.. 
            </p>
            
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/4308164/pexels-photo-4308164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" controls />
          </div>
        </div>
      </div>
      
      
     
    </div>
  );
}

export default About;

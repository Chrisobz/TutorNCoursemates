import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";

function Home() {
  return (
    <div className="about">
      <Featured />
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A great way to find tutors that will educate you and improve your skills</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              A budget friendly website
            </div>
            <p>
              Find quality tutors at any price point. 
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              One on one communication
            </div>
            <p>
              Find the right tutor to work with and be able to communicate easily.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments
            </div>
            <p>
              Always know what you will pay upfront. With reviews you are guaranteed 
              to pick the right tutor.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Become a tutor
            </div>
            <p>
              Gain experience for yourself and become a tutor. It is free and easy to 
              become one, with no applications required.
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" controls />
          </div>
        </div>
      </div>
      
      
     
    </div>
  );
}

export default Home;

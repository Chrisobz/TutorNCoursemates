import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Tutor App</span>
          </Link>
          <span className="dot"></span>
        </div>
        <div className="links">
          
          
          {!currentUser?.isSeller && <span>Become a Tutor</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mycourses">
                        Courses
                      </Link>
                      <Link className="link" to="/add">
                        Add New Course
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/medicine">
            Medicine and Health Sciences
            </Link>
            <Link className="link menuLink" to="/law">
            Law
            </Link>
            <Link className="link menuLink" to="/engineering">
            Engineering
            </Link>
            <Link className="link menuLink" to="/mathematics">
            Mathematics
            </Link>
            <Link className="link menuLink" to="/humanities">
            Humanities
            </Link>
            <Link className="link menuLink" to="/computing">
            Computing
            </Link>
            <Link className="link menuLink" to="/arts">
            Arts and Design
            </Link>
            <Link className="link menuLink" to="/sciences">
            Natural Sciences
            </Link>
            <Link className="link menuLink" to="/business">
            Business
            </Link>
            <Link className="link menuLink" to="/skills">
            Skills
            </Link>
            <Link className="link menuLink" to="/chat">
            Chat
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;

      
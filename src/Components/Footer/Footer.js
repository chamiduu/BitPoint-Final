import React from "react";
import { useLocation } from "react-router-dom";
import FooterContact from "./FooterContact";
import { NavLink, useParams } from "react-router-dom";
import "../../App.css";
import { Info } from "@material-ui/icons";

const Footer = () => {
  const location = useLocation();
  return (
    location.pathname !== "/tasks" &&
    location.pathname !== "/courses" &&
    location.pathname !== "/task/:id" && (
      <footer>
        <div className="content">
          <div className="about">
            <p className="answer">
              BitPoint is a website which helps students to enhance their ICT
              skills through hand-picked great courses and tasks. BitPoint is
              available for students of all levels, anywhere and everywhere.
            </p>
          </div>
          <div className="footer-nav">
            <NavLink
              className="menuButton"
              to="/"
              exact
              activeStyle={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#2b7cff",
              }}
            >
              Home
            </NavLink>
            <NavLink
              className="menuButton"
              to="/tasks"
              activeStyle={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#2b7cff",
              }}
            >
              Tasks
            </NavLink>
            <NavLink
              className="menuButton"
              to="/onlinetest"
              activeStyle={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#2b7cff",
              }}
            >
              Online Tests
            </NavLink>
            <NavLink
              className="menuButton"
              to="/contact"
              activeStyle={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#2b7cff",
              }}
            >
              Contact
            </NavLink>
          </div>
          <div className="footer-nav">
            <Info color="secondary" />
            <p>
              This website is made for YCS competition by Chamindu Jayanath,
              Manula Thejan and Gothira Mendis.
            </p>
          </div>
          <span id="copyrights">Copyright Reserved. BitPoint© 2021 </span>
        </div>
      </footer>
    )
  );
};

export default Footer;

import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logoGIF from "../Img/logo.png";

const useStyles = makeStyles(() => ({
  header: {
    transition: "0.5s ease",
    background: "#ffffffb0",
    backdropFilter: "blur(10px)",
    width: "90%",
    paddingRight: "79px",
    paddingLeft: "50px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    color: "#000",
    position: "absolute",
    top: "20px",
    left: "5%",
    borderRadius: "25px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },

  logo: {
    width: "50px",
  },
  logoMobile: {},
  menuButton: {
    fontFamily: "Titillium Web, sans-serif",
    fontWeight: 700,
    size: "35px",
    marginLeft: "38px",
    textDecoration: "none",
    color: "#272727",
  },
  mobileMenuButton: {
    fontFamily: "Titillium Web, sans-serif",
    fontWeight: 700,
    size: "24px",
    marginLeft: "38px",
    textDecoration: "none",
    color: "#272727",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    width: "200px",
    height: "100%",
    background: "#ffffff",
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  menu: {
    color: "#0363ff",
  },
}));

export default function Nav() {
  const {
    header,
    menuButton,
    menu,
    mobileMenuButton,
    toolbar,
    drawerContainer,
    drawer,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });


  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "#fff",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon className={menu} />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
            onClick: handleDrawerClose,
          }}
          className={drawer}
        >
          <div className={drawerContainer}>
            <img
              src={logoGIF}
              to="/"
              alt="logo"
              style={{
                height: "100px",
                width: "100px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></img>
            {getDrawerChoices()}
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "200px",
        }}
      >
        <NavLink
          className={mobileMenuButton}
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "#0363ff",
          }}
        >
          Home
        </NavLink>

        <NavLink
          className={mobileMenuButton}
          to="/tasks"
          activeStyle={{
            fontWeight: "bold",
            color: "#0363ff",
          }}
        >
          Tasks
        </NavLink>
        <NavLink
          className={mobileMenuButton}
          to="/courses"
          activeStyle={{
            fontWeight: "bold",
            color: "#0363ff",
          }}
        >
          Courses
        </NavLink>
        
        <NavLink
          className={mobileMenuButton}
          to="/contact"
          activeStyle={{
            fontWeight: "bold",
            color: "#0363ff",
          }}
        >
          Contact
        </NavLink>
      </div>
    );
  };

  const femmecubatorLogo = (
    <NavLink to="/"><img src={logoGIF} alt="logo" style={{ height: "55px", width: "150px" }}></img></NavLink> 
  );

  const getMenuButtons = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "600px",
        }}
      >
        <NavLink
          className={menuButton}
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#0363ff",
          }}
        >
          Home
        </NavLink>

        <NavLink
          className={menuButton}
          to="/courses"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#0363ff",
          }}
        >
          Courses
        </NavLink>

        <NavLink
          className={menuButton}
          to="/tasks"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#0363ff",
          }}
        >
          Tasks
        </NavLink>

        <NavLink
          className={menuButton}
          to="/contact"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#0363ff",
          }}
        >
          Contact
        </NavLink>
      </div>
    );
  };

  return (
    <header>
      <AppBar className={header} elevation={0}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

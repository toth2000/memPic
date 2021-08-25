import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from 'jwt-decode';

import memories from "../../images/img-logo.png";
import useStyles from "./style";
import { removeUser } from "../../actions/auth";

const NavBar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(null);

  const userChange = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    try {
      setUser(JSON.parse(localStorage.getItem("profile")));

      /** Checking token expiry */
      const token = user.token;
      const decodedToken = decode(token);

      if(decodedToken.exp * 1000 < new Date().getTime())
        handleLogout();

    } catch (error) {}
  }, [userChange]);

  const handleLogout = () => {
    dispatch(removeUser());
    history.push("/");
    setUser(null);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          MemPic
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            />
            <Typography className={classes.userName} variant="h6">
              {" "}
              {user.result.name}{" "}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={handleLogout}
            >
              {" "}
              Logout{" "}
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            {" "}
            Sign In{" "}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

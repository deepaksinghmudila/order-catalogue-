import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { blue } from "@material-ui/core/colors";
import Badge from "@material-ui/core/Badge";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = ({ cartValue, countinueShoping, checkOut }) => {
  const classes = useStyles();

  return (
    <Navbar bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand href="#home" onClick={() => countinueShoping()}>
          My Cafe
        </Navbar.Brand>

        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={}
            />
          </div>
        </Toolbar>

        <Nav className="ml-auto">
          <Badge badgeContent={cartValue} color="secondary">
            <a href="#cart" onClick={() => checkOut()}>
              <ShoppingCartIcon style={{ color: blue[50] }} />
            </a>
          </Badge>
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavBar;

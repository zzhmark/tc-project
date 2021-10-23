import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import RTLNavbarLinks from "./RTLNavbarLinks.js";
import Button from "components/CustomButtons/Button.js";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import styles from "assets/jss/nextjs-material-dashboard/components/headerStyle.js";
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function Header(props) {
  // used for checking current route
  const router = useRouter();
  // create styles for this component
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  function makeBrand() {
    var name = "NextJS Material Dashboard";
    props.routes.map((prop) => {
      if (router.route.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  }
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });

  const options = props.routes.map(v =>(v.name))
  const options_p = props.routes.map(v=>(v.layout + v.path))

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(options_p.indexOf(router.asPath));

  const handleClick = () =>{
    router.push(options_p[selectedIndex])
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    router.push(options_p[index])
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };


  return (
      <AppBar className={classes.appBar + appBarClasses} >
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            {/* Here we create navbar brand, based on route name */}
            {router.pathname.includes('/admin/preventions') ?(
                    <>
                      <Hidden mdUp implementation="css">
                        <ButtonGroup ref={anchorRef}>
                          <Button onClick={handleClick} color="primary" >{options[selectedIndex]}</Button>
                          <Button
                              color="secondary"
                              size="small"
                              round
                              onClick={handleToggle}
                          >
                            <ArrowDropDownIcon />
                          </Button>
                        </ButtonGroup>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal
                        placement='bottom-start'>
                          {({ TransitionProps, placement }) => (
                              <Grow
                                  {...TransitionProps}
                                  style={{
                                    transformOrigin: 'center top',
                                  }}
                              >
                                <Paper>
                                  <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu">
                                      {options.map((option, index) => (
                                          <MenuItem
                                              key={option}
                                              selected={index === selectedIndex}
                                              onClick={(event) => handleMenuItemClick(event, index)}
                                          >
                                            {option}
                                          </MenuItem>
                                      ))}
                                    </MenuList>
                                  </ClickAwayListener>
                                </Paper>
                              </Grow>
                          )}
                        </Popper>
                      </Hidden>
                      <Hidden smDown implementation="css">
                        {props.routes.map((v) => (
                            <Button color={v.layout + v.path === router.asPath ? 'primary' : 'transparent'}
                                    onClick={()=>{router.push(v.layout + v.path)}} className={classes.title} round>
                              {v.name}
                            </Button>
                        ))}
                      </Hidden>
                    </>)
                :(
                    <Button color="transparent" href="#" className={classes.title}>
                      {makeBrand()}
                    </Button>
                )}
          </div>
          {/*<Hidden smDown implementation="css">*/}
          {/*  {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}*/}
          {/*</Hidden>*/}
          <Hidden mdUp implementation="css">
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};

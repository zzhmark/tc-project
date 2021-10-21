/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button"
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";
import Avatar from '@material-ui/core/Avatar'
import styles from "assets/jss/nextjs-material-dashboard/components/sidebarStyle.js";

export default function Sidebar(props) {
  // used for checking current route
  const router = useRouter();
  // creates styles for this component
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return router.route.indexOf(routeName) > -1 ? true : false;
  }
  const { color, logo, image, logoText, routes } = props;
  var links = (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          var activePro = " ";
          var listItemClasses;
          if (prop.path === "/about-us") {
            activePro = classes.activePro + " ";
            listItemClasses = classNames({
              [" " + classes[color]]: true,
            });
          } else {
            listItemClasses = classNames({
              [" " + classes[color]]: activeRoute(prop.layout + prop.path),
            });
          }
          const whiteFontClasses = classNames({
            [" " + classes.whiteFont]:
            activeRoute(prop.layout + prop.path) ||
            prop.path === "/about-us",
          });
          return (
              <Link href={prop.layout + prop.path} key={key}>
                <a className={activePro + classes.item}>
                  <ListItem button className={classes.itemLink + listItemClasses}>
                    {typeof prop.icon === "string" ? (
                        <Icon
                            className={classNames(classes.itemIcon, whiteFontClasses, {
                              [classes.itemIconRTL]: props.rtlActive,
                            })}
                        >
                          {prop.icon}
                        </Icon>
                    ) : (
                        <prop.icon
                            className={classNames(classes.itemIcon, whiteFontClasses, {
                              [classes.itemIconRTL]: props.rtlActive,
                            })}
                        />
                    )}
                    <ListItemText
                        primary={props.rtlActive ? prop.rtlName : prop.name}
                        className={classNames(classes.itemText, whiteFontClasses, {
                          [classes.itemTextRTL]: props.rtlActive,
                        })}
                        disableTypography={true}
                    />
                  </ListItem>
                </a>
              </Link>
          );
        })}
      </List>
  );
  var brand = (
      <div className={classes.logo}>
          <a
              href="/login"
              className={classNames(classes.logoLink, {
                  [classes.logoLinkRTL]: props.rtlActive,
              })}
              target="_blank"
          >
              <Avatar src={logo} style={{ margin: "auto" }} />
              <Button
                  style={{
                      backgroundColor: "#00000000",
                      boxShadow: "none",
                      padding: "0.5rem",
                      fontSize: "1.5rem",
                      fontFamily: [
                          "-apple-system",
                          "BlinkMacSystemFont",
                          '"Segoe UI"',
                          "Roboto",
                          '"Helvetica Neue"',
                          "Arial",
                          "sans-serif",
                          '"Apple Color Emoji"',
                          '"Segoe UI Emoji"',
                          '"Segoe UI Symbol"',
                      ].join(","),
                      display: "flex",
                      width: "100%",
                  }}
              >
                      <span style={{
                          margin: "auto", color: '#ffffffdd',
                          fontFamily: '"Times New Roman", sans-serif' }}>
                          {logoText}
                      </span>
              </Button>
          </a>
      </div>
  );
  return (
      <div>
        <Hidden mdUp implementation="css">
          <Drawer
              variant="temporary"
              anchor={props.rtlActive ? "left" : "right"}
              open={props.open}
              classes={{
                paper: classNames(classes.drawerPaper, {
                  [classes.drawerPaperRTL]: props.rtlActive,
                }),
              }}
              onClose={props.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>
              {/*{props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}*/}
              {links}
            </div>
            {image !== undefined ? (
                <div
                    className={classes.background}
                    style={{ backgroundImage: "url(" + image + ")" }}
                />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
              anchor={props.rtlActive ? "right" : "left"}
              variant="permanent"
              open
              classes={{
                paper: classNames(classes.drawerPaper, {
                  [classes.drawerPaperRTL]: props.rtlActive,
                }),
              }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>{links}</div>
            {image !== undefined ? (
                <div
                    className={classes.background}
                    style={{ backgroundImage: "url(" + image + ")" }}
                />
            ) : null}
          </Drawer>
        </Hidden>
      </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf([
    "white",
    "purple",
    "blue",
    "green",
    "orange",
    "red",
  ]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
